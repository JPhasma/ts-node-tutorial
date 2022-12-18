import { Router } from 'express';

import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateToDo,
  getTodoById,
} from '../controller/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getAllTodos);

router.get('/:id', getTodoById);

router.put('/:id', updateToDo);

router.delete('/:id', deleteTodo);

export default router;
