/**
 * @swagger
 * components:
 *   schemas:
 *     Ability:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         name:
 *           type: string
 *           example: "React"
 *         active:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: Date
 *           example: "2024-12-21T00:00:00+00:00"
 *         updated_at:
 *           type: Date
 *           example: "2024-12-21T00:00:00+00:00"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateAbility:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "React"
 *         active:
 *           type: boolean
 *           example: true
 *       required:
 *         - name
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateAbility:
 *       type: object
 *       properties:
 *         active:
 *           type: boolean
 *           example: true
 */
