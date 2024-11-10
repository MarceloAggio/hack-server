import express from "express";
import cors from "cors";
import { corsConfig } from "./config/cors";

import UserController from "./controllers/user-controller";
import ScoreController from "./controllers/score-controller"
import FinancialRegistrationController from "./controllers/financial-registration-controller"
import PendencyController from "./controllers/pendency-controller"
import ActionPlan from "./controllers/action-plan-controller"

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/v1", UserController);
app.use("/v1" , ScoreController);
app.use("/v1" , FinancialRegistrationController);
app.use("/v1" , PendencyController);
app.use("/v1" , ActionPlan)