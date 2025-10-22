import {
  billingSchemaInfo,
  professionalSchemaInfo,
  personalSchemaInfo,
  type Step,
  type StepFormData,
} from "@/type";
import { log } from "console";
import { Briefcase, CreditCard, User } from "lucide-react";
import { useState } from "react";

const stepSchemas = [
  personalSchemaInfo,
  professionalSchemaInfo,
  billingSchemaInfo,
];

export const steps: Step[] = [
  { id: "personal", name: "Personal name", icon: User },
  { id: "Proffesional", name: "professinal Info", icon: Briefcase },
  { id: "Billing", name: "Billing Info ", icon: CreditCard },
];

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<StepFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
}
