import ILovePDFApi from "@ilovepdf/ilovepdf-nodejs";
import fs from "fs";
import path from "path";

import ProcessDocumentService from "./processDocumentService";
import UserRepository from "../user/userRepository";
import { ConvertPdfToTextDTO } from "./dtos";
import UserDocumentsRepository from "../user/documents/userDocumentsRepository";
import AppError from "@/errors/AppError";
import { tmpFolder } from "@/configs/multerConfig";
import { env } from "@/env";

export default class ILovePdfService implements ProcessDocumentService {
  private api: ILovePDFApi;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly userDocumentsRepository: UserDocumentsRepository
  ) {
    this.api = new ILovePDFApi(
      env.ILOVEPDF_PUBLIC_KEY,
      env.ILOVEPDF_SECRET_KEY
    );
  }

  async convertPdfToText(data: ConvertPdfToTextDTO) {
    const userExists = await this.userRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError(400, "User not found");
    }

    const document = await this.userDocumentsRepository.findById(
      data.document_id
    );

    if (!document) {
      throw new AppError(400, "Document not found");
    }

    const filePath = path.resolve(tmpFolder, `${document.name}.pdf`);

    if (!fs.existsSync(filePath)) {
      throw new Error("File not found");
    }

    try {
      const fileBuffer = fs.readFileSync(filePath);

      const task = this.api.newTask("extract");

      await task.addFile(fileBuffer.toString("utf-8"));

      await task.process();

      const fileData = await task.download();

      const convertedFileName = `${document.name}.txt`;

      fs.writeFileSync(`${tmpFolder}/converted/${convertedFileName}`, fileData);

      return {
        url: `${env.API_URL}/documents/converted/${convertedFileName}`,
      };
    } catch (error) {
      throw new AppError(400, "Error processing file");
    }
  }
}
