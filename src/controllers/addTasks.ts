import prisma from '../utils/prisma';
import { Request, Response } from 'express';

export const addTask = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body;

    const newTask = await prisma.task.create({
      data: {
        title,
        color: color || '#000000',
        completed: false,
      },
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to create task',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
