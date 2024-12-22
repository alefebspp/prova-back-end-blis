import UserAbility from "../UserAbility";

export type CreateUserAbilityDTO = Pick<
  UserAbility,
  "user_id" | "ability_id" | "years_experience"
>;

export type DeleteUserAbilityDTO = {
  ids: string[];
};

export type FindManyUserAbilitiesDTO = {
  page: number;
  limit: number;
};
