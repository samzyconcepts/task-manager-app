import Button from "./component/Button";
import Input from "./component/Input";

// Image
import send from "./assets/send.svg"

function App() {
    return (
        <>
            <form className="container mx-auto flex gap-4">
                <Input />
                <Button variant="primary" className="h-14 w-14 flex items-center justify-center">
                <img src={send} alt="arrow-button" />
                </Button>
            </form>
        </>
    );
}

export default App;
