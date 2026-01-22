// import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { StepFormData } from "@/type";
import { useForm } from "react-hook-form";

const MultiStepForm = () => {
  // custom hook

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    setValue,
    reset,
  } = useForm<StepFormData>({
    // resolver: zodResolver,
  });

  return <div>Multi step form</div>;
};

export default MultiStepForm;
