import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-[#112D4E]", "text-[#F9F7F7]", "border-transparent"],
      secondary: ["bg-[#DBE2EF]", "text-[#112D4E]", "border-gray-400"],
    },
    size: {
      small: ["text-sm", "py-2", "px-4"],
      medium: ["text-base", "py-3", "px-6"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      disabled: false,
      class: "hover:bg-[#3F72AF]",
    },
    {
      intent: "secondary",
      disabled: false,
      class: "hover:text-[#3F72AF] hover:bg-[#F9F7F7]",
    },
    { intent: "primary", size: "medium" },
  ],
  defaultVariants: {
    disabled: false,
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => (
  <button
    className={button({ intent, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);