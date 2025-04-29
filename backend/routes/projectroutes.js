import express from 'express';
import { createProject, getProjects } from '../controllers/projectController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.use(authMiddleware);

router.post('/', createProject);
router.get('/', getProjects);

export default router;