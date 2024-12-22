import processDocumentControllerFactory from "@/features/documents/processDocumentControllerFactory";
import ensureAuthenticated from "@/middleware/ensureAuthenticated";
import { Router } from "express";

const processDocumentRouter = Router();
const processDocumentController = processDocumentControllerFactory();

processDocumentRouter.use(ensureAuthenticated);

/**
 * @swagger
 * /process/document/convertPdfToText:
 *   get:
 *     summary: Extract the text of a pdf file
 *     tags: [Documents]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: string
 *           example: "54629efb-61c5-4d9e-a402-14f8c8ae2ec5"
 *         required: true
 *         description: Id of a user
 *       - in: query
 *         name: document_id
 *         schema:
 *           type: string
 *           example: "54629efb-61c5-4d9e-a402-14f8c8ae2ec5"
 *         required: true
 *         description: Id of a document
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *               url:
 *                type: string
 *                example: "http://localhost:3000/documents/converted/test.txt"
 */
processDocumentRouter.get("/document/convertPdfToText", (req, res) =>
  processDocumentController.convertPdfToText(req, res)
);

export default processDocumentRouter;
