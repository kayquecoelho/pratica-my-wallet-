import * as authService from "../services/authService.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.sendStatus(422);
  }

  await authService.createUser(name, email, password);

  res.sendStatus(201);
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.sendStatus(422);
  }

  const token = await authService.login(email, password);
  
  res.send({token});
}
