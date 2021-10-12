/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from './items.service';
import {StudentItem, Item } from './item.interface';

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - lastName
 *         - courseName
 *         - numberOfHrs
 *         - price
 *         - studentDob
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the student
 *         firstName:
 *           type: string
 *           description: The students firstname
 *         lastName:
 *           type: string
 *           description: The students lastname
 *         courseName:
 *           type: string
 *           description: The students course
 *         numberOfHrs:
 *           type: string
 *           description: The number of hours a course has
 *         price:
 *           type: string
 *           description: The price of a course
 *         studentDob:
 *           type: Date
 *           description: The date of birth of a student
 *       example:
 *         id: 1
 *         firstName: Jacob
 *         lastName: Simpson
 *         courseName: Javascript Fundamentals
 *         numberOfHrs: 40
 *         price: 900
 *         studentDob: 1990/05/05
 *          
 *         
 */

 /**
  * @swagger
  * tags:
  *   name: Students
  *   description: The students management API
  */

 /**
 * @swagger
 * /api/student/items:
 *   get:
 *     summary: Returns the list of all the students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: The list of the students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */




// GET items
itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Item[] = await ItemService.findAll();

    res.status(200).send(items);

  } catch (e: any) {
    res.status(500).send(e.message)
  }
})

/**
 * @swagger
 * /api/student/items/{id}:
 *   get:
 *     summary: Get the students by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: The student description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The student was not found
 */


// GET items/:id
itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {

    const item: Item = await ItemService.find(id);

    if (item) {
      return res.status(200).send(item);
    }
    res.status(404).send("item not found")
  } catch (e: any) {
    res.status(500).send(e.message)
  }

})

/**
 * @swagger
 * /api/student/items:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The student was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */


// POST items
itemsRouter.post("/", async (req: Request, res: Response) => {
  try {

    const item: StudentItem = req.body;
    const newItem = await ItemService.create(item);
    res.status(201).json(newItem);

  } catch (e: any) {
    res.status(500).send(e.message);
  }
})

/**
 * @swagger
 * /api/student/items/{id}:
 *  put:
 *    summary: Update the student by the id
 *    tags: [Students]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The student id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The student was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The student was not found
 *      500:
 *        description: Some error happened
 */


// PUT items/:id
itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {

    const itemUpdate: Item = req.body;

    const existingItem: Item = await ItemService.find(id);

    if (existingItem) {
      const updatedItem = await ItemService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ItemService.create(itemUpdate);

    res.status(201).json(newItem);

  } catch (e: any) {
    res.status(500).send(e.message);
  }

})

/**
 * @swagger
 * /api/student/items/{id}:
 *   delete:
 *     summary: Remove the student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The student id
 * 
 *     responses:
 *       200:
 *         description: The student was deleted
 *       404:
 *         description: The student was not found
 */

// DELETE items/:id
itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ItemService.remove(id);
    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
})