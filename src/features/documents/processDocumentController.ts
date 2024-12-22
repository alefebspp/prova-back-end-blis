import { Request, Response } from "express";
import { z } from "zod";

import ProcessDocumentService from "./processDocumentService";

export default class ProcessDocumentController {
  constructor(
    private readonly processDocumentService: ProcessDocumentService
  ) {}

  async convertPdfToText(request: Request, response: Response) {
    const queries = z
      .object({ user_id: z.string().min(1), document_id: z.string().min(1) })
      .parse(request.query);

    const { url } = await this.processDocumentService.convertPdfToText(queries);

    return response.status(200).send({ url });
  }
}
