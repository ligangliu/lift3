
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


// 加载详情页面部门下拉框
/*$("#part01").combotree({
        url:manage_productionunit_getName_url,
        height:26,
        width:'70%',
        onSelect:function () {
                var t=$("#part01").combotree('tree');
                var n=t.tree('getSelected');
                var text=n.text;
                $("#part01").combotree('setValue',text);
        }
})
$("#part02").combotree({
    /!**
     *
     *
     * url有可能需要更改
     *!/
    url:manage_productionunit_getName_url,
    height:26,
    width:'250px',
    onSelect:function () {
        var t=$("#part02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#part02").combotree('setValue',text);
    }
})*/
// 加载详情页面部门下拉框
/*$("#edit_part01").combotree({
    /!**
     *
     *
     * url有可能需要更改
     *!/
    url:manage_propertyUnit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_part01").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#edit_part01").combotree('setValue',text);
    }
})*/
obj={
        // 查询
        find:function () {
            var data = {}
            /**
             *
             * 根据条件进行查询
             *
             */
            var manufacturername = $("#find_manufacturername").val();
            if (manufacturername !== "") {
                data["manufacturername"] = manufacturername
            }
            var manufactureraddress = $("#find_manufactureraddress").val();
            if (manufactureraddress !== "") {
                data["manufactureraddress"] = manufactureraddress
            }
            var licensenumber = $("#find_licensenumber").val();
            if (licensenumber !== "") {
                data["licensenumber"] = licensenumber
            }
            var juridicalperson = $("#find_juridicalperson").val();
            if (juridicalperson !== "") {
                data["juridicalperson"] = juridicalperson
            }
            // 加载表格
            $("#table").datagrid({
                title:"数据列表",
                iconCls:"icon-left02",
                url:manage_productionunit_gets_url,
                //加入查询条件
                queryParams:data,
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
                        field:'manufacturername',
                        title:'厂家名称',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'manufactureraddress',
                        title:'厂家地址',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'licensenumber',
                        title:'执照编码',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'qualificertificatenumber',
                        title:'资质编码',
                        width:50,
                        align:'center'
                    },{
                        field:'juridicalperson',
                        title:'法人名称',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'manufacturerphone',
                        title:'厂家电话',
                        width:50,
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
                            c = '<a  id="jump" onclick="obj.jump(\'' + row.id + '\', \'' + row.manufacturername + '\')">品牌列表</a> ';
                            return e+d+c;
                        }
                    }
                ]]
            })
        },
        // 添加
       addBox:function () {
            $("#addBox").dialog({
                    closed: false
            });
            //将上次新增的内容置空
           $("#manufacturername").val("");
           $("#manufactureraddress").val("")
           $("#manufacturerphone").val("")
           $("#licensenumber").val("");
           $("#qualificertificatenumber").val("");
           $("#juridicalperson").val("");
           $("#juridicalpersonphone").val("");
        },
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:manage_productionunit_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    if (data.status === 1000) {
                        //根据id查询的信息填充至编辑页面
                        $("#edit_id").val(id);
                        $("#edit_manufacturername").val(data.data.manufacturername);
                        $("#edit_manufactureraddress").val(data.data.manufactureraddress);
                        $("#edit_manufacturerphone").val(data.data.manufacturerphone);
                        $("#edit_licensenumber").val(data.data.licensenumber);
                        $("#edit_qualificertificatenumber").val(data.data.qualificertificatenumber);
                        $("#edit_juridicalperson").val(data.data.juridicalperson);
                        $("#edit_juridicalpersonphone").val(data.data.juridicalpersonphone);
                    }
                    else{
                        }
                }
            })
        },
        jump:function (id,manufacturername) {
            // alert(id);
            // alert(manufacturername);
            window.location.href = "/lift/manusubbra.html?id="+id+"&manufacturername="+manufacturername
        },
        add:function () {
                var data = {}
                //对于那些没有填写的数据项不需要传入后台
                var manufacturername = $("#manufacturername").val()
                if (manufacturername !== ""){
                    data["manufacturername"] = manufacturername
                }
                var manufactureraddress = $("#manufactureraddress").val();
                if (manufactureraddress !== ""){
                    data["manufactureraddress"] = manufactureraddress
                }
                var manufacturerphone = $("#manufacturerphone").val()
                if (manufacturerphone !== ""){
                    data["manufacturerphone"] = manufacturerphone
                }
                var licensenumber = $("#licensenumber").val()
                if (licensenumber !== ""){
                    data["licensenumber"] = licensenumber
                }
                var qualificertificatenumber = $("#qualificertificatenumber").val();
                if (qualificertificatenumber !== ""){
                    data["qualificertificatenumber"] = qualificertificatenumber
                }
                var juridicalperson = $("#juridicalperson").val();
                if (juridicalperson !== ""){
                    data["juridicalperson"] = juridicalperson
                }
                var juridicalpersonphone = $("#juridicalpersonphone").val();
                if (juridicalpersonphone !== ""){
                    data["juridicalpersonphone"] = juridicalpersonphone
                }
            $.messager.confirm('提示信息','是否添加生产厂家信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:manage_productionunit_add_url,
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
                                        msg:"生产厂家添加成功"
                                    })
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"生产厂家添加失败"
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
            var manufacturername = $("#edit_manufacturername").val();
            if (manufacturername !== ""){
                data["manufacturername"] = manufacturername
            }
            var manufactureraddress = $("#edit_manufactureraddress").val();
            if (manufactureraddress !== ""){
                data["manufactureraddress"] = manufactureraddress
            }
            var manufacturerphone = $("#edit_manufacturerphone").val();
            if (manufacturerphone !== ""){
                data["manufacturerphone"] = manufacturerphone
            }
            var licensenumber = $("#edit_licensenumber").val();
            if (licensenumber !== ""){
                data["licensenumber"] = licensenumber
            }
            var qualificertificatenumber = $("#edit_qualificertificatenumber").val();
            if (qualificertificatenumber !== ""){
                data["qualificertificatenumber"] = qualificertificatenumber
            }
            var juridicalperson = $("#edit_juridicalperson").val();
            if (juridicalperson !== ""){
                data["juridicalperson"] = juridicalperson
            }
            var juridicalpersonphone = $("#edit_juridicalpersonphone").val();
            if (juridicalpersonphone !== ""){
                data["juridicalpersonphone"] = juridicalpersonphone
            }

            $.messager.confirm('提示信息','是否更新生产厂家信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:manage_productionunit_update_url,
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
                                    msg:"生产厂家更新成功"
                                })
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"生产厂家更新失败"
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
                                              url:manage_productionunit_del_url,
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
                                                                      msg:num+'座生产厂家被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"生产厂家删除失败"
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
                                        url:manage_productionunit_del_url,
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
                                                                msg:"生产厂家删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"生产厂家删除失败"
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
        url:manage_productionunit_gets_url,
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
            field:'manufacturername',
            title:'厂家名称',
            width:100,
            align:'center'
        },
        {
            field:'manufactureraddress',
            title:'厂家地址',
            width:100,
            align:'center'
        },
        {
            field:'licensenumber',
            title:'执照编码',
            width:50,
            align:'center'
        },
        {
            field:'qualificertificatenumber',
            title:'资质编码',
            width:50,
            align:'center'
        },{
            field:'juridicalperson',
            title:'法人名称',
            width:50,
            align:'center'
        },
        {
            field:'manufacturerphone',
            title:'厂家电话',
            width:50,
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
                //onclick="obj.jump(\'' + row.id + '\', \'' + row.manufacturername + '\')
                c = '<a  id="jump" onclick="obj.jump(\'' + row.id + '\', \'' + row.manufacturername + '\')" class="operA02">品牌列表</a> ';
                return e+d+c;

            }
        }
    ]]
})
// 弹出框加载
$("#addBox").dialog({
        title:"新增生产厂家",
        width:500,
        height:300,
        closed: true,
        modal:true,
        shadow:true
})
// 弹出框加载
$("#editBox").dialog({
    width:500,
    height:300,
    closed: true,
    modal:true,
    shadow:true
})
