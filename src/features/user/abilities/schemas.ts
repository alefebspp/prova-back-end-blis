/**
 * @swagger
 * components:
 *   schemas:
 *     UserAbility:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         user_id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         ability_id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         years_experience:
 *           type: number
 *           example: 1
 *         created_at:
 *           type: Date
 *           example: "2024-12-21T00:00:00+00:00"
 *         updated_at:
 *           type: Date
 *           example: "2024-12-21T00:00:00+00:00"
 *         user:
 *           type: object
 *           $ref: '#/components/schemas/User'
 *         ability:
 *           type: object
 *           $ref: '#/components/schemas/Ability'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserAbility:
 *       type: object
 *       properties:
 *         user_id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         ability_id:
 *           type: string
 *           example: "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *         years_experience:
 *           type: number
 *           example: 1
 *       required:
 *         - ability_id
 *         - user_id
 *         - years_experience
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DeleteUserAbility:
 *       type: object
 *       properties:
 *         ids:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - "75dc7e32-a86a-4623-8067-3da7bb532ac6"
 *             - "84fb3b91-b0d9-4149-86e9-244aa2fdfc3e"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UsersAbilities:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/UserAbility'
 *         pagination:
 *           type: object
 *           properties:
 *              page:
 *                type: number
 *                example: 1
 *              limit:
 *                type: number
 *                example: 1
 *              totalItems:
 *                type: number
 *                example: 10
 *              totalPages:
 *                type: number
 *                example: 2
 */
