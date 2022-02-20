import express from 'express';
import {createOrUpdateUser, currentUser,signup,signin, signout, getUsers, updateUser} from "../controllers/AuthController";

const router = express.Router();


router.post('/create-or-update-user', createOrUpdateUser);
router.post('/current-user', currentUser);
router.get("/users", getUsers);
router.post("/signup",signup);
router.post("/signin",signin);
router.put("/user/:id",updateUser)
router.get("/signout",signout);

module.exports = router;