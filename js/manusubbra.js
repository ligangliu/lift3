
// 加载combox
$("#combox").combo({
        width:'0%',
        height:'0%',
        multiple:false,
        display:'none'


})
$("#sp").appendTo($("#combox").combo('panel'));
$("#sp input").click(function () {
        var text=$(this).next('span').text();
        var val=$(this).val();
        $("#combox").combo('setText',text).combo('setValue',val).combo('hidePanel');

})
var LocString = String(window.document.location.href);
function GetQueryString(name) {
    var rs = new RegExp("(^|)" + name + "=([^&]*)(&|$)", "gi").exec(LocString), tmp;
    if (tmp = rs) {
        return decodeURI(tmp[2]);
    }
    // parameter cannot be found
    return "";
}
var manufacturerid = GetQueryString("id");
var manufacturername = GetQueryString("manufacturername")

obj={
        // 添加
       addBox:function () {
            $("#addBox").dialog({
                    closed: false
            });
           //将上次新增的内容置空
           $("#brandname").val("")
           $('#brandmainboard').combobox('setText','');
           $('#manufacturername').val(manufacturername);
        },
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:manage_manusubbra_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    if (data.status === 1000) {
                        //根据id查询的信息填充至编辑页面
                        $("#edit_id").val(id);
                        $("#edit_brandname").val(data.data.companyname);
                        $('#edit_brandmainboard').combobox('setValue',data.data.brandmainboard);
                        $('#edit_manufacturername').val(manufacturername);
                    }
                    else{
                        }
                }
            })
        },
        add:function () {
                var data = {}
                //对于那些没有填写的数据项不需要传入后台
                var brandname = $("#brandname").val()
                if (brandname !== ""){
                    data["brandname"] = brandname
                }
                var brandmainboard = $('#brandmainboard').combobox('getValue');
                if (brandmainboard !== ""){
                    data["brandmainboard"] = brandmainboard
                }
                data["manufacturername"] = manufacturername
                data["manufacturerid"] = manufacturerid
            $.messager.confirm('提示信息','是否添加下属品牌信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:manage_manusubbra_add_url,
                            data:JSON.stringify(data),
                            success:function (data) {
                                if(data.status === 1000){
                                    $("#addBox").dialog({
                                        closed: true
                                    })
                                    $("#table").datagrid('loaded');
                                    $("#table").datagrid('load');
                                    $("#table").datagrid('unselectAll');
                                    $.messager.show({
                                        title:'提示信息',
                                        msg:"下属品牌添加成功"
                                    })
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"下属品牌添加失败"
                                    })
                                }
                            }
                        })
                    }
                })
        },
        //编辑更新
        update:function () {
            var data = {}
            var id = $("#edit_id").val()
            data["id"] = id
            var brandname = $("#edit_brandname").val()
            if (brandname !== ""){
                data["brandname"] = brandname
            }
            var brandmainboard = $('#edit_brandmainboard').combobox('getText');
            if (brandmainboard !== ""){
                data["brandmainboard"] = brandmainboard
            }
            $.messager.confirm('提示信息','是否更新下属品牌信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:manage_manusubbra_update_url,
                        data:JSON.stringify(data),
                        success:function (data) {
                            if(data.status === 1000){
                                $("#editBox").dialog({
                                    closed: true
                                })
                                $("#table").datagrid('loaded');
                                $("#table").datagrid('load');
                                $("#table").datagrid('unselectAll');
                                $.messager.show({
                                    title:'提示信息',
                                    msg:"下属品牌更新成功"
                                })
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"下属品牌更新失败"
                                })
                            }
                        }
                    })
                }
            })
        },
        // 删除多个
        del:function () {
            var rows=$("#table").datagrid("getSelections");
               if(rows.length>0){
                       $.messager.confirm('确定删除','你确定要删除你选择的记录吗？',function (flg) {
                               if(flg){
                                       var ids=[];
                                       for(i=0;i<rows.length;i++){
                                               ids.push(rows[i].id);
                                       }
                                       var num=ids.length;
                                      $.ajax({
                                              type:'post',
                                              url:manage_manusubbra_del_url,
                                              data:{
                                                      ids:ids.join(',')
                                              },
                                              beforesend:function () {
                                                      $("#table").datagrid('loading');
                                              },
                                              success:function (data) {
                                                      if(data.status === 1000){
                                                              $("#table").datagrid('loaded');
                                                              $("#table").datagrid('load');
                                                              $("#table").datagrid('unselectAll');
                                                              $.messager.show({
                                                                      title:'提示',
                                                                      msg:num+'座下属品牌被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"下属品牌删除失败"
                                                              })
                                                      }
                                              }
                                      })
                               }
                       })
               }
               else{
                       $.messager.alert('提示','请选择要删除的记录','info');
               }
        },
        //删除一个
        delOne:function (id) {
                $.messager.confirm('提示信息','是否删除所选择记录',function (flg) {
                        if(flg){
                                $.ajax({
                                        type:'post',
                                        url:manage_manusubbra_del_url,
                                        data:{
                                                ids:id
                                        },
                                        beforesend:function () {
                                                $("#table").datagrid('loading');
                                        },
                                        success:function (data) {
                                                if(data.status === 1000){
                                                        $("#table").datagrid("loaded");
                                                        $("#table").datagrid("load");
                                                        $("#table").datagrid("unselectRow");
                                                        $.messager.show({
                                                                title:'提示信息',
                                                                msg:"下属品牌删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"下属品牌删除失败"
                                                        })
                                                }
                                        }
                                })
                        }
                })
        }
}
// 加载表格
$("#table").datagrid({
        title:"数据列表",
        iconCls:"icon-left02",
        url:manage_manusubbra_gets_url,
        queryParams:{"manufacturerid":manufacturerid},
        fitColumns:true,
        striped:true,
        pagination:true,
        pageSize:5,
        width:'100%',
        rownumbers:true,
        pageList:[5,10,15,20],
        pageNumber:1,
        nowrap:true,
        height:'auto',
        sortName:'id',
        checkOnSelect:false,
        sortOrder:'asc',
        toolbar: '#tabelBut',
        columns:[[
                {
                        checkbox:true,
                        field:'no',
                        width:100,
                        align:'center'
                },
                {
                        field:'id',
                        title:'编号',
                        width:20,
                        align:'center'
                },
                {
                        field:'brandname',
                        title:'品牌名称',
                        width:100,
                        align:'center'
                },
                {
                        field:'brandmainboard',
                        title:'名牌主板',
                        width:100,
                        align:'center'
                },
                {
                    field:'manufacturername',
                    title:'生产厂家',
                    width:100,
                    align:'center'
                },
                {
                        field:"opr",
                        title:'操作',
                        width:80,
                        align:'center',
                        formatter:function (val,row) {
                                e = '<a  id="add" data-id="98" class=" operA"  onclick="obj.edit(\'' + row.id + '\')">编辑</a> ';
                                d = '<a  id="add" data-id="98" class=" operA01"  onclick="obj.delOne(\'' + row.id + '\')">删除</a> ';
                                return e+d;
                        }
                }
        ]]
})
// 弹出框加载
$("#addBox").dialog({
        title:"新增下属品牌",
        width:500,
        height:300,
        closed: true,
        modal:true,
        shadow:true
})


// 弹出框加载
$("#editBox").dialog({
    title:"编辑下属品牌",
    width:500,
    height:300,
    closed: true,
    modal:true,
    shadow:true
})
