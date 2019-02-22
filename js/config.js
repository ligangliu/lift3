var manage_host = "http://127.0.0.1";
var manage_port = "8082";

/*** 楼宇调用url ***/
//查询楼宇
var manage_budding_gets_url = manage_host + ":" + manage_port + "/api/v1/budding/getBuddings";
//删除楼宇
var manage_budding_del_url = manage_host + ":" + manage_port + "/api/v1/budding/deleteBudding";
//添加楼宇
var manage_budding_add_url = manage_host + ":" + manage_port + "/api/v1/budding/insertBudding"
//根据id查询楼宇详细信息
var manage_budding_get_url = manage_host + ":" + manage_port + "/api/v1/budding/getBudding"
//更新楼宇信息
var manage_budding_update_url = manage_host + ":" + manage_port + "/api/v1/budding/updateBudding"
//获取所有楼宇名称的信息
var manage_budding_getName_url = manage_host + ":" + manage_port + "/api/v1/budding/getBuddingNames"


/*** 产权单位调用url ***/
//查询所有的产权单位
var manage_propertyunit_gets_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/getPropertyUnits"
//删除产权单位
var manage_propertyunit_del_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/deletePropertyUnit";
//添加产权单位
var manage_propertyunit_add_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/insertPropertyUnit"
//根据id查询产权单位信息
var manage_propertyunit_get_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/getPropertyUnit"
//更新产权单位信息
var manage_propertyunit_update_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/updatePropertyUnit"
//获取所有的产权单位名称信息
var manage_propertyUnit_getName_url = manage_host + ":" + manage_port + "/api/v1/propertyUnit/getPropertyUnitNames"

/*** 生成厂家url ***/
//查询所有的生产厂家
var manage_productionunit_gets_url = manage_host + ":" + manage_port + "/api/v1/productionUnit/getProductionUnits"
//删除生产厂家
var manage_productionunit_del_url = manage_host + ":" + manage_port + "/api/v1/productionUnit/deleteProductionUnit";
//添加生产厂家
var manage_productionunit_add_url = manage_host + ":" + manage_port + "/api/v1/productionUnit/insertProductionUnit"
//根据id查询生产厂家信息
var manage_productionunit_get_url = manage_host + ":" + manage_port + "/api/v1/productionUnit/getProductionUnit"
//更新生产厂家信息
var manage_productionunit_update_url = manage_host + ":" + manage_port + "/api/v1/productionUnit/updateProductionUnit"
//获取所有的生产厂家名称信息
var manage_productionunit_getName_url = manage_host + ":" + manage_port + "/api/v1/productionUnit/getProductionUnitNames"

/*** 保险单位url ***/
//查询所有的保险单位
var manage_insuranceunit_gets_url = manage_host + ":" + manage_port + "/api/v1/insuranceUnit/getInsuranceUnits"
//删除保险单位
var manage_insuranceunit_del_url = manage_host + ":" + manage_port + "/api/v1/insuranceUnit/deleteInsuranceUnit";
//添加保险单位
var manage_insuranceunit_add_url = manage_host + ":" + manage_port + "/api/v1/insuranceUnit/insertInsuranceUnit"
//根据id查询保险单位信息
var manage_insuranceunit_get_url = manage_host + ":" + manage_port + "/api/v1/insuranceUnit/getInsuranceUnit"
//更新保险单位信息
var manage_insuranceunit_update_url = manage_host + ":" + manage_port + "/api/v1/insuranceUnit/updateInsuranceUnit"
//获取所有的保险单位名称信息
var manage_insuranceunit_getName_url = manage_host + ":" + manage_port + "/api/v1/insuranceUnit/getInsuranceUnitNames"

/*** 维保单位url ***/
//查询所有的维保单位
var manage_maintenanceunit_gets_url = manage_host + ":" + manage_port + "/api/v1/maintenanceUnit/getMaintenanceUnits"
//删除维保单位
var manage_maintenanceunit_del_url = manage_host + ":" + manage_port + "/api/v1/maintenanceUnit/deleteMaintenanceUnit";
//添加维保单位
var manage_maintenanceunit_add_url = manage_host + ":" + manage_port + "/api/v1/maintenanceUnit/insertMaintenanceUnit"
//根据id查询维保单位信息
var manage_maintenanceunit_get_url = manage_host + ":" + manage_port + "/api/v1/maintenanceUnit/getMaintenanceUnit"
//更新维保单位信息
var manage_maintenanceunit_update_url = manage_host + ":" + manage_port + "/api/v1/maintenanceUnit/updateMaintenanceUnit"
//获取所有的维保单位名称信息
var manage_maintenanceunit_getName_url = manage_host + ":" + manage_port + "/api/v1/maintenanceUnit/getMaintenanceUnitNames"

/*** 电梯信息url ***/
//查询所有的电梯信息
var manage_elevator_gets_url = manage_host + ":" + manage_port + "/api/v1/elevator/getElevators"
//删除电梯信息
var manage_elevator_del_url = manage_host + ":" + manage_port + "/api/v1/elevator/deleteElevator";
//添加电梯信息
var manage_elevator_add_url = manage_host + ":" + manage_port + "/api/v1/elevator/insertElevator"
//根据id查询电梯信息信息
var manage_elevator_get_url = manage_host + ":" + manage_port + "/api/v1/elevator/getElevator"
//更新电梯信息信息
var manage_elevator_update_url = manage_host + ":" + manage_port + "/api/v1/elevator/updateElevator"
//获取所有的电梯信息名称信息
var manage_elevator_getName_url = manage_host + ":" + manage_port + "/api/v1/elevator/getElevatorNames"

/*** 生产厂家下属品牌url ***/
//查询所有的电梯信息
var manage_manusubbra_gets_url = manage_host + ":" + manage_port + "/api/v1/manuSubBra/getManuSubBras"
//删除电梯信息
var manage_manusubbra_del_url = manage_host + ":" + manage_port + "/api/v1/manuSubBra/deleteManuSubBra";
//添加电梯信息
var manage_manusubbra_add_url = manage_host + ":" + manage_port + "/api/v1/manuSubBra/insertManuSubBra"
//根据id查询电梯信息信息
var manage_manusubbra_get_url = manage_host + ":" + manage_port + "/api/v1/manuSubBra/getManuSubBra"
//更新电梯信息信息
var manage_manusubbra_update_url = manage_host + ":" + manage_port + "/api/v1/manuSubBra/updateManuSubBra"


