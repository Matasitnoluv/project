import { masterbox } from "@prisma/client";
import { ServiceResponse } from "./../../common/models/serviceResponse";
import express, { Request, Response } from "express";
import {handleServiceResponse,validateRequest,} from "@common/utils/httpHandlers";
import { msboxService } from "@modules/msbox/msboxServices";
import {CreateMsboxSchema,deleteMsboxSchema, updateMsboxSchema,} from "@modules/msbox/msboxModel";

export const msboxRouter = (() => {
  const router = express.Router();
  router.get("/get", async (req: Request, res: Response) => {
    const ServiceResponse = await msboxService.findAll();
    handleServiceResponse(ServiceResponse, res);
  });

  router.post("/create",validateRequest(CreateMsboxSchema),
    async (req: Request, res: Response) => {
      const payload = req.body;
      const ServiceResponse = await msboxService.create(payload);
      handleServiceResponse(ServiceResponse, res);
    //   console.log(payload);
    }
  );

  router.put("/update",validateRequest(updateMsboxSchema),
    async (req: Request, res: Response) => {
      const { master_box_id } = req.body;
      const payload = req.body;
      const ServiceResponse = await msboxService.update(master_box_id,payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.delete("/delete",validateRequest(deleteMsboxSchema),
    async (req: Request, res: Response) => {
      const {master_box_id} = req.body;
      const ServiceResponse = await msboxService.delete(master_box_id);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  

  return router;
})();
