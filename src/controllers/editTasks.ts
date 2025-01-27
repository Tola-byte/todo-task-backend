import prisma from '../utils/prisma';
import { NextFunction, Request, Response } from 'express';

interface UpdateTaskBody {
  title?: string;
  color?: string;
  completed?: boolean;
}

export const editTask = async (
  req: Request<{ id: string }, {}, UpdateTaskBody>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const existingTask = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingTask) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title: title || existingTask?.title,
        color: color || existingTask?.color,
        completed: completed !== undefined ? completed : existingTask.completed,
      },
    });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to update task',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
