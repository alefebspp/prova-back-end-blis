import express from "express";
import "dotenv/config";
import "express-async-errors";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./configs/swaggerConfig";

import userRouter from "./routes/user.routes";
import handleErrors from "./middleware/handleErrors";
import abilitiesRouter from "./routes/abilities.routes";
import { tmpFolder } from "./configs/multerConfig";
import processDocumentRouter from "./routes/processDocument.routes";

const app = express();
app.use(express.json());
app.use("/documents", express.static(tmpFolder));

app.use("/users", userRouter);
app.use("/abilities", abilitiesRouter);
app.use("/process", processDocumentRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(handleErrors);

export default app;
