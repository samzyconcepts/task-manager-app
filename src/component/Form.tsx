import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ErrorText from "./ErrorText";
import { useDispatch } from "react-redux";
import { addTask } from "../state/task/taskSlice";

// UI components
import Button from "./ui/Button";
import Input from "./ui/Input";

// Image
import send from "../assets/send.svg";

const taskValueSchema = z.object({
    task: z
        .string()
        .min(2, { message: "Task name must not be empty" })
        .max(255, { message: "The text is getting to long..." }),
});

type taskValue = z.infer<typeof taskValueSchema>;

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<taskValue>({
        resolver: zodResolver(taskValueSchema),
    });

    const dispatch = useDispatch();

    const onSubmit = (data: taskValue) => {
        // add the new task to the store
        dispatch(addTask(data.task));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container mx-auto flex gap-4">
                <Input
                    {...register("task")}
                    inputType="text"
                    placeholder="Add your task..."
                    className="w-[505px]"
                />

                <Button
                    variant="primary"
                    className="h-14 w-14 flex items-center justify-center"
                    type="submit"
                    disabled={isSubmitting}>
                    <img src={send} alt="arrow-button" />
                </Button>
            </div>
            <ErrorText>{errors.task?.message}</ErrorText>
        </form>
    );
};
