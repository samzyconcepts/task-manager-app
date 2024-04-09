type InputProps = React.HTMLAttributes<HTMLInputElement> & {
    type: string;
    placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
    return (
        <input
            className="px-4 py-2 rounded-lg border outline-[#855DDE]"
            type={type}
            placeholder={placeholder}
        />
    );
};
export default Input;
