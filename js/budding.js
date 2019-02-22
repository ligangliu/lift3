
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
$("#part01").combotree({
        url:manage_propertyUnit_getName_url,
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
    url:manage_propertyUnit_getName_url,
    height:26,
    width:'250px',
    onSelect:function () {
        var t=$("#part02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#part02").combotree('setValue',text);
    }
})
// 加载详情页面部门下拉框
$("#edit_part01").combotree({
    url:manage_propertyUnit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_part01").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#edit_part01").combotree('setValue',text);
    }
})
obj={
        // 查询
        find:function () {
            var data = {}
            var buddingname = $("#find_buddingname").val();
            if (buddingname !== ""){
                data["buddingname"] = buddingname
            }
            var address = $("#find_address").val();
            if (address !== ""){
                data["address"] = address
            }
            var propertyunit = $("#part02").combotree('getValue');
            if (propertyunit !== ""){
                data["propertyunit"] = propertyunit
            }
            // 加载表格
            $("#table").datagrid({
                title:"数据列表",
                iconCls:"icon-left02",
                url:manage_budding_gets_url,
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
                        field:'buddingname',
                        title:'楼宇名',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'address',
                        title:'地址',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'propertyunit',
                        title:'产权单位',
                        width:100,
                        align:'center'
                    }, {
                        field:'region',
                        title:'区域',
                        width:100,
                        align:'center'
                    },
                    {
                        field:"opr",
                        title:'操作',
                        width:100,
                        align:'center',
                        formatter:function (val,row) {
                            e = '<a  id="add" data-id="98" class=" operA"  onclick="obj.edit(\'' + row.id + '\')">编辑</a> ';
                            //c = '<a  id="look"   onclick="obj.look(\'' + row.id + '\')">流程查看</a> ';
                            d = '<a  id="add" data-id="98" class=" operA01"  onclick="obj.delOne(\'' + row.id + '\')">删除</a> ';
                            return e+d;
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
            $("#buddingname").val('');
            $("#address").val('');
            $("#part01").combotree('setValue','');
        },
        /*editBox:function () {
            $("#editBox").dialog({
                closed: false
            });
            $("#edit_id").val('');
            $("#edit_buddingname").val('');
            $("#edit_address").val('');
            $("#edit_part01").combotree('setValue','');
        },*/
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:manage_budding_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    console.log("data")
                    if (data.status === 1000){
                        $("#edit_id").val(id);
                        $("#edit_buddingname").val(data.data.buddingname);
                        $("#edit_address").val(data.data.address);
                        $('#edit_part01').combotree('setValue', data.data.propertyunit);
                        $('#edit_region').datebox('setValue', data.data.region);
                    }
                    else{
                    }
                }
            })
        },
        add:function () {
                var data = {}
                var buddingname = $("#buddingname").val()
                if (buddingname !== ""){
                    data["buddingname"] = buddingname
                }
                var address = $("#address").val();
                if (address !== ""){
                    data["address"] = address
                }
                var propertyunit = $("#part01").combotree('getValue');
                if (propertyunit !== ""){
                    data["propertyunit"] = propertyunit
                }
                var region = $("#city").val();
                if (region !== ""){
                    data["region"] = region
                }

                $.messager.confirm('提示信息','是否添加楼宇信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:manage_budding_add_url,
                            data:JSON.stringify(data),
                            success:function (data) {
                                if(data.status === 1000){
                                    $("#addBox").dialog({
                                        closed: true
                                    });
                                    $.messager.show({
                                        title:'提示信息',
                                        msg:"楼宇添加成功"
                                    });
                                    $("#table").datagrid('loaded');
                                    $("#table").datagrid('load');
                                    $("#table").datagrid('unselectAll');
                                    //刷新页面
                                   // window.location.reload()
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"楼宇添加失败"
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
            var buddingname = $("#edit_buddingname").val()
            if (buddingname !== ""){
                data["buddingname"] = buddingname
            }
            var address = $("#edit_address").val();
            if (address !== ""){
                data["address"] = address
            }
            var propertyunit = $("#edit_part01").combotree('getValue');
            if (propertyunit !== ""){
                data["propertyunit"] = propertyunit
            }
            $.messager.confirm('提示信息','是否更新楼宇信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:manage_budding_update_url,
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
                                    msg:"楼宇更新成功"
                                })
                                //刷新页面
                                // window.location.reload()
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"楼宇更新失败"
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
                                       // console.log(ids)
                                      $.ajax({
                                              type:'post',
                                              url:manage_budding_del_url,
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
                                                                      msg:num+'座楼宇被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"楼宇删除失败"
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
                // console.log(id)
                // id=$("#table").datagrid('getSelected').id;
                $.messager.confirm('提示信息','是否删除所选择记录',function (flg) {
                        if(flg){
                                $.ajax({
                                        type:'post',
                                        url:manage_budding_del_url,
                                        data:{
                                                ids:id
                                        },
                                        beforesend:function () {
                                                $("#table").datagrid('loading');
                                        },
                                        success:function (data) {
                                                console.log(data.status)
                                                if(data.status === 1000){
                                                        $("#table").datagrid("loaded");
                                                        $("#table").datagrid("load");
                                                        $("#table").datagrid("unselectRow");
                                                        $.messager.show({
                                                                title:'提示信息',
                                                                msg:"楼宇删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"楼宇删除失败"
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
        url:manage_budding_gets_url,
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
                        field:'buddingname',
                        title:'楼宇名称',
                        width:100,
                        align:'center'
                },
                {
                        field:'address',
                        title:'楼宇地址',
                        width:100,
                        align:'center'
                },
                {
                        field:'propertyunit',
                        title:'产权单位',
                        width:100,
                        align:'center'
                }, {
                        field:'region',
                        title:'区域',
                        width:100,
                        align:'center'
                },
                {
                        field:"opr",
                        title:'操作',
                        width:100,
                        align:'center',
                        formatter:function (val,row) {
                                e = '<a  id="add" data-id="98" class=" operA"  onclick="obj.edit(\'' + row.id + '\')">编辑</a> ';
                                //c = '<a  id="look"   onclick="obj.look(\'' + row.id + '\')">流程查看</a> ';
                                d = '<a  id="add" data-id="98" class=" operA01"  onclick="obj.delOne(\'' + row.id + '\')">删除</a> ';
                                return e+d;
                        }
                }
        ]]
})
// 弹出框加载
$("#addBox").dialog({
        title:"新增楼宇",
        width:500,
        height:300,
        closed: true,
        modal:true,
        shadow:true
})
// 弹出框加载
$("#editBox").dialog({
    title:"编辑楼宇",
    width:500,
    height:300,
    closed: true,
    modal:true,
    shadow:true
})
