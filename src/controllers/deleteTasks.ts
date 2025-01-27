import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export const deleteTasks = async (req: Request, res: Response) => {
  try {
    await prisma.task.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'Task not found' });
  }
};
