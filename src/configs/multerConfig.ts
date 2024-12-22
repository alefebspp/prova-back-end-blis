import AppError from "@/errors/AppError";
import multer, { Options } from "multer";
import path from "path";

const tmpFolder = path.resolve(__dirname, "..", "tmp");

const multerConfig: Options = {
  storage: multer.diskStorage({
    destination: tmpFolder,
  }),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = ["application/pdf"];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new AppError(400, "Only PDF files are allowed!"));
    }
  },
};

export { tmpFolder, multerConfig };
