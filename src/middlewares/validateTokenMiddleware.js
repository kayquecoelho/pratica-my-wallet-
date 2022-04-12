import jwt from "jsonwebtoken";

export default async function validateTokenMiddleware(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  let user;
  
  try {
    user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.sendStatus(401);
  }

  res.locals.user = user;
  
  next();
}
