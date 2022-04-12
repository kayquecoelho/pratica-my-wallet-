import * as financialEventsService from "../services/financialEventsService.js"

export async function getFinancialEvents(req, res) {
  const { user } = res.locals;

  const events = await financialEventsService.getFinancialEvents(user.id);

  res.send(events);
}

export async function insertFinancialEvent(req, res) {
  const { user } = res.locals;
  const { value, type } = req.body;

  if (!value || !type) {
    return res.sendStatus(422);
  }

  await financialEventsService.insertFinancialEvent(user.id, type, value);
  
  res.sendStatus(201);
}