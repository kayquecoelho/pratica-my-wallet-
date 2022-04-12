import unprocessableEntityError from "../errors/unprocessableEntity.js";
import * as financialEventsRepository from "../repositories/financialEventsRepository.js";

export async function getFinancialEvents(userId){
  const events = await financialEventsRepository.getFinancialEvents(userId);
  return events; 
}

export async function insertFinancialEvent(userId, type, value) {
  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) throw unprocessableEntityError();

  if (value < 0) throw unprocessableEntityError();

  await financialEventsRepository.insertFinancialEvent(userId, type, value)
}