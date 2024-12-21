import express from "express";
import userRouter from "./account/account.router";
import authRouter from "./auth/auth.router";

const router = express.Router();

router.use("/users", userRouter);
router.use(authRouter);

export default router;
