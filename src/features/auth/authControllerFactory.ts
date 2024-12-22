import PrismaUserRepository from "../user/prisma/userRepository";
import AuthService from "./authService";
import AuthController from "./authServiceController";

export default function authControllerFactory() {
  const userRepository = new PrismaUserRepository();
  const authService = new AuthService(userRepository);
  return new AuthController(authService);
}
