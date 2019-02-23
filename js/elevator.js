
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
$("#manufacturercompany01").combotree({
        url:manage_productionunit_getName_url,
        height:26,
        width:'250px',
        onSelect:function () {
                var t=$("#manufacturercompany01").combotree('tree');
                var n=t.tree('getSelected');
                var text=n.text;
                $("#manufacturercompany01").combotree('setValue',text);
        }
})
$("#manufacturercompany02").combotree({
    url:manage_productionunit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#manufacturercompany02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#manufacturercompany02").combotree('setValue',text);
    }
})
$("#edit_manufacturercompany02").combotree({
    url:manage_productionunit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_manufacturercompany02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#edit_manufacturercompany02").combotree('setValue',text);
    }
})

$("#propertycompany01").combotree({
    url:manage_propertyUnit_getName_url,
    height:26,
    width:'250px',
    onSelect:function () {
        var t=$("#propertycompany01").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#propertycompany01").combotree('setValue',text);
    }
})
$("#propertycompany02").combotree({
    url:manage_propertyUnit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#propertycompany02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#propertycompany02").combotree('setValue',text);
    }
})
$("#edit_propertycompany02").combotree({
    url:manage_propertyUnit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_propertycompany02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#edit_propertycompany02").combotree('setValue',text);
    }
})

$("#maintenanceunit01").combotree({
    url:manage_maintenanceunit_getName_url,
    height:26,
    width:'250px',
    onSelect:function () {
        var t=$("#maintenanceunit01").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#maintenanceunit01").combotree('setValue',text);
    }
})
$("#maintenanceunit02").combotree({
    url:manage_maintenanceunit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#maintenanceunit02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#maintenanceunit02").combotree('setValue',text);
    }
})
$("#edit_maintenanceunit02").combotree({
    url:manage_maintenanceunit_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_maintenanceunit02").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#edit_maintenanceunit02").combotree('setValue',text);
    }
})

