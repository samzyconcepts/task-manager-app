import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Task {
    id: string;
    name: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTaskId = uuidv4();
            state.tasks = [
                ...state.tasks,
                { id: newTaskId, name: action.payload, completed: false },
            ];
        },
        removeTask: (state, action: PayloadAction<string>) => {
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
        },
        updateTaskName: (state, action: PayloadAction<{ id: string; name: string }>) => {
            const updatedTasks = state.tasks.map((task) =>
                task.id === action.payload.id ? { ...task, name: action.payload.name } : task
            );
            return { ...state, tasks: updatedTasks };
        },
        toggleCompleted: (state, action: PayloadAction<string>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            if (index > -1) {
                const updatedTasks = [...state.tasks];
                updatedTasks[index] = {
                    ...updatedTasks[index],
                    completed: !updatedTasks[index].completed,
                };
                return { ...state, tasks: updatedTasks };
            } else {
                console.error(`Tried to toggle non-existent task with ID ${action.payload}`);
            }
        },
    },
});


export const {addTask, removeTask, updateTaskName, toggleCompleted} = taskSlice.actions

export default taskSlice.reducer