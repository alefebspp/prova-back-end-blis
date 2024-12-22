import PrismaAbilitiesRepository from "@/features/abilities/prisma/abilitiesRepository";
import PrismaUserRepository from "../prisma/userRepository";
import PrismaUserAbilityRepository from "./prisma/userAbilityRepository";
import UserAbilityService from "./userAbilityService";
import UserAbilityController from "./userAbilityController";

export default function userAbilityControllerFactory() {
  const userAbilityRepository = new PrismaUserAbilityRepository();
  const userRepository = new PrismaUserRepository();
  const abilitiesRepository = new PrismaAbilitiesRepository();
  const userAbilityService = new UserAbilityService(
    userAbilityRepository,
    userRepository,
    abilitiesRepository
  );
  return new UserAbilityController(userAbilityService);
}
