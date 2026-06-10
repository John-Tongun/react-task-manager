import TaskCard from "./Taskcard";

export default function TaskList({ Task}){
    return (
        <div>
            {
                Task.map(task=> (
                    <TaskCard
                    key={task.id}
                    task={task}
                    />  
                ))
            }
        </div>
    )
}
