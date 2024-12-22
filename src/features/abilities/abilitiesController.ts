import { Request, Response } from "express";
import z from "zod";
import AbilitiesService from "./abilitiesService";

const rootSchema = z.object({
  name: z.string().min(1),
  active: z.boolean().optional(),
});

export default class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService) {}

  async create(request: Request, response: Response) {
    const body = rootSchema.parse(request.body);

    const ability = await this.abilitiesService.create(body);

    return response.status(201).send({ ...ability });
  }

  async update(request: Request, response: Response) {
    const { resourceId } = z
      .object({ resourceId: z.string().min(1) })
      .parse(request.params);

    const body = rootSchema.partial().parse(request.body);

    const ability = await this.abilitiesService.update({
      id: resourceId,
      data: body,
    });

    return response.status(200).send({ ...ability });
  }
}
