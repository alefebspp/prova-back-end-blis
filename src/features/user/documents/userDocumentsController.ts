import { Request, Response } from "express";
import z from "zod";

import UserDocumentsService from "./userDocumentsService";

export default class UserDocumentsController {
  constructor(private readonly userDocumentsService: UserDocumentsService) {}

  async create(request: Request, response: Response) {
    const body = z
      .object({ name: z.string().min(1), user_id: z.string().min(1) })
      .parse(request.body);

    const { document } = await this.userDocumentsService.create({
      ...body,
      file: request.file,
    });

    return response.status(201).send({ url: document.url });
  }
}
