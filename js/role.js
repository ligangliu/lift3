/**
 * Created by Administrator on 2017/11/8.
 */
// 加载树
/*$("#tree").tree({
        url:'json/userTree.json',
        checkbox:true,
        lines:true
})*/

obj={
        // 添加
        addBox:function () {
                $("#roleForm").form('clear');
        },
        add:function () {
                var url = sso_role_add_url
                var data = {}
                var id = $("#id").val()
                if (id !== ""){
                        /**
                         *  如果id不为空说明其是更新操作，需要提交更新的url
                         */
                        url = sso_role_update_url;
                        data["id"] = id;
                }
                var rolename = $("#rolename").val();
                if (rolename !== ""){
                        data["rolename"] = rolename
                }
                var flag = $('#flag').combobox('getValue');
                if (flag !== "" && (flag === "1" || flag === "0")  ){
                        data["flag"] = flag
                }else {
                        data["flag"] = 1
                }
                var description = $("#description").val();
                if (description !== ""){
                        data["description"] = description
                }
                $.messager.confirm('提示信息','是否添加/更新角色信息',function (flg) {
                        if(flg){
                                $.ajax({
                                        type:'post',
                                        contentType:'application/json;charset=UTF-8',
                                        url:url,
                                        data:JSON.stringify(data),
                                        success:function (data) {
                                                if(data.status === 1000){
                                                        $("#roleForm").form('clear');
                                                        $("#table").datagrid('loaded');
                                                        $("#table").datagrid('load');
                                                        $("#table").datagrid('unselectAll');
                                                        $.messager.show({
                                                                title:'提示信息',
                                                                msg:"添加/更新角色成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"添加/更新角色失败"
                                                        })
                                                }
                                        }
                                })
                        }
                })
        },
        // 编辑
        edit:function (id) {
                $.ajax({
                        url: sso_role_get_url,
                        type: 'post',
                        dataType: 'json',
                        data: {id: id},
                        success: function (data) {
                                if (data.status === 1000) {
                                        $("#id").val(id);
                                        $("#rolename").val(data.data.rolename)
                                        $('#flag').combobox('setValue', data.data.flag);
                                        $("#description").val(data.data.description)
                                } else {
                                }
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
                                              url:sso_role_del_url,
                                              data:{
                                                      ids:ids.join(',')
                                              },
                                              beforesend:function () {
                                                      $("#table").datagrid('loading');
                                                      
                                              },
                                              success:function (data) {
                                                      if(data){
                                                              $("#table").datagrid('loaded');
                                                              $("#table").datagrid('load');
                                                              $("#table").datagrid('unselectAll');
                                                              $.messager.show({
                                                                      title:'提示',
                                                                      msg:num+'个角色被删除'
                                                              })
                                                      }
                                                      else{
                                                              $.messager.show({
                                                                      title:'警示信息',
                                                                      msg:"角色信息删除失败"
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
                // id=$("#table").datagrid('getSelected').id;
                $.messager.confirm('提示信息','是否删除所选择记录',function (flg) {
                        if(flg){
                                $.ajax({
                                        type:'post',
                                        url:sso_role_del_url,
                                        data:{
                                                ids:id
                                        },
                                        beforesend:function () {
                                                $("#table").datagrid('loading');

                                        },
                                        success:function (data) {
                                                if(data){
                                                        $("#table").datagrid("loaded");
                                                        $("#table").datagrid("load");
                                                        $("#table").datagrid("unselectRow");
                                                        $.messager.show({
                                                                title:'提示信息',
                                                                msg:"角色信息删除成功"
                                                        })
                                                }
                                                else{
                                                        $.messager.show({
                                                                title:'警示信息',
                                                                msg:"角色信息删除失败"
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
        url:sso_role_gets_url,
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
                        field:'rolename',
                        title:'角色名称',
                        width:100,
                        align:'center'
                },
                {
                        field:'description',
                        title:'角色描述',
                        width:100,
                        align:'center'
                },
                {
                        field:'flag',
                        title:'启用状态',
                        width:100,
                        align:'center',
                        formatter:function (val,row) {
                                if(val === 1){
                                        return '<div style="color: #00aa00">'+'启用'+'</div>';
                                }
                                else{
                                        return '<div style="color: red">'+'禁用'+'</div>';
                                }

                        }
                },
                {
                        field:"opr",
                        title:'操作',
                        width:100,
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
        title:"信息内容",
        width:500,
        height:100,
        closed: true,
        modal:true,
        shadow:true
})