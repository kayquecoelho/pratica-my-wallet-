import { Router } from "express";
import { getFinancialEvents } from "../controllers/financialEventsController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const financialEventsRouter = Router();

financialEventsRouter.use(validateTokenMiddleware);
financialEventsRouter.get("/financial-events", getFinancialEvents);

export default financialEventsRouter;