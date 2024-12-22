import { NextFunction, Request, Response } from "express";
import AppError from "@/errors/AppError";
import { ZodError } from "zod";
import { MulterError } from "multer";

export default (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return response.status(400).send({
        error: "error",
        message: "File size exceeds the 10MB limit",
      });
    }
  }

  if (err instanceof ZodError) {
    return response.status(400).send({
      error: "Validation error",
      issues: err.issues,
    });
  }

  console.error("ERROR:", err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};
