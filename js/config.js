var manage_host = "http://127.0.0.1";
var manage_port = "8082";

/*** 楼宇调用url ***/
//查询楼宇url
var manage_budding_gets_url = manage_host + ":" + manage_port + "/api/v1/budding/getBuddings";
//删除楼宇url
var manage_budding_del_url = manage_host + ":" + manage_port + "/api/v1/budding/deleteBudding";
//添加楼宇url
var manage_budding_add_url = manage_host + ":" + manage_port + "/api/v1/budding/insertBudding"
//根据id查询楼宇详细信息
var manage_budding_get_url = manage_host + ":" + manage_port + "/api/v1/budding/getBudding"
//更新楼宇信息
var manage_budding_update_url = manage_host + ":" + manage_port + "/api/v1/budding/updateBudding"

/*** 产权单位调用url ***/
//查询所有的产权单位
var manage_propertyunit_gets_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/getPropertyUnits"
//删除楼宇url
var manage_propertyunit_del_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/deletePropertyUnit";
//添加产权单位的url
var manage_propertyunit_add_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/insertPropertyUnit"
//根据id查询楼宇信息
var manage_propertyunit_get_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/getPropertyUnit"
//更新楼宇信息
var manage_propertyunit_update_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/updatePropertyUnit"
//获取所有的产权单位名称信息
var manage_propertyUnit_getName_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/getPropertyUnitNames"


