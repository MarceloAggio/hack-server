import express from "express";
import cors from "cors";
import { corsConfig } from "./config/cors";

// import TenantController from "./controllers/tenant-controller";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

// app.use("/v1/tenants", TenantController);