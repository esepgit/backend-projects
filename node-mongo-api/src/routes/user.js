const { Router } = require("express");
const User = require("../models/user");
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the user name
 *        age:
 *          type: integer
 *          description: the user age
 *        email:
 *          type: string
 *          description: the user email
 *      required:
 *        - name
 *        - age
 *        - email
 *      example:
 *        name: Alan Kay
 *        age: 70
 *        email: alan@email.com
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: create a new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: new user created
 */
router.post("/", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });

    const result = await user.save();

    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: return all users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: all users
 *        content: 
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User' 
 */
router.get("/", async (req, res) => {
  try {
    const result = await User.find();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: return a user
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: all users
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *      404:
 *        description: user not found
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: update a user
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: user updated
 *      404:
 *        description: user not found
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: delete a user
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: user deleted
 *      404:
 *        description: user not found
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
