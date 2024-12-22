import Ability from "@/features/abilities/Ability";
import User from "../User";

export default interface UserAbility {
  id: string;
  user_id: string;
  ability_id: string;
  years_experience: number;
  created_at: Date;
  updated_at: Date;
  user: Omit<User, "password">;
  ability: Ability;
}
