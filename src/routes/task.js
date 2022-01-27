import express from 'express';
import { createTask, deleteTask, getAllTask, updateTask } from '../controllers/task';
import { isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/tasks',isAuth, getAllTask);
router.post('/task', isAuth, createTask);
router.post('/task/:id', isAuth, updateTask);
router.post('/task/:id', isAuth, deleteTask);
module.exports = router;