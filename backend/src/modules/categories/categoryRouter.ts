import { masterbox } from "@prisma/client";
import { ServiceResponse } from "./../../common/models/serviceResponse";
import express, { Request, Response } from "express";
import {handleServiceResponse,validateRequest,} from "@common/utils/httpHandlers";
import { categoryService } from "@modules/categories/categoryService";
import {CreateCategorySchema,daleteprojetSchema,} from "@modules/categories/categoryModel";

export const categoryRouter = (() => {
  const router = express.Router();
  router.get("/get", async (req: Request, res: Response) => {
    const ServiceResponse = await categoryService.findAll();
    handleServiceResponse(ServiceResponse, res);
  });

  router.post("/create",validateRequest(CreateCategorySchema),
    async (req: Request, res: Response) => {
      const payload = req.body;
      const ServiceResponse = await categoryService.create(payload);
      handleServiceResponse(ServiceResponse, res);
      console.log(payload);
    }
  );

  router.put("/update",validateRequest(CreateCategorySchema),
    async (req: Request, res: Response) => {
      const { master_box_id } = req.body;
      const payload = req.body;
      const ServiceResponse = await categoryService.update(master_box_id,payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.delete("/delete/:master_box_id",validateRequest(daleteprojetSchema),
    async (req: Request, res: Response) => {
      const master_box_id = req.params.master_box_id;
      const payload = req.body
      const ServiceResponse = await categoryService.delete(master_box_id,payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  return router;
})();
