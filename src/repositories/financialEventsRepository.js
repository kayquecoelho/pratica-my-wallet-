import connection from "../database.js";

export async function getFinancialEvents(userId) {
  const { rows: events } = await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [userId]
  );
  return events;
}

export async function insertFinancialEvent(userId, type, value) {
  await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [userId, value, type]
  );
}