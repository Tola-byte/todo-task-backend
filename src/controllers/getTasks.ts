import prisma from '../utils/prisma';
import { Request, Response } from 'express';

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch tasks',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
