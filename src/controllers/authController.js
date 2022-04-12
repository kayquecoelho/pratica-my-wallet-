import * as authService from "../services/authService.js";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.sendStatus(422);
  }

  await authService.createUser(name, email, password);
  
  res.sendStatus(201);
}
