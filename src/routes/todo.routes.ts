import { Router } from 'express';
import {
  createTodo,
  allTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from '../controller/todo.controller';

const router = Router();

router.post('/', createTodo);       
router.get('/', allTodos);         
router.get('/:id', getTodoById);    
router.put('/:id', updateTodo);     
router.delete('/:id', deleteTodo);  

export default router;
