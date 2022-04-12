import bcrypt from "bcrypt";
import * as authRepository from "../repositories/authRepository.js";

export async function createUser(name, email, password) {
  const existingUsers = await authRepository.verifyUserExistence(email);

  if (existingUsers.rowCount > 0) {
    return res.sendStatus(409);
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  await authRepository.insertUser(name, email, hashedPassword);
}
