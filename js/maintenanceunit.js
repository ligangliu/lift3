
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
})
// 加载详情页面部门下拉框
$("#edit_part01").combotree({
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
            var maintenanceunitaddress = $("#find_maintenanceunitaddress").val();
            if (maintenanceunitaddress !== "") {
                data["maintenanceunitaddress"] = maintenanceunitaddress
            }
            // 加载表格
            $("#table").datagrid({
                title:"数据列表",
                iconCls:"icon-left02",
                url:manage_maintenanceunit_gets_url,
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
                        field:'qualificertificatenumber',
                        title:'资质编码',
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
                        field:'companyphone',
                        title:'公司电话',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'maintenanceunitaddress',
                        title:'维保点地址',
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
        },
        // 添加
       addBox:function () {
            $("#addBox").dialog({
                    closed: false
            });
           //将上次新增的内容置空
           $("#companyname").val("")
           $("#companyaddress").val("");
           $("#maintenanceunitaddress").val("")
           $("#licensenumber").val("")
           $("#qualificertificatenumber").val("");
           $("#companyphone").val("");
           $("#juridicalperson").val("");
           $("#resident").val("");
           $("#maintenancemanager").val("");
           $("#maintenancemanagerphone").val("");
           $("#firstcontact").val("");
           $("#firstcontactphone").val("");
           $("#secondcontact").val("");
           $("#secondcontactphone").val("");
        },
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:manage_maintenanceunit_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    if (data.status === 1000) {
                        //根据id查询的信息填充至编辑页面
                        $("#edit_id").val(id);
                        $("#edit_companyname").val(data.data.companyname);
                        $("#edit_companyaddress").val(data.data.companyaddress);
                        $("#edit_maintenanceunitaddress").val(data.data.maintenanceunitaddress);
                        $("#edit_licensenumber").val(data.data.licensenumber);
                        $("#edit_qualificertificatenumber").val(data.data.qualificertificatenumber);
                        $("#edit_companyphone").val(data.data.companyphone);
                        $("#edit_juridicalperson").val(data.data.juridicalperson);

                        $("#edit_resident").val(data.data.resident);
                        $("#edit_maintenancemanager").val(data.data.maintenancemanager);
                        $("#edit_maintenancemanagerphone").val(data.data.maintenancemanagerphone);
                        $("#edit_firstcontact").val(data.data.firstcontact);
                        $("#edit_firstcontactphone").val(data.data.firstcontactphone);
                        $("#edit_secondcontact").val(data.data.secondcontact);
                        $("#edit_secondcontactphone").val(data.data.secondcontactphone);
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
                var maintenanceunitaddress = $("#maintenanceunitaddress").val();
                if (maintenanceunitaddress !== ""){
                    data["maintenanceunitaddress"] = maintenanceunitaddress
                }
                var licensenumber = $("#licensenumber").val()
                if (licensenumber !== ""){
                    data["licensenumber"] = licensenumber
                }
                var qualificertificatenumber = $("#qualificertificatenumber").val()
                if (qualificertificatenumber !== ""){
                    data["qualificertificatenumber"] = qualificertificatenumber
                }
                var companyphone = $("#companyphone").val()
                if (companyphone !== ""){
                    data["companyphone"] = companyphone
                }
                var juridicalperson = $("#juridicalperson").val();
                if (juridicalperson !== ""){
                    data["juridicalperson"] = juridicalperson
                }
                var resident = $("#resident").val();
                if (resident !== ""){
                    data["resident"] = resident
                }
                var maintenancemanager = $("#maintenancemanager").val();
                if (maintenancemanager !== ""){
                    data["maintenancemanager"] = maintenancemanager
                }
                var maintenancemanagerphone = $("#maintenancemanagerphone").val();
                if (maintenancemanagerphone !== ""){
                    data["maintenancemanagerphone"] = maintenancemanagerphone
                }
                var firstcontact = $("#firstcontact").val();
                if (firstcontact !== ""){
                    data["firstcontact"] = firstcontact
                }
                var firstcontactphone = $("#firstcontactphone").val();
                if (firstcontactphone !== ""){
                    data["firstcontactphone"] = firstcontactphone
                }
                var secondcontact = $("#secondcontact").val();
                if (secondcontact !== ""){
                    data["secondcontact"] = secondcontact
                }
                var secondcontactphone = $("#secondcontactphone").val();
                if (secondcontactphone !== ""){
                    data["secondcontactphone"] = secondcontactphone
                }
            $.messager.confirm('提示信息','是否维保单位单位信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:manage_maintenanceunit_add_url,
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
                                        msg:"维保单位添加成功"
                                    })
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"维保单位添加失败"
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
            var companyname = $("#edit_companyname").val()
            if (companyname !== ""){
                data["companyname"] = companyname
            }
            var companyaddress = $("#edit_companyaddress").val();
            if (companyaddress !== ""){
                data["companyaddress"] = companyaddress
            }
            var maintenanceunitaddress = $("#edit_maintenanceunitaddress").val();
            if (maintenanceunitaddress !== ""){
                data["maintenanceunitaddress"] = maintenanceunitaddress
            }
            var licensenumber = $("#edit_licensenumber").val()
            if (licensenumber !== ""){
                data["licensenumber"] = licensenumber
            }
            var qualificertificatenumber = $("#edit_qualificertificatenumber").val()
            if (qualificertificatenumber !== ""){
                data["qualificertificatenumber"] = qualificertificatenumber
            }
            var companyphone = $("#edit_companyphone").val()
            if (companyphone !== ""){
                data["companyphone"] = companyphone
            }
            var juridicalperson = $("#edit_juridicalperson").val();
            if (juridicalperson !== ""){
                data["juridicalperson"] = juridicalperson
            }
            var resident = $("#resident").val();
            if (resident !== ""){
                data["resident"] = resident
            }
            var maintenancemanager = $("#edit_maintenancemanager").val();
            if (maintenancemanager !== ""){
                data["maintenancemanager"] = maintenancemanager
            }
            var maintenancemanagerphone = $("#edit_maintenancemanagerphone").val();
            if (maintenancemanagerphone !== ""){
                data["maintenancemanagerphone"] = maintenancemanagerphone
            }
            var firstcontact = $("#edit_firstcontact").val();
            if (firstcontact !== ""){
                data["firstcontact"] = firstcontact
            }
            var firstcontactphone = $("#edit_firstcontactphone").val();
            if (firstcontactphone !== ""){
                data["firstcontactphone"] = firstcontactphone
            }
            var secondcontact = $("#edit_secondcontact").val();
            if (secondcontact !== ""){
                data["secondcontact"] = secondcontact
            }
            var secondcontactphone = $("#edit_secondcontactphone").val();
            if (secondcontactphone !== ""){
                data["secondcontactphone"] = secondcontactphone
            }
            $.messager.confirm('提示信息','是否更新维保单位信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:manage_maintenanceunit_update_url,
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
                                    msg:"维保单位更新成功"
                                })
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"维保单位更新失败"
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
                                              url:manage_maintenanceunit_del_url,
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
                                                                      msg:num+'座维保单位被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"维保单位删除失败"
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
                                        url:manage_maintenanceunit_del_url,
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
                                                                msg:"维保单位删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"维保单位删除失败"
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
        url:manage_maintenanceunit_gets_url,
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
            field:'qualificertificatenumber',
            title:'资质编码',
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
            field:'companyphone',
            title:'公司电话',
            width:50,
            align:'center'
        },
        {
            field:'maintenanceunitaddress',
            title:'维保点地址',
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
        title:"新增维保单位",
        width:500,
        height:800,
        closed: true,
        modal:true,
        shadow:true
})
// 弹出框加载
$("#editBox").dialog({
    title:"编辑维保单位",
    width:500,
    height:800,
    closed: true,
    modal:true,
    shadow:true
})
