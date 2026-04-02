export const validateRecord = (req, res, next) => {
  const { amount, type } = req.body;

  if (!amount || !type) {
    return res.status(400).json({ message: "Amount and type are required" });
  }
  next();
};
