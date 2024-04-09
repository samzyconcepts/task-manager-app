import { cva } from "class-variance-authority";
import { cn } from "../../util/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export default function Button({ className, variant, ...props }: ButtonProps) {
    return <button {...props} className={cn(buttonVariants({ variant }), className)} />;
}

// cva (class variance authority) is a library that allows you to configure different variance for a button each with is own style. It makes our button reuseable with different style.

// to make the component extensible with another style outside what we have specified here. we will give access to the className and also create util file cn.ts...

const buttonVariants = cva(
    "py-2 px-4 rounded-lg hover:bg-[#855DDE] transition-colors duration-150",
    {
        variants: {
            variant: {
                primary: "bg-[#BEAEE2] text-white",
                secondary: "bg-white text-black border-2 border-black",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
