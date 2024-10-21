
import { masterbox } from "./../node_modules/.prisma/client/index.d";
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { pino } from "pino";
import { PrismaClient } from "@prisma/client";
import { env } from "@common/utils/envConfig";
import errorHandler from "@common/middleware/errorHandler";

import { categoryRouter } from "@modules/categories/categoryRouter";
import { msboxRouter } from "@modules/msbox/msboxRouter";
import { userRouter } from "@modules/user/userRouter";

const prisma = new PrismaClient();
const logger = pino({ name: "server start" });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());

// Routes
app.use("/v1/category", categoryRouter);
app.use("/v1/msbox", msboxRouter);
app.use("/v1/users", userRouter)


// Error handlers
app.use(errorHandler());

export { app, logger };
