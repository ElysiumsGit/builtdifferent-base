import User from "../../model/online-shopping/user.model.js";
import { createUserSchema } from "../../schema/online-shopping/user.schema.js";
import bcrypt from "bcryptjs";
import { generate8CharsWithSymbols } from "../../utils/functions/generateCharacters.js";
import { sendEmail } from "../../utils/emailer/createAccount.js";

export const createUser = async (req, res) => {
  try {
    const result = createUserSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: result.error.issues,
      });
    }

    const validateUser = result.data;

    const checkEmail = await User.findOne({ email: validateUser.email });
    if (checkEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const generatedPassword = generate8CharsWithSymbols();

    await sendEmail({
      to: validateUser.email,
      subject: "Your Account Password",
      password: generatedPassword,
    });

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
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
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

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    await User.findByIdAndDelete(id);

    res.status(201).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(201).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
