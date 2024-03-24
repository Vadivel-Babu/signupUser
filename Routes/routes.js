import { Router } from "express";
import { User } from "../Models/userModel.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(name, email);
    const user = await User.find({ email });

    if (user.length) {
      return res.json({ message: "user exsist", success: false });
    }
    const newUser = {
      name,
      email,
    };
    await User.create(newUser);
    res.status(201).json({ success: true, data: { name, email } });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
