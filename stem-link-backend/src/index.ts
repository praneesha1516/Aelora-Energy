import "dotenv/config";
import { connectDB } from "./infrastructure/db";
import express from 'express';
import solarUnitRouter from './api/solar-unit';
import energyGenerationRecordRouter from './api/energy-generation-record'
import { loggerMiddleware } from "./api/middlewares/logger-middleware";
import { globalErrorHandler } from "./api/middlewares/global-error-handling-middleware";
import cors from "cors"

const server = express();
server.use(express.json()); // Middleware to parse JSON bodies - convert json to js object and store in
server.use(cors({origin:"http://localhost:5173"}));  // Enable CORS

server.use(loggerMiddleware);  // Middleware to log requests

server.use("/api/solar-units", solarUnitRouter);  // Routes for solar units - middleware
server.use("/api/energy-generation-records", energyGenerationRecordRouter);  // Routes for energy generation records - middleware

server.use(globalErrorHandler);  // no response generated from above router middlewares = Global error handling middleware

connectDB();  // Connect to the database

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});       


//identify the resources
/* 
Solar unit
energy generation record
user
house
*/


