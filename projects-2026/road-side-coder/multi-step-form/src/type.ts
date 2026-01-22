import type React from "react";
import { z } from "zod";

export const personalSchemaInfo = z.object({
  firstName: z.string().min(1, "firstname required"),
  lastName: z.string().min(1, "firstname required"),
  email: z.string().email("Invalid Email"),
  phone: z.string().min(10, "phone number required"),
});

export const professionalSchemaInfo = z.object({
  company: z.string().min(1, "Company name Required"),
  position: z.string().min(1, "position is  Required"),
  experience: z.enum(["0-2", "3-5", "6-10", "10 +"]),
  industry: z.string().min(1, "Industry is Required"),
});

export const billingSchemaInfo = z.object({
  cardNumber: z.string().min(16, "16 digit required").max(16, "max 16 digits"),
  userName: z.string().min(1, "username required"),
  expirayDate: z.string().min(4, "Invalid expirary date"),
  cvv: z.string().min(3, "Invalid cvv").max(4, "maximum 4 digit"),
});

export type PersonalInfo = z.infer<typeof personalSchemaInfo>;
export type ProfessinalInfo = z.infer<typeof professionalSchemaInfo>;
export type BillingInfo = z.infer<typeof billingSchemaInfo>;

export type StepFormData = PersonalInfo | ProfessinalInfo | BillingInfo;
export type AllformField = PersonalInfo & ProfessinalInfo & BillingInfo;

export interface Step {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
