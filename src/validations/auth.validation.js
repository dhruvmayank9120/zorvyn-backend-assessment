export const validateRegister = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 chars" });
  }

  const validRoles = ["viewer", "analyst", "admin"];
  if (role && !validRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  next();
};
