import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import AppError from "@/errors/AppError";
import { env } from "@/env";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(401, "JWT token is missing");
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new AppError(401, "JWT token is malformed");
  }

  try {
    const decoded = verify(token, env.JWT_SECRET) as TokenPayload;

    request.user = { id: decoded.sub };

    return next();
  } catch (error) {
    throw new AppError(401, "Invalid or expired JWT token");
  }
};

export default ensureAuthenticated;
