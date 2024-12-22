import AbilitiesRepository from "@/features/abilities/abilitiesRepository";
import UserRepository from "../userRepository";
import UserAbilityRepository from "./userAbilityRepository";
import {
  CreateUserAbilityDTO,
  DeleteUserAbilityDTO,
  FindManyUserAbilitiesDTO,
} from "./dtos";
import AppError from "@/errors/AppError";

export default class UserAbilityService {
  constructor(
    private readonly userAbilityRepository: UserAbilityRepository,
    private readonly userRepository: UserRepository,
    private readonly abilitiesRepository: AbilitiesRepository
  ) {}

  async create(data: CreateUserAbilityDTO) {
    const userExists = await this.userRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError(400, "User not found");
    }

    const ability = await this.abilitiesRepository.findById(data.ability_id);

    if (!ability) {
      throw new AppError(400, "Ability not found");
    }

    if (!ability.active) {
      throw new AppError(400, "This ability is inactive");
    }

    const userAbility = await this.userAbilityRepository.create(data);

    return userAbility;
  }

  async delete({ ids }: DeleteUserAbilityDTO) {
    for (const id of ids) {
      await this.findById(id);
    }

    await this.userAbilityRepository.delete({ ids });
  }

  async findMany(params: FindManyUserAbilitiesDTO) {
    const data = await this.userAbilityRepository.findMany(params);

    return {
      ...data,
    };
  }

  private async findById(id: string) {
    const userAbility = await this.userAbilityRepository.findById(id);

    if (!userAbility) {
      throw new AppError(400, "User ability not found");
    }

    return userAbility;
  }
}
