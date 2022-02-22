import express from 'express';
import { createTask, deleteTask, getAllTask, updateTask, getOneTask } from '../controllers/task';
import { isAuth, requiredSignin, verifyToken } from '../middlewares/CheckAuth';

const router = express.Router();


router.get('/task', getAllTask);
router.get('/task/:id', getOneTask);
router.post('/task', verifyToken,  createTask);
router.put('/task/:id', verifyToken,  updateTask);
router.delete('/task/:id', verifyToken,  deleteTask);
module.exports = router;