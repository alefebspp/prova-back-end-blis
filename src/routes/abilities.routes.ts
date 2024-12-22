import { Router } from "express";
import abilitiesControllerFactory from "@/features/abilities/abilitiesControllerFactory";
import ensureAuthenticated from "@/middleware/ensureAuthenticated";

const abilitiesRouter = Router();
const abilitiesController = abilitiesControllerFactory();

abilitiesRouter.use(ensureAuthenticated);

/**
 * @swagger
 * /abilities:
 *   post:
 *     summary: Create ability
 *     tags: [Abilities]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAbility'
 *     responses:
 *       201:
 *         description: The created ability
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Ability'
 */
abilitiesRouter.post("/", (req, res) => abilitiesController.create(req, res));
/**
 * @swagger
 * /abilities/{id}:
 *   put:
 *     summary: Update ability
 *     tags: [Abilities]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the ability to be updated
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAbility'
 *     responses:
 *       200:
 *         description: The updated ability
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Ability'
 */
abilitiesRouter.put("/:resourceId", (req, res) =>
  abilitiesController.update(req, res)
);

export default abilitiesRouter;
