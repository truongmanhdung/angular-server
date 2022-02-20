import express from 'express';
import { createTask, deleteTask, getAllTask, updateTask, getOneTask } from '../controllers/task';
import { isAuth } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/task', getAllTask);
router.get('/task/:id', getOneTask);
router.post('/task',  createTask);
router.put('/task/:id',  updateTask);
router.delete('/task/:id',  deleteTask);
module.exports = router;