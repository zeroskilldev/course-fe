import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["text-[#3d3d3d]"],
      secondary: ["bg-[#DBE2EF]", "text-[#112D4E]", "border-[#464646]"],
    },
    size: {
      small: ["text-sm", "py-2", "px-4"],
      medium: ["text-base", "py-3", "px-6"],
      mobile:["text-md", "py-3", "px-6"]
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
      class: "cursor-pointer hover:text-black transition-all ease-in-out duration-150",
    },
    {
      intent: "secondary",
      disabled: false,
      class: "cursor-pointer",
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
  <div>
    <button
    className={button({ intent, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
  </div>
  
);