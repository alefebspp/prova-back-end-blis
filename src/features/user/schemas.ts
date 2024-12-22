/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         name:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         birthdate:
 *           type: Date
 *           example: "1997-05-26T16:00:00+00:00"
 *         password:
 *           type: string
 *           example: "123456"
 *         created_at:
 *           type: Date
 *           example: "2024-12-21T00:00:00+00:00"
 *         updated_at:
 *           type: Date
 *           example: "2024-12-21T00:00:00+00:00"
 *       required:
 *         - name
 *         - email
 *         - birthdate
 *         - password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         birthdate:
 *           type: Date
 *           example: "1997-05-26T16:00:00+00:00"
 *         password:
 *           type: string
 *           example: "123456"
 *       required:
 *         - name
 *         - email
 *         - birthdate
 *         - password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "123456"
 *       required:
 *         - email
 *         - password
 */
