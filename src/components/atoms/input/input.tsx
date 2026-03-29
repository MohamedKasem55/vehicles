import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  registration: UseFormRegisterReturn;
  type?: "text" | "number" | "email" | "password";
  labelCustomClasses?: string;
  inputCustomClasses?: string;
  placeholder?: string;
  error?: FieldError;
}

function Input({
  label,
  registration,
  type = "text",
  inputCustomClasses,
  labelCustomClasses,
  placeholder,
  error,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 flex-1" dir="rtl">
      <label
        className={`font-inter font-medium text-[13.6px] leading-6 text-[#374151] ${labelCustomClasses || ""}`}
      >
        {label}
      </label>
      <input
        type={type}
        {...registration}
        className={`h-[50px] px-[17px] bg-white border border-[#E5E7EB] rounded-[8px] outline-none text-right font-inter text-[13.6px] focus:border-[#348C68] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-gray ${inputCustomClasses || ""}
          ${error && "border-red-500"}
          `}
        placeholder={placeholder}
      />
      {!!error?.message && (
        <span className="text-red-500 text-sm text-right">{error.message}</span>
      )}
    </div>
  );
}

export default Input;
