import * as financialEventsService from "../services/financialEventsService.js"

export async function getFinancialEvents(req, res) {
  const { user } = res.locals;
  
  const events = await financialEventsService.getFinancialEvents(user.id);

  res.send(events);
}