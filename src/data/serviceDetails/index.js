// src/data/serviceDetails/index.js
import engineeringServices from "./engineering-services";
import procurementMaterialManagement from "./procurement-material-management";
import constructionInstallation from "./construction-installation";
import commissioningStartUp from "./commissioning-startup";
import chemicalProcessOperationalSolutions from "./chemical-process-operational-solutions";
import mechanicalMaintenanceSolutions from "./mechanical-maintenance-solutions";
import equipmentPartsSupplies from "./equipment-parts-supplies";
import projectManagementConsultancy from "./project-management-consultancy";
import environmentalSafetySolutions from "./environmental-safety-solutions";
import heatExchangerDesignFabrication from "./heat-exchanger-design-fabrication";
import pipingServices from "./piping-services";
import turbineMaintenance from "./turbine-maintenance";
import chemicalCleaning from "./chemical-cleaning";

const serviceDetails = {
  "engineering-services": engineeringServices,
  "procurement-material-management": procurementMaterialManagement,
  "construction-installation": constructionInstallation,
  "commissioning-startup-support": commissioningStartUp,
  "chemical-process-operational-solutions": chemicalProcessOperationalSolutions,
  "mechanical-maintenance-solutions": mechanicalMaintenanceSolutions,
  "equipment-parts-supplies": equipmentPartsSupplies,
  "project-management-consultancy": projectManagementConsultancy,
  "environmental-safety-solutions": environmentalSafetySolutions,
  "heat-exchanger-design-fabrication": heatExchangerDesignFabrication,
  "piping-services": pipingServices,
  "turbine-maintenance": turbineMaintenance,
  "chemical-cleaning": chemicalCleaning,
};

export default serviceDetails;
