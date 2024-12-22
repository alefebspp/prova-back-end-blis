import PrismaUserDocumentsRepository from "../user/documents/prisma/userDocumentsRepository";
import PrismaUserRepository from "../user/prisma/userRepository";
import ILovePdfService from "./iLovePdfService";
import ProcessDocumentController from "./processDocumentController";

export default function processDocumentControllerFactory() {
  const userRepository = new PrismaUserRepository();
  const userDocumentsRepository = new PrismaUserDocumentsRepository();
  const processDocumentService = new ILovePdfService(
    userRepository,
    userDocumentsRepository
  );
  return new ProcessDocumentController(processDocumentService);
}
