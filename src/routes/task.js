import express from 'express';
import { createTask, deleteTask, getAllTask, updateTask } from '../controllers/task';
import { isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/task', getAllTask);
router.post('/task',  createTask);
router.post('/task/:id',  updateTask);
router.post('/task/:id',  deleteTask);
module.exports = router;