import express from 'express';
import { createProject, deleteProject, getAllProject, updateProject } from '../controllers/project';
import { isAdmin, isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/project', getAllProject);
router.post('/project', createProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);
module.exports = router;