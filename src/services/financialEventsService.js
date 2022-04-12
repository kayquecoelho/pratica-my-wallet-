import * as financialEventsRepository from "../repositories/financialEventsRepository.js";

export async function getFinancialEvents(userId){
  const events = await financialEventsRepository.getFinancialEvents(userId);
  return events; 
}