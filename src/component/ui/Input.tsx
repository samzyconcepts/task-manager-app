import { cn } from "../../util/cn";

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
    type: string;
    placeholder: string;
};

const Input = ({ className, type, placeholder }: InputProps) => {
    return (
        <input
            className={cn("px-4 py-2 rounded-lg border outline-[#855DDE]", className)}
            type={type}
            placeholder={placeholder}
        />
    );
};
export default Input;
