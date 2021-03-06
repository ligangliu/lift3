
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
        /!**
         *
         *
         * url有可能需要更改
         *!/
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
    /!**
     *
     *
     * url有可能需要更改
     *!/
    url:manage_propertyUnit_getName_url,
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
            var companyname = $("#find_companyname").val();
            if (companyname !== "") {
                data["companyname"] = companyname
            }
            var companyaddress = $("#find_companyaddress").val();
            if (companyaddress !== "") {
                data["companyaddress"] = companyaddress
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
                url:manage_insuranceunit_gets_url,
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
                        field:'companyname',
                        title:'公司名称',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'companyaddress',
                        title:'公司地址',
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
                        field:'companyphone',
                        title:'公司电话',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'juridicalperson',
                        title:'法人名称',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'manager',
                        title:'经理名称',
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

           //将上次新增的内容置空
           $("#companyname").val("");
           $("#companyaddress").val("");
           $("#licensenumber").val("")
           $("#companyphone").val("")
           $("#juridicalperson").val("");
           $("#manager").val("");
           $("#juridicalpersonphone").val("");
           $("#managerphone").val("");
        },
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:manage_insuranceunit_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    if (data.status === 1000) {
                        //根据id查询的信息填充至编辑页面
                        $("#edit_id").val(id);
                        $("#edit_companyname").val(data.data.companyname);
                        $("#edit_companyaddress").val(data.data.companyaddress);
                        $("#edit_licensenumber").val(data.data.licensenumber);
                        $("#edit_companyphone").val(data.data.companyphone);
                        $("#edit_juridicalperson").val(data.data.juridicalperson);
                        $("#edit_manager").val(data.data.manager);
                        $("#edit_juridicalpersonphone").val(data.data.juridicalpersonphone);
                        $("#edit_managerphone").val(data.data.managerphone);
                    }
                    else{
                        }
                }
            })
        },
        add:function () {
                var data = {}
                //对于那些没有填写的数据项不需要传入后台
                var companyname = $("#companyname").val()
                if (companyname !== ""){
                    data["companyname"] = companyname
                }
                var companyaddress = $("#companyaddress").val();
                if (companyaddress !== ""){
                    data["companyaddress"] = companyaddress
                }
                var companyphone = $("#companyphone").val()
                if (companyphone !== ""){
                    data["companyphone"] = companyphone
                }
                var licensenumber = $("#licensenumber").val()
                if (licensenumber !== ""){
                    data["licensenumber"] = licensenumber
                }
                var juridicalperson = $("#juridicalperson").val();
                if (juridicalperson !== ""){
                    data["juridicalperson"] = juridicalperson
                }
                var juridicalpersonphone = $("#juridicalpersonphone").val();
                if (juridicalpersonphone !== ""){
                    data["juridicalpersonphone"] = juridicalpersonphone
                }
                var manager = $("#manager").val();
                if (manager !== ""){
                    data["manager"] = manager
                }
                var managerphone = $("#managerphone").val();
                if (managerphone !== ""){
                    data["managerphone"] = managerphone
                }
            $.messager.confirm('提示信息','是否添加保险单位信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:manage_insuranceunit_add_url,
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
                                        msg:"保险单位添加成功"
                                    })
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"保险单位添加失败"
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
            var companyname = $("#edit_companyname").val();
            if (companyname !== ""){
                data["companyname"] = companyname
            }
            var companyaddress = $("#edit_companyaddress").val();
            if (companyaddress !== ""){
                data["companyaddress"] = companyaddress
            }
            var licensenumber = $("#edit_licensenumber").val();
            if (licensenumber !== ""){
                data["licensenumber"] = licensenumber
            }
            var juridicalperson = $("#edit_juridicalperson").val();
            if (juridicalperson !== ""){
                data["juridicalperson"] = juridicalperson
            }
            var juridicalpersonphone = $("#edit_juridicalpersonphone").val();
            if (juridicalpersonphone !== ""){
                data["juridicalpersonphone"] = juridicalpersonphone
            }
            var companyphone = $("#edit_companyphone").val();
            if (companyphone !== ""){
                data["companyphone"] = companyphone
            }
            var manager = $("#edit_manager").val();
            if (manager !== ""){
                data["manager"] = manager
            }
            var managerphone = $("#edit_managerphone").val();
            if (managerphone !== ""){
                data["managerphone"] = managerphone
            }
            $.messager.confirm('提示信息','是否更新保险单位信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:manage_insuranceunit_update_url,
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
                                    msg:"保险单位更新成功"
                                })
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"保险单位更新失败"
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
                                              url:manage_insuranceunit_del_url,
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
                                                                      msg:num+'座保险单位被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"保险单位删除失败"
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
                                        url:manage_insuranceunit_del_url,
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
                                                                msg:"保险单位删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"保险单位删除失败"
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
        url:manage_insuranceunit_gets_url,
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
            field:'companyname',
            title:'公司名称',
            width:100,
            align:'center'
        },
        {
            field:'companyaddress',
            title:'公司地址',
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
            field:'companyphone',
            title:'公司电话',
            width:50,
            align:'center'
        },
        {
            field:'juridicalperson',
            title:'法人名称',
            width:50,
            align:'center'
        },
        {
            field:'manager',
            title:'经理名称',
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
                return e+d;
            }
        }
    ]]
})
// 弹出框加载
$("#addBox").dialog({
        title:"新增保险单位",
        width:500,
        height:500,
        closed: true,
        modal:true,
        shadow:true
})
// 弹出框加载
$("#editBox").dialog({
    title:"编辑保险单位",
    width:500,
    height:500,
    closed: true,
    modal:true,
    shadow:true
})
