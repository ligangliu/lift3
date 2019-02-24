$("#mainBox").layout({
        fit:true,
        border:false
})
$("#mean").menu('show',{
        left: 200,
        top: 100
})
$("#left01").accordion({
        border:false

})
$("#con").tabs({
        fit:true,
        border:false
})
$("#myMes").dialog({
        title:"个人信息详情",
        width:400,
        height:320,
        modal:true,
        iconCls:'icon-mes',
        maximizable:true,
        closed: true

})
function openMes() {
       $("#myMes").dialog({
                closed: false
        });
        var id = $("#mb2").attr("value")
        $.ajax({
                type:'post',
                url:sso_user_get_url,
                dataType:'json',
                data:{id:id},
                success:function (data) {
                        if(data.status === 1000){
                                $("#username").val(data.data.username)
                                // $("#password").val(data.data.password)
                                $("#rolename").val(data.data.rolename)
                                $("#phone").val(data.data.phone)
                                $("#email").val(data.data.email)
                        }
                        else{
                                $.messager.show({
                                        title:'警示信息',
                                        msg:data.msg
                                })
                        }
                }
        })
}

/**
 *
 * 此处修改
 * 用户更新信息
 *
 *
 */
function update() {
        var data = {}
        var id = $("#id").attr("value")
        data["id"] = id
        /**
         * 密码先设置为不可修改
         */
        /*var password = $("#password").val();
        if (password !== ""){
                data["password"] = password
        }*/
        var phone = $("#phone").val();
        if (phone !== ""){
                data["phone"] = phone
        }
        var email = $("#email").val()
        if (email !== ""){
                data["email"] = email
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
                                                $("#myMes").dialog({
                                                        closed: true
                                                })
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
}

function saveExit() {
        $.messager.confirm('退出确认','你是否退出系统？',function (flg) {
                if(flg){
                        $.ajax({
                                type:'post',
                                contentType:'application/json;charset=UTF-8',
                                url:sso_user_logout_url,
                                data:{"token":localStorage.getItem("token")},
                                success:function (data) {
                                        if(data.status === 1000){
                                               //将token清除
                                               localStorage.removeItem("token")
                                               window.location.href = "/lift/login.html"
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

}
function saveCanle() {
        $.messager.confirm('注销确认','你是否注销用户？',function () {

        })

}
$(".topText a").click(function () {
        $(this).addClass('textActive').siblings().removeClass('textActive');

})
$("#left01  a").click(function () {
        var testVal=$(this).text();
        var thisUrl=$(this).attr('href');
        var con = '<iframe scrolling="no" frameborder="0"  src="'+thisUrl+'" style="width:100%;height:100%;">';
        $('#con').tabs('add',{
                title: testVal,
                selected: true,
                closable:true,
               content:con
        });

})
$("#con").tabs({
        onSelect:function (tit,ind) {
                if(ind==0){
                        $("#ifDiv").attr('src',"home.html");
                }
        }
})
