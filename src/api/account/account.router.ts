import express from "express";
import { isAuthenticated } from "../../utils/auth/authenticated-middleware";
import { me, password, username } from "./account.controller";
import { list } from "./account.controller";
import { ChangePasswordDTO } from "./account.dto";
import { validate } from "../../utils/validation-middleware";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

// Example without users
// if (process.env.USE_USERS) router.use(isAuthenticated);

router.use(isAuthenticated);
router.get("/", list);
router.get("/me", me);
router.get("/username", username);
router.post("/password", validate(ChangePasswordDTO), password);

export default router;
