import AppError from "@/errors/AppError";
import AbilitiesRepository from "./abilitiesRepository";
import { CreateAbilityDTO, UpdateAbilityDTO } from "./dtos";

export default class AbilitiesService {
  constructor(private readonly abilitiesRepository: AbilitiesRepository) {}

  async create(data: CreateAbilityDTO) {
    const ability = await this.abilitiesRepository.create(data);

    return ability;
  }

  async update({ id, data }: UpdateAbilityDTO) {
    const abilityExists = await this.abilitiesRepository.findById(id);

    if (!abilityExists) {
      throw new AppError(400, "Ability not found");
    }

    const ability = await this.abilitiesRepository.update({ id, data });

    return ability;
  }
}
