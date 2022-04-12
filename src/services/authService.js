import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import conflictError from "../errors/conflictError.js";
import unauthorizedError from "../errors/unauthorizedError.js";
import * as authRepository from "../repositories/authRepository.js";

export async function createUser(name, email, password) {
  const existingUsers = await authRepository.verifyUserExistence(email);

  if (existingUsers.rowCount > 0) throw conflictError("User");

  const hashedPassword = bcrypt.hashSync(password, 12);
  await authRepository.insertUser(name, email, hashedPassword);
}

export async function login(email, password) {
  const [user] = await authRepository.selectUser(email);

  if (!user || !bcrypt.compareSync(password, user.password)) throw unauthorizedError("User");

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  return token;
}
