var sso_host = "http://127.0.0.1";
var sso_port = "8081";
var token = localStorage.getItem("token")
/*** 用户调用url ***/
//查询所有用户
var sso_user_gets_url = sso_host + ":" + sso_port + "/api/v1/sso/user/getUsers";
//删除用户
var sso_user_del_url = sso_host + ":" + sso_port + "/api/v1/sso/user/delete";
//添加用户
var sso_user_add_url = sso_host + ":" + sso_port + "/api/v1/sso/user/create"
//根据id查询用户详细信息
var sso_user_get_url = sso_host + ":" + sso_port + "/api/v1/sso/user/getUser"
//更新用户信息
var sso_user_update_url = sso_host + ":" + sso_port + "/api/v1/sso/user/update"
//用户登陆url
var sso_user_login_url = sso_host + ":" + sso_port + "/api/v1/sso/user/login"
//根据token获取用户信息
var sso_user_token_url = sso_host + ":" + sso_port + "/api/v1/sso/user/token"
//用户退出
var sso_user_logout_url = sso_host + ":" + sso_port + "/api/v1/sso/user/logout"

/*** 角色调用url ***/
//查询所有角色
var sso_role_gets_url = sso_host + ":" + sso_port + "/api/v1/sso/role/getRoles";
//删除角色
var sso_role_del_url = sso_host + ":" + sso_port + "/api/v1/sso/role/delete";
//添加角色
var sso_role_add_url = sso_host + ":" + sso_port + "/api/v1/sso/role/create"
//根据id查询角色详细信息
var sso_role_get_url = sso_host + ":" + sso_port + "/api/v1/sso/role/getRole"
//更新角色信息
var sso_role_update_url = sso_host + ":" + sso_port + "/api/v1/sso/role/update"
//获取所有角色名称的信息
var sso_role_getName_url = sso_host + ":" + sso_port + "/api/v1/sso/role/getRoleNames"
