import PrismaUserRepository from "../prisma/userRepository";
import PrismaUserDocumentsRepository from "./prisma/userDocumentsRepository";
import UserDocumentsController from "./userDocumentsController";
import UserDocumentsService from "./userDocumentsService";

export default function userDocumentsControllerFactory() {
  const userDocumentsRepository = new PrismaUserDocumentsRepository();
  const userRepository = new PrismaUserRepository();
  const userDocumentsService = new UserDocumentsService(
    userDocumentsRepository,
    userRepository
  );
  return new UserDocumentsController(userDocumentsService);
}
