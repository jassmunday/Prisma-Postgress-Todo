import client from "../prisma/client";
import { Request, Response } from "express";

export const allTodos = async (req: Request, res: Response)  => {
  try {
    const todos = await client.todo.findMany();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const todo = await client.todo.create({
      data: { title, description },
    });
    res.status(201).json(todo);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Todo by ID
export const updateTodo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const todo = await client.todo.update({
        where: { id: Number(id) },
        data: { title, description },
      });
  
      res.json(todo);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
  
export const getTodoById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const todo = await client.todo.findUnique({
      where: { id: Number(id) },
    });
    
    if(!todo){
      res.status(404).json({msg: "Not Found"});
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(200).json({msg: `Error: ${error}`})
  }
};

// Delete a Todo by ID
export const deleteTodo = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await client.todo.delete({
        where: { id: Number(id) },
      });
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
