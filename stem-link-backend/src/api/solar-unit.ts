import express from "express";
import { 
    getAllSolarUnits,
    createSolarUnit,
    getSolarUnitById, 
    updateSolarUnit,
    deleteSolarUnit, 
    createSolarUnitValidator} from "../application/solar-unit";

const solarUnitRouter = express.Router();

// Define routes for solar units

solarUnitRouter.route("/").get(getAllSolarUnits).post(createSolarUnitValidator,createSolarUnit);
solarUnitRouter.route("/:id").get(getSolarUnitById).put(updateSolarUnit).delete(deleteSolarUnit);
                                                                                                                                                                                                                                                                                                                                                                                                                                             


export default solarUnitRouter;
