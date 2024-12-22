import { Request, Response } from "express";
import z from "zod";

import AuthService from "./authService";

export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(request: Request, response: Response) {
    const body = z
      .object({
        email: z.string().email().min(1),
        password: z.string().min(1),
      })
      .parse(request.body);

    const { token } = await this.authService.login(body);

    return response.status(200).send({ token });
  }
}
