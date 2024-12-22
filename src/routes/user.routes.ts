import { Router } from "express";
import multer from "multer";

import userControllerFactory from "@/features/user/userControllerFactory";
import userAbilityControllerFactory from "@/features/user/abilities/userAbilityControllerFactory";
import authControllerFactory from "@/features/auth/authControllerFactory";
import ensureAuthenticated from "@/middleware/ensureAuthenticated";
import userDocumentsControllerFactory from "@/features/user/documents/userDocumentsControllerFactory";
import { multerConfig } from "@/configs/multerConfig";

const upload = multer(multerConfig);

const userRouter = Router();
const userController = userControllerFactory();
const userAbilityController = userAbilityControllerFactory();
const authController = authControllerFactory();
const userDocumentsController = userDocumentsControllerFactory();
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Token to authenticate user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 */
userRouter.post("/login", (req, res) => authController.login(req, res));
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUser'
 *     responses:
 *       201:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 */
userRouter.post("/", (req, res) => userController.create(req, res));

userRouter.use(ensureAuthenticated);

/**
 * @swagger
 * /users/documents:
 *   post:
 *     summary: Create and upload user document
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserDocument'
 *     responses:
 *       201:
 *         description: Url to the uploaded file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/CreateUserDocumentResponse'
 */
userRouter.post("/documents", upload.single("file"), (req, res) =>
  userDocumentsController.create(req, res)
);
/**
 * @swagger
 * /users/abilities:
 *   post:
 *     summary: Create user ability
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserAbility'
 *     responses:
 *       201:
 *         description: The created user ability
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/UserAbility'
 */
userRouter.post("/abilities", (req, res) =>
  userAbilityController.create(req, res)
);
/**
 * @swagger
 * /users/abilities:
 *   delete:
 *     summary: Delete one or more user abilities
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       description: IDs of abilities to be deleted
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteUserAbility'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "One or more resources were removed"
 */
userRouter.delete("/abilities", (req, res) =>
  userAbilityController.delete(req, res)
);
/**
 * @swagger
 * /users/abilities:
 *   get:
 *     summary: Get users abilities
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         required: false
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         required: false
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: Users abilities and pagination informations
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsersAbilities'
 */
userRouter.get("/abilities", (req, res) =>
  userAbilityController.findMany(req, res)
);

export default userRouter;
