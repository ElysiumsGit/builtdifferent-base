import User from "../model/user.model.js";
import { createUserSchema } from "../schema/user.schema.js";
import bcrypt from "bcryptjs";
import { generate8CharsWithSymbols } from "../utils/functions/generateCharacters.js";
import { sendEmail } from "../utils/emailer/createAccount.js";

export const createUser = async (req, res) => {
  try {
    const validateUser = createUserSchema.parse(req.body);

    const generatedPassword = generate8CharsWithSymbols();
    await sendEmail({
      to: validateUser.email,
      subject: "Your Account Password",
      text: `Your password is ${generatedPassword}`,
      password: generatedPassword,
    });

    const checkEmail = await User.findOne({ email: validateUser.email });

    if (checkEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(generatedPassword, salt);
    validateUser.password = hashedPassword;

    const user = await User.create(validateUser);

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userWithoutPassword,
    });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(201).json({
      success: true,
      message: "User read successfully",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
