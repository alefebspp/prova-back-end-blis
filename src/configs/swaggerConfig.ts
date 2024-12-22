import { env } from "@/env";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Users and abilities API",
      version: "1.0.0",
      description: "Blis challenge",
    },
    servers: [
      {
        url: env.API_URL,
      },
    ],
  },
  apis: ["./src/routes/**/*.ts", "./src/**/schemas.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
