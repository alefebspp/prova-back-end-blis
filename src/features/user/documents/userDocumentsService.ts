import fs from "fs";
import path from "path";
import { tmpFolder } from "@/configs/multerConfig";

import AppError from "@/errors/AppError";
import UserRepository from "../userRepository";
import { CreateUserDocumentDTO } from "./dtos";
import UserDocumentsRepository from "./userDocumentsRepository";
import { env } from "@/env";

export default class UserDocumentsService {
  constructor(
    private readonly userDocumentsRepository: UserDocumentsRepository,
    private readonly userRepository: UserRepository
  ) {}

  async create({
    file,
    ...data
  }: Omit<CreateUserDocumentDTO, "url"> & { file?: Express.Multer.File }) {
    const userExists = await this.userRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError(400, "User not found");
    }

    if (!file) {
      throw new AppError(400, "A file is required");
    }

    const newFileName = await this.saveFile({ file, fileName: data.name });

    const url = `${env.API_URL}/documents/${newFileName}`;

    const document = await this.userDocumentsRepository.create({
      ...data,
      url,
    });

    return { document };
  }

  private async saveFile({
    file,
    fileName,
  }: {
    file: Express.Multer.File;
    fileName: string;
  }): Promise<string> {
    try {
      const fileExtension = path.extname(file.originalname);
      const newFileName = `${fileName}${fileExtension}`;
      const newFilePath = path.resolve(tmpFolder, newFileName);

      fs.renameSync(file.path, newFilePath);

      return newFileName;
    } catch (error) {
      throw new AppError(400, "Error trying to save file");
    }
  }
}
