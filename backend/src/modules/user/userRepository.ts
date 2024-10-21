import { masterbox, user } from "@prisma/client";
import prisma from "@src/db"; 
import { TypePayloadmasterbox } from "@modules/msbox/msboxModel";
import { TypePayloaduser } from "./userModel";

export const Keys = [

  "users_id" ,
  "fullname ",
  "age",
  "address" ,
  "username" ,
  "password" ,
  "status_role" ,
  "create_date ",
  "create_by" ,
  "update_by" ,
  "update_date" ,
];

export const userRepository = {
  findAllAsync: async () => {
    return prisma.user.findMany({
      select: {
        users_id: true,
        fullname: true,
        address: true,
        username: true,
        password: true,
        status_role: true,
        create_by: true,
        create_date: true,
        update_by: true,
        update_date: true,

        
      },
    });
  },

  findByName: async <Key extends keyof user>(
    fullname: string,
    keys = Keys as Key[]
  ): Promise<Pick<user, Key> | null> => {
    const selectedFields = keys.reduce(
      (obj, k) => ({ ...obj, [k]: true }),
      {} as Record<Key, true>
    );

    const result = await prisma.user.findFirst({
      where: { fullname: fullname },
      select: selectedFields,
    });

    return result as Pick<user, Key> | null;
  },

  create: async (payload: TypePayloaduser) => {
    const master_box_name = payload.fullname.trim();
    const setPayload: any = {
        fullname: payload.fullname,
        address: payload.address,
        username: payload.username,
        password: payload.password, 
    };

    return await prisma.user.create({
      data: setPayload,
    });
  },

  update: async (users_id: string,payload: Partial<TypePayloaduser>) => {
    const updatedPayload = {...payload,users_id: payload.users_id? String(payload.users_id): undefined,
    };

    return await prisma.user.update({
      where: { users_id: users_id },
      data: updatedPayload,
    });
  },

  delete: async (users_id: string) => {
    return await prisma.user.delete({
      where: { users_id: users_id },
    });
  },
};
