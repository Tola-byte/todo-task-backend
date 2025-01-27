import express from 'express';
import { Request, Response } from 'express';
import { getTasks } from '../controllers/getTasks';
import { addTask } from '../controllers/addTasks';
import { deleteTasks } from '../controllers/deleteTasks';
import { editTask } from '../controllers/editTasks';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World! Your server is running successfully.');
});

router.get('/getTasks', getTasks);

router.post('/postTasks', addTask);

router.delete('/deleteTasks/:id', deleteTasks);

router.put('/editTasks/:id', editTask);

export default router;
