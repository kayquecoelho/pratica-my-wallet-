import { Router } from "express";
import { calculateSum, getFinancialEvents, insertFinancialEvent } from "../controllers/financialEventsController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const financialEventsRouter = Router();

financialEventsRouter.use(validateTokenMiddleware);
financialEventsRouter.get("/financial-events", getFinancialEvents);
financialEventsRouter.post("/financial-events", insertFinancialEvent);
financialEventsRouter.get("/financial-events/sum", calculateSum);

export default financialEventsRouter;