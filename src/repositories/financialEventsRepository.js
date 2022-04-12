export async function getFinancialEvents(userId) {
  const { rows: events } = await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [userId]
  );
  return events;
}