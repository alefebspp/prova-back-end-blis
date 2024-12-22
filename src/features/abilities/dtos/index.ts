import Ability from "../Ability";

export type CreateAbilityDTO = Pick<Ability, "name"> & {
  active?: boolean;
};

export type UpdateAbilityDTO = {
  id: string;
  data: Partial<Pick<Ability, "active" | "name">>;
};
