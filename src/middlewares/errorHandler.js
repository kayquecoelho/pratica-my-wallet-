export default function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.type === "error_conflict") {
    return res.status(409).send(error.message);
  }
  if (error.type === "error_unauthorized") {
    return res.status(401).send(error.message);
  }
  if (error.type === "error_unprocessable_entity") {
    return res.status(422).send(error.message);
  }
  
  res.sendStatus(500);
}