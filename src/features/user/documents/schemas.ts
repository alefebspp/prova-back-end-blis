/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserDocument:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "test"
 *         user_id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         file:
 *           type: string
 *           format: binary
 *       required:
 *         - name
 *         - user_id
 *         - file
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserDocumentResponse:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           example: "http://localhost:3000/documents/test.pdf"
 */
