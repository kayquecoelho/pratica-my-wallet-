export default function unauthorizedError(entity) {
  return { type: "error_unauthorized", message: `${entity} is unauthorized!`};
}