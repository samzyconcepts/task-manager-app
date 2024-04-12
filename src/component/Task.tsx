import { useDispatch } from "react-redux";
import { toggleCompleted, removeTask } from "../state/task/taskSlice";

// UI component
import Button from "./ui/Button";
// SVG
import Delete from "../assets/Delete.svg";

interface Task {
    id: string;
    name: string;
    completed: boolean;
}

const Task = ({ id, name, completed }: Task) => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center py-3">
            <label htmlFor={id} className="flex gap-4 items-center">
                <input
                    type="checkbox"
                    name={name}
                    id={id}
                    checked={completed}
                    onChange={() => {
                        dispatch(toggleCompleted(id));
                    }}
                />
                <span
                    className={`${
                        completed ? "line-through decoration-2 decoration-[#855DDE]" : ""
                    }`}>
                    {name}
                </span>
            </label>

            <Button variant="secondary" onClick={() => dispatch(removeTask(id))}>
                <img src={Delete} alt="Delete button" />
            </Button>
        </div>
    );
};
export default Task;
