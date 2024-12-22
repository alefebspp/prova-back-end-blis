import { Request, Response } from "express";
import z from "zod";

import UserAbilityService from "./userAbilityService";

export default class UserAbilityController {
  constructor(private readonly userAbilityService: UserAbilityService) {}

  async create(request: Request, response: Response) {
    const body = z
      .object({
        user_id: z.string().min(1),
        ability_id: z.string().min(1),
        years_experience: z.number().min(0),
      })
      .parse(request.body);

    const userAbility = await this.userAbilityService.create(body);

    return response.status(201).send({ ...userAbility });
  }

  async delete(request: Request, response: Response) {
    const body = z.object({ ids: z.array(z.string()) }).parse(request.body);

    await this.userAbilityService.delete({ ids: body.ids });

    return response
      .status(200)
      .send({ message: "One or more resourcers were removed" });
  }

  async findMany(request: Request, response: Response) {
    const params = z
      .object({
        page: z.coerce.number().min(1).default(1),
        limit: z.coerce.number().default(10),
      })
      .parse(request.query);

    const data = await this.userAbilityService.findMany(params);

    return response.status(200).send({ ...data });
  }
}
