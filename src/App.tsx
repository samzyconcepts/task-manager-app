import { Form } from "./component/Form";
import TasksView from "./component/TasksView";

function App() {
    return (
        <main className="py-48 bg-[#f3f3f3]">
            <div className="grid place-content-center">
                <Form />
                <TasksView />
            </div>
        </main>
    );
}

export default App;
