import { Request, Response } from "express";
import z from "zod";
import UserService from "./userService";

export default class UserController {
  constructor(private readonly userService: UserService) {}

  async create(request: Request, response: Response) {
    const body = z
      .object({
        name: z.string().min(1),
        birthdate: z.coerce.date(),
        email: z.string().email(),
        password: z.string().min(8),
      })
      .parse(request.body);

    const {
      user: { password, ...userWithoutPassword },
    } = await this.userService.create(body);

    return response.status(201).send({ user: userWithoutPassword });
  }
}
