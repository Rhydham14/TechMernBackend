import express from "express";
import signupController from "../controller/signup.Controller.js";

const router = express.Router();
router.post("/auth/signup", signupController);

export default router;
