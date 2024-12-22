import UserAbility from "./UserAbility";
import {
  CreateUserAbilityDTO,
  DeleteUserAbilityDTO,
  FindManyUserAbilitiesDTO,
} from "./dtos";

export default interface UserAbilityRepository {
  create: (data: CreateUserAbilityDTO) => Promise<UserAbility>;
  findById: (id: string) => Promise<UserAbility | null>;
  delete: ({ id, ids }: DeleteUserAbilityDTO) => Promise<void>;
  findMany: (params: FindManyUserAbilitiesDTO) => Promise<{
    data: UserAbility[];
    pagination: {
      page: number;
      limit: number;
      totalItems: number;
      totalPages: number;
    };
  }>;
}
