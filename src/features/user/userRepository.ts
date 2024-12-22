import User from "./User";
import { CreateUserDTO } from "./dtos";

export default interface UserRepository {
  create: (data: CreateUserDTO) => Promise<User>;
  findById: (id: string) => Promise<User | null>;
  findByEmail: (email: string) => Promise<User | null>;
}
