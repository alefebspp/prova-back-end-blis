import { hash } from "bcrypt";

import { CreateUserDTO } from "./dtos";
import UserRepository from "./userRepository";
import AppError from "@/errors/AppError";

export default class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create({ password, ...data }: CreateUserDTO) {
    const userAlreadyExists = await this.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new AppError(400, "Email already registered");
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return {
      user,
    };
  }

  async findById(id: string) {
    const user = await this.userRepository.findByEmail(id);

    if (!user) {
      throw new AppError(400, "User not found");
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);

    return user;
  }
}
