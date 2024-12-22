import PrismaUserRepository from "./prisma/userRepository";
import UserController from "./userController";
import UserService from "./userService";

export default function userControllerFactory() {
  const userRepository = new PrismaUserRepository();
  const userService = new UserService(userRepository);

  return new UserController(userService);
}
