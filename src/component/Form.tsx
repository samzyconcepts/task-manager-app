import Button from "./ui/Button";
import Input from "./ui/Input";

// Image
import send from "../assets/send.svg";

export const Form = () => {
    return (
        <form className="container mx-auto flex gap-4">
            <Input type="text" placeholder="Add your task..." className="w-[505px]" />
            <Button variant="primary" className="h-14 w-14 flex items-center justify-center">
                <img src={send} alt="arrow-button" />
            </Button>
        </form>
    );
};
