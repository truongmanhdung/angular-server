import express from 'express';
import { createProject, deleteProject, getAllProject, updateProject } from '../controllers/project';
import { isAdmin, isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/projects', getAllProject);
router.post('/project', createProject);
router.post('/project/:id', updateProject);
router.post('/project/:id', deleteProject);
module.exports = router;