import AbilitiesController from "./abilitiesController";
import AbilitiesService from "./abilitiesService";
import PrismaAbilitiesRepository from "./prisma/abilitiesRepository";

export default function abilitiesControllerFactory() {
  const abilitiesRepository = new PrismaAbilitiesRepository();
  const abilitiesService = new AbilitiesService(abilitiesRepository);

  return new AbilitiesController(abilitiesService);
}
