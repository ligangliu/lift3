
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
$("#rolename01").combotree({
        url:sso_role_getName_url,
        height:26,
        width:'250px',
        onSelect:function () {
                var t=$("#rolename01").combotree('tree');
                var n=t.tree('getSelected');
                $("#rolename01").combotree('setValue',n.id)
                $("#rolename01").combotree('setText',n.text)
        }
})
$("#rolename02").combotree({
    url:sso_role_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#rolename02").combotree('tree');
        var n=t.tree('getSelected');
        $("#rolename02").combotree('setValue',n.id)
        $("#rolename02").combotree('setText',n.text)
    }
})
// 加载详情页面部门下拉框
$("#edit_rolename02").combotree({
    url:sso_role_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_rolename02").combotree('tree');
        var n=t.tree('getSelected');
        $("#edit_rolename02").combotree('setValue',n.id)
        $("#edit_rolename02").combotree('setText',n.text)
    }
})
obj={
        // 查询
        find:function () {
            var data = {}
            var username = $("#find_username").val();
            if (username !== "") {
                data["username"] = username
            }
            var rolename = $("#rolename01").combotree('getText');
            var roleid = $("#rolename01").combotree('getValue');
            if (roleid !== ""){
                data["roleid"] = roleid
            }
            // 加载表格
            $("#table").datagrid({
                title:"数据列表",
                iconCls:"icon-left02",
                url:sso_user_gets_url,
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
                        field:'username',
                        title:'用户名称',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'phone',
                        title:'联系方式',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'email',
                        title:'联系邮箱',
                        width:50,
                        align:'center'
                    }, {
                        field:'rolename',
                        title:'所属角色',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'createtime',
                        title:'添加时间',
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
           $("#addForm").form('clear');
        },
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:sso_user_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    if (data.status === 1000) {
                        //根据id查询的信息填充至编辑页面
                        $("#edit_id").val(id);
                        $("#edit_username").val(data.data.username);
                        $("#edit_phone").val(data.data.phone);
                        $("#edit_email").val(data.data.email);
                        $("#edit_rolename02").combotree('setValue',data.data.roleid)
                        $("#edit_rolename02").combotree('setText',data.data.rolename)
                    }
                    else{
                        }
                }
            })
        },
        add:function () {
                var data = {}
                //对于那些没有填写的数据项不需要传入后台
                var username = $("#username").val()
                if (username !== ""){
                    data["username"] = username
                }
                var password = $("#password").val()
                if (password !== ""){
                    data["password"] = password
                }
                var phone = $("#phone").val();
                if (phone !== ""){
                    data["phone"] = phone
                }
                var email = $("#email").val()
                if (email !== ""){
                    data["email"] = email
                }
                var roleid = $("#rolename02").combotree('getValue')
                if (roleid !== ""){
                    data["roleid"] = roleid
                }
                var rolename = $("#rolename02").combotree('getText')
                if (rolename !== ""){
                    data["rolename"] = rolename
                }
            $.messager.confirm('提示信息','是否添加用户信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:sso_user_add_url,
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
                                        msg:"用户信息添加成功"
                                    })
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"用户信息添加失败"
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
            /**
             * 用户名名称是不能被修改的
             */
            /*var username = $("#edit_username").val()
            if (username !== ""){
                data["username"] = username
            }*/
            var phone = $("#edit_phone").val();
            if (phone !== ""){
                data["phone"] = phone
            }
            var email = $("#edit_email").val()
            if (email !== ""){
                data["email"] = email
            }
            var roleid = $("#edit_rolename02").combotree('getValue')
            if (roleid !== ""){
                data["roleid"] = roleid
            }
            var rolename = $("#edit_rolename02").combotree('getText')
            if (rolename !== ""){
                data["rolename"] = rolename
            }
            $.messager.confirm('提示信息','是否更新用户信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:sso_user_update_url,
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
                                    msg:"用户信息更新成功"
                                })
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"用户信息更新失败"
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
                                              url:sso_user_del_url,
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
                                                                      msg:num+'位用户信息被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"用户信息删除失败"
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
                                        url:sso_user_del_url,
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
                                                                msg:"用户信息删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"用户信息删除失败"
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
        url:sso_user_gets_url,
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
            field:'username',
            title:'用户名称',
            width:50,
            align:'center'
        },
        {
            field:'phone',
            title:'联系方式',
            width:50,
            align:'center'
        },
        {
            field:'email',
            title:'联系邮箱',
            width:50,
            align:'center'
        }, {
            field:'rolename',
            title:'所属角色',
            width:50,
            align:'center'
        },
        {
            field:'createtime',
            title:'添加时间',
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
        title:"新增用户信息",
        width:500,
        height:300,
        closed: true,
        modal:true,
        shadow:true
})
// 弹出框加载
$("#editBox").dialog({
    title:"编辑用户信息",
    width:500,
    height:300,
    closed: true,
    modal:true,
    shadow:true
})
