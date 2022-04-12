import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up");
authRouter.post("/login");

export default authRouter;