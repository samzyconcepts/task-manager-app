import React from "react";
import { cn } from "../../util/cn";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputType, placeholder, ...rest }, ref) => {
        return (
            <input
                {...rest}
                ref={ref}
                className={cn(
                    "px-4 py-2 rounded-lg border bg-transparent outline-[#855DDE]",
                    className
                )}
                placeholder={placeholder}
                type={inputType}
            />
        );
    }
);

export default Input;
