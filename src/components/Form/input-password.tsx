import * as React from "react";

import { cn } from "@/lib/utils";
import { IconEye, IconEyeSlash } from "../icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassWord = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);
    const handleSwitchPassword = () => {
      setOpen(!open);
    };
    return (
      <div className="relative">
        <input
          type={open ? "text" : "password"}
          className={cn(
            "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div
          className="absolute right-0 top-0 flex h-11 cursor-pointer items-center justify-center px-3 py-2"
          onClick={handleSwitchPassword}
        >
          {open ? (
            <IconEye className="h-4 w-4 fill-black" />
          ) : (
            <IconEyeSlash className="h-4 w-4 fill-black" />
          )}
        </div>
      </div>
    );
  },
);
InputPassWord.displayName = "Input";

export { InputPassWord };
