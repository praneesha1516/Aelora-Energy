import express from "express";
import { 
    getAllSolarUnits,
    createSolarUnit,
    getSolarUnitById,
    getSolarUnitForUser, 
    updateSolarUnit,
    deleteSolarUnit, 
    createSolarUnitValidator} from "../application/solar-unit";
import { authenticationMiddleware } from "./middlewares/authentication-middleware";

const solarUnitRouter = express.Router();

// Define routes for solar units

solarUnitRouter.route("/").get(getAllSolarUnits).post(createSolarUnitValidator,createSolarUnit);
solarUnitRouter.route("/me").get(authenticationMiddleware,getSolarUnitForUser);

solarUnitRouter.route("/:id").get(getSolarUnitById).put(updateSolarUnit).delete(deleteSolarUnit);

                                                                                                                                                                                                                                                                                                                                                                                                                                             


export default solarUnitRouter;
