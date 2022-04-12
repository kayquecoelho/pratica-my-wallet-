export default function conflictError(entity) {
  return { type: "error_conflict", message: `${entity} already exists!` };
}
