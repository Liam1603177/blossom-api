export const validate =
  (schema, source = "body") =>
  (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      return res.status(400).json({ error: "VALIDATION_ERROR", details: result.error.flatten() });
    }
    req[source] = result.data;
    next();
  };
