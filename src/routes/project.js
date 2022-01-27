import express from 'express';
import { createProject, deleteProject, getAllProject, updateProject } from '../controllers/project';
import { isAdmin, isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/projects',isAuth, isAdmin, getAllProject);
router.post('/project', isAuth, createProject);
router.post('/project/:id', isAuth, updateProject);
router.post('/project/:id', isAuth, deleteProject);
module.exports = router;