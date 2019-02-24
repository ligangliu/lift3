/**
 * Created by Administrator on 2017/11/8.
 */
$("#user").validatebox({
        required:true,
        missingMessage:"请输入用户名",
        invalidMessage:"用户名不能为空"
})
$("#pass").validatebox({
        required:true,
        missingMessage:"请输入密码",
        invalidMessage:"密码不能为空"
})
//加载时验证
if(!$("#user").validatebox('isValid')){
        $("#user").focus();

}
else if(!$("#pass").validatebox('isValid')){
        $("#pass").focus();
}
//点击提交
$("#btn").click(function () {
        if(!$("#user").validatebox('isValid')){
                $("#user").focus();

        }
        else if(!$("#pass").validatebox('isValid')){
                $("#pass").focus();
        }
        else{
                var username = $("#user").val();
                var password = $("#pass").val();
                console.log(username);
                console.log(password);
                var data = {
                        username:username,
                        password:password
                }
                $.ajax({
                        type:'post',
                        contentType:'application/json;charset=UTF-8',
                        url:sso_user_login_url,
                        data:JSON.stringify(data),
                        success:function (data) {
                                if(data.status === 1000){
                                        localStorage.setItem("token",data.data.token);
                                        window.location.href = "main.html";
                                }
                                else{
                                        alert(data.msg)
                                        return;
                                }
                        }
                })
        }


})
