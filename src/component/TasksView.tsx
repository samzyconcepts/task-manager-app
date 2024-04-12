import Task from "./Task";

import type { RootState } from "../state/store";
import { useSelector } from "react-redux";

function TasksView() {
    const tasks = useSelector((state: RootState) => state.task.tasks);

    if (tasks.length) {
        return (
            <section className="px-6 py-3 rounded-lg bg-white mt-2">
                {tasks.map(({ id, name, completed }) => (
                    <Task key={id} id={id} name={name} completed={completed} />
                ))}
            </section>
        );
    }
}
export default TasksView;
