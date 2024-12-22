import Ability from "./Ability";
import { CreateAbilityDTO, UpdateAbilityDTO } from "./dtos";

export default interface AbilitiesRepository {
  create: (data: CreateAbilityDTO) => Promise<Ability>;
  update: (data: UpdateAbilityDTO) => Promise<Ability>;
  findById: (id: string) => Promise<Ability | null>;
}
