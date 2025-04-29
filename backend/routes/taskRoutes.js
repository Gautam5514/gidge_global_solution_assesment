import express from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.use(authMiddleware);

router.post('/', createTask);
router.get('/:projectId', getTasks);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;  
