import Button from "./ui/Button";
import Delete from "../assets/Delete.svg";

const Task = () => {
    return (
        <div className="flex justify-between items-center py-3">
            <label htmlFor="" className="flex gap-4 items-center">
                <input type="checkbox" name="" id="" />
                Buy new keyboard from Ikeja
            </label>

            <Button variant="secondary">
                <img src={Delete} alt="Delete button" />
            </Button>
        </div>
    );
};
export default Task;