$("#budding01").combotree({
    url:manage_budding_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#budding01").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#budding01").combotree('setValue',text);
    }
})
$("#edit_budding01").combotree({
    url:manage_budding_getName_url,
    height:26,
    width:'70%',
    onSelect:function () {
        var t=$("#edit_budding01").combotree('tree');
        var n=t.tree('getSelected');
        var text=n.text;
        $("#edit_budding01").combotree('setValue',text);
    }
})
obj={
        // 查询
        find:function () {
            var data = {}
            var devid = $("#find_devid").val();
            if (devid !== "") {
                data["devid"] = devid
            }
            var manufacturercompany = $("#manufacturercompany01").combotree('getValue');
            if (manufacturercompany !== ""){
                data["manufacturercompany"] = manufacturercompany
            }
            var propertycompany = $("#propertycompany01").combotree('getValue');
            if (propertycompany !== ""){
                data["propertycompany"] = propertycompany
            }
            var maintenanceunit = $("#maintenanceunit01").combotree('getValue');
            if (maintenanceunit !== ""){
                data["maintenanceunit"] = maintenanceunit
            }
            // 加载表格
            $("#table").datagrid({
                title:"数据列表",
                iconCls:"icon-left02",
                url:manage_elevator_gets_url,
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
                        field:'devid',
                        title:'电梯编码',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'brand',
                        title:'电梯品牌',
                        width:50,
                        align:'center'
                    },
                    {
                        field:'propertycompany',
                        title:'产权单位',
                        width:100,
                        align:'center'
                    }, {
                        field:'maintenanceunit',
                        title:'维保单位',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'manufacturercompany',
                        title:'生产厂家',
                        width:100,
                        align:'center'
                    },
                    {
                        field:'budding',
                        title:'楼宇信息',
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
                            c = '<a  id="look"  href="#">监控</a> ';
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
           $("#devid").val("")
           $("#address").val("");
           $("#brand").val("")
           $("#model").val("")
           $("#propertycompany02").combotree('setValue','');
           $("#maintenanceunit02").combotree('setValue','');
           $("#manufacturercompany02").combotree('setValue','');
           $("#budding01").combotree('setValue','');
           $("#devmac").val("");
           $("#controllersystem").val("");
           $("#carryingcapacity").val("");
           $("#installdate").datebox('setValue','');
           $("#unittype").val("");
           $("#topspeed").val("");
           $("#size").val("");
           $('#controllermode').combobox('setText','');
           $('#openway').combobox('setText','');
           $("#productionnumber").val("");
           $("#safenumber").val("");
           $("#manufacturingdate").datebox('setValue','');
           $("#installcompany").val("");
        },
        // 编辑,需要先根据id查询
        edit:function (id) {
            $("#editBox").dialog({
                closed: false
            });
            $.ajax({
                url:manage_elevator_get_url,
                type:'post',
                dataType:'json',
                data:{id:id},
                success:function (data) {
                    if (data.status === 1000) {
                        //根据id查询的信息填充至编辑页面
                        $("#edit_id").val(id);
                        $("#edit_devid").val(data.data.devid)
                        $("#edit_address").val(data.data.address);
                        $("#edit_brand").val(data.data.brand)
                        $("#edit_model").val(data.data.model)
                        $("#edit_propertycompany02").combotree('setValue',data.data.propertycompany);
                        $("#edit_maintenanceunit02").combotree('setValue',data.data.maintenanceunit);
                        $("#edit_manufacturercompany02").combotree('setValue',data.data.manufacturercompany);
                        $("#edit_budding01").combotree('setValue',data.data.budding);
                        $("#edit_devmac").val(data.data.devmac);
                        $("#edit_controllersystem").val(data.data.controllersystem);
                        $("#edit_carryingcapacity").val(data.data.carryingcapacity);
                        // $("#installdate").datebox('setValue','');
                        $("#edit_unittype").val(data.data.unittype);
                        $("#edit_topspeed").val(data.data.topspeed);
                        $("#edit_size").val(data.data.size);
                        $('#edit_controllermode').combobox('setText',data.data.controllermode);
                        $('#edit_openway').combobox('setText',data.data.openway);
                        $("#edit_productionnumber").val(data.data.productionnumber);
                        $("#edit_safenumber").val(data.data.safenumber);
                        $("#edit_installcompany").val(data.data.installcompany);
                    }
                    else{
                        }
                }
            })
        },
        add:function () {
                var data = {}
                var devid = $("#devid").val()
                if (devid !== ""){
                    data["devid"] = devid
                }
                var address = $("#address").val();
                if (address !== ""){
                    data["address"] = address
                }
                var brand = $("#brand").val()
                if (brand !== ""){
                    data["brand"] = brand
                }
                var model = $("#model").val()
                if (model !== ""){
                    data["model"] = model
                }
                var propertycompany = $("#propertycompany02").combotree('getValue');
                if (propertycompany !== ""){
                    data["propertycompany"] = propertycompany
                }
                var maintenanceunit = $("#maintenanceunit02").combotree('getValue');
                if (maintenanceunit !== ""){
                    data["maintenanceunit"] = maintenanceunit
                }
                var manufacturercompany = $("#manufacturercompany02").combotree('getValue');
                if (manufacturercompany !== ""){
                    data["manufacturercompany"] = manufacturercompany
                }
                var budding = $("#budding01").combotree('getValue');
                if (budding !== ""){
                    data["budding"] = budding
                }
                var devmac = $("#devmac").val();
                if (devmac !== ""){
                    data["devmac"] = devmac
                }
                var controllersystem = $("#controllersystem").val();
                if (controllersystem !== ""){
                    data["controllersystem"] = controllersystem
                }
                var carryingcapacity = $("#carryingcapacity").val();
                if (carryingcapacity !== ""){
                    data["carryingcapacity"] = carryingcapacity
                }
                var installdate = $("#installdate").datebox('getValue');
                if (installdate !== ""){
                    data["installdate"] = installdate
                }
                var unittype = $("#unittype").val();
                if (unittype !== ""){
                    data["unittype"] = unittype
                }
                var topspeed = $("#topspeed").val();
                if (topspeed !== ""){
                    data["topspeed"] = topspeed
                }
                var size = $("#size").val();
                if (size !== ""){
                    data["size"] = size
                }
                var controllermode = $('#controllermode').combobox('getText');
                if (controllermode !== ""){
                    data["controllermode"] = controllermode
                }
                var openway = $('#openway').combobox('getText');
                if (openway !== ""){
                    data["openway"] = openway
                }
                var safenumber = $("#safenumber").val();
                if (safenumber !== ""){
                    data["safenumber"] = safenumber
                }
                var manufacturingdate = $("#manufacturingdate").datebox('getValue');
                if (manufacturingdate !== ""){
                    data["manufacturingdate"] = manufacturingdate
                }
                var installcompany = $("#installcompany").val();
                if (installcompany !== ""){
                    data["installcompany"] = installcompany
                }
            $.messager.confirm('提示信息','是否添加电梯信息',function (flg) {
                    if(flg){
                        $.ajax({
                            type:'post',
                            contentType:'application/json;charset=UTF-8',
                            url:manage_elevator_add_url,
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
                                        msg:"电梯信息添加成功"
                                    })
                                }
                                else{
                                    $.messager.show({
                                        title:'警示信息',
                                        msg:"电梯信息添加失败"
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
            var devid = $("#edit_devid").val()
            if (devid !== ""){
                data["devid"] = devid
            }
            var address = $("#edit_address").val();
            if (address !== ""){
                data["address"] = address
            }
            var brand = $("#edit_brand").val()
            if (brand !== ""){
                data["brand"] = brand
            }
            var model = $("#edit_model").val()
            if (model !== ""){
                data["model"] = model
            }
            var propertycompany = $("#edit_propertycompany02").combotree('getValue');
            if (propertycompany !== ""){
                data["propertycompany"] = propertycompany
            }
            var maintenanceunit = $("#edit_maintenanceunit02").combotree('getValue');
            if (maintenanceunit !== ""){
                data["maintenanceunit"] = maintenanceunit
            }
            var manufacturercompany = $("#edit_manufacturercompany02").combotree('getValue');
            if (manufacturercompany !== ""){
                data["manufacturercompany"] = manufacturercompany
            }
            var budding = $("#edit_budding01").combotree('getValue');
            if (budding !== ""){
                data["budding"] = budding
            }
            var devmac = $("#edit_devmac").val();
            if (devmac !== ""){
                data["devmac"] = devmac
            }
            var controllersystem = $("#edit_controllersystem").val();
            if (controllersystem !== ""){
                data["controllersystem"] = controllersystem
            }
            var carryingcapacity = $("#edit_carryingcapacity").val();
            if (carryingcapacity !== ""){
                data["carryingcapacity"] = carryingcapacity
            }
            var installdate = $("#edit_installdate").datebox('getValue');
            if (installdate !== ""){
                data["installdate"] = installdate
            }
            var unittype = $("#edit_unittype").val();
            if (unittype !== ""){
                data["unittype"] = unittype
            }
            var topspeed = $("#edit_topspeed").val();
            if (topspeed !== ""){
                data["topspeed"] = topspeed
            }
            var size = $("#edit_size").val();
            if (size !== ""){
                data["size"] = size
            }
            var controllermode = $('#edit_controllermode').combobox('getText');
            if (controllermode !== ""){
                data["controllermode"] = controllermode
            }
            var openway = $('#edit_openway').combobox('getText');
            if (openway !== ""){
                data["openway"] = openway
            }
            var safenumber = $("#edit_safenumber").val();
            if (safenumber !== ""){
                data["safenumber"] = safenumber
            }
            var manufacturingdate = $("#edit_manufacturingdate").datebox('getValue');
            if (manufacturingdate !== ""){
                data["manufacturingdate"] = manufacturingdate
            }
            var installcompany = $("#edit_installcompany").val();
            if (installcompany !== ""){
                data["installcompany"] = installcompany
            }
            $.messager.confirm('提示信息','是否更新电梯信息',function (flg) {
                if(flg){
                    $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:manage_elevator_update_url,
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
                                    msg:"电梯信息更新成功"
                                })
                            }
                            else{
                                $.messager.show({
                                    title:'警示信息',
                                    msg:"电梯信息更新失败"
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
                                              url:manage_elevator_del_url,
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
                                                                      msg:num+'座电梯信息被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"电梯信息删除失败"
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
                                        url:manage_elevator_del_url,
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
                                                                msg:"电梯信息删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"电梯信息删除失败"
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
        url:manage_elevator_gets_url,
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
            field:'devid',
            title:'电梯编码',
            width:50,
            align:'center'
        },
        {
            field:'brand',
            title:'电梯品牌',
            width:50,
            align:'center'
        },
        {
            field:'propertycompany',
            title:'产权单位',
            width:100,
            align:'center'
        }, {
            field:'maintenanceunit',
            title:'维保单位',
            width:100,
            align:'center'
        },
        {
            field:'manufacturercompany',
            title:'生产厂家',
            width:100,
            align:'center'
        },
        {
            field:'budding',
            title:'楼宇信息',
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
                c = '<a  id="look"  href="#">监控</a> ';
                return e+d+c;
            }
        }
    ]]
})
// 弹出框加载
$("#addBox").dialog({
        title:"新增电梯信息",
        width:500,
        height:800,
        closed: true,
        modal:true,
        shadow:true
})
// 弹出框加载
$("#editBox").dialog({
    title:"编辑电梯信息",
    width:500,
    height:800,
    closed: true,
    modal:true,
    shadow:true
})
