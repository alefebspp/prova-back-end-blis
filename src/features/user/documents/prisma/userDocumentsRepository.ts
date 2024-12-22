import prisma from "@/lib/prisma";
import { CreateUserDocumentDTO } from "../dtos";
import UserDocumentsRepository from "../userDocumentsRepository";
import UserDocument from "../UserDocument";

export default class PrismaUserDocumentsRepository
  implements UserDocumentsRepository
{
  async create(data: CreateUserDocumentDTO) {
    const document = await prisma.userDocuments.create({ data });

    return document;
  }

  async findById(id: string) {
    const document = await prisma.userDocuments.findUnique({ where: { id } });

    return document;
  }
}
