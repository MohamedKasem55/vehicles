import React from "react";
import Spinner from "@/components/atoms/spinner";
export type ButtonLoaderPosition = "right" | "left"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "outline";
  loaderPosition? : ButtonLoaderPosition,
}

function Button({ label, iconRight,iconLeft, loaderPosition,loading = false, variant = "primary", ...props }: ButtonProps) {
  const baseClass = `border-none! outline-none! flex flex-row items-center justify-center
    ${loading || props.disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:opacity-80"}
    ${props.className ?? ""}`;

  const variantClass = variant === "outline"
    ? "bg-transparent!"
    : "gap-2 rounded-[8px] h-[48px] px-6 bg-[#348C68]! text-white font-inter font-medium text-[13.6px] leading-6";

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`${baseClass} ${variantClass}`}
    >
      {loading && loaderPosition === "left" ? <Spinner size="sm" /> : !!iconLeft ? iconLeft : ""}
      {label && <span>{label}</span>}
      {loading && loaderPosition === "right" ? <Spinner size="sm" /> : !!iconRight ? iconRight : ""}

    </button>
  );
}

export default Button;
