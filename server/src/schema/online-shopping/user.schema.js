import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  contactNumber: z.string().min(1, "Contact number is required"),
  region: z.string().min(1, "Region is required"),
  province: z.string().min(1, "Province is required"),
  municipality: z.string().min(1, "Municipality is required"),
  barangay: z.string().min(1, "Barangay is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  validId: z.array(z.string()).min(1, "At least one ID is required"),
  role: z.enum(["customer", "admin"]).optional(),
  isVerified: z.boolean().optional(),
});
