import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import AppError from "@/errors/AppError";
import UserRepository from "../user/userRepository";
import { LoginDTO } from "./dtos";
import { env } from "@/env";

export default class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async login({ email, password }: LoginDTO) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError(400, "Incorrect email or password");
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new AppError(400, "Incorrect email or password");
    }

    const token = sign({}, env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
