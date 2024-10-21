import { user } from './../../../node_modules/.prisma/client/index.d';
import { StatusCodes } from "http-status-codes";
import {ResponseStatus,ServiceResponse} from "@common/models/serviceResponse";
import { userRepository } from "@modules/user/userRepository";
import { TypePayloaduser } from "@modules/user/userModel";
import { masterbox } from "@prisma/client";

export const userService = {
  findAll: async () => {
    const user = await userRepository.findAllAsync();
    return new ServiceResponse(
      ResponseStatus.Success,
      "Get All success",
      user,
      StatusCodes.OK
    );
  },
  create: async (payload: TypePayloaduser) => {
    try {
      const checkCategory = await userRepository.findByName(payload.fullname);
      if (checkCategory) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          "Category already taken",
          null,
          StatusCodes.BAD_REQUEST
        );
      }
      const users = await userRepository.create(payload);
      return new ServiceResponse<user>(
        ResponseStatus.Success,
        "Create category success",
        users,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error create category :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  update: async (users_id: string,payload: Partial<TypePayloaduser>) => {
    try {
      const users = await userRepository.update(users_id, payload);
      return new ServiceResponse<user>(
        ResponseStatus.Success,
        "Update category success",
        users,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error update category :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  delete: async (users_id: any) => {
    try {
      await userRepository.delete(users_id);
      return new ServiceResponse(
        ResponseStatus.Success,
        "Delete Box success",
        null,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error update category :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },
};
