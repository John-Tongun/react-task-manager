import {useParams} from "react-router-dom";

const tasks= [ 
    {
        id: 1,
        title: "study React Router",
        desc: "Learn routing basics"
    },
    {
        id: 2,  
        title: "Build Project",
        desc: "Create SPA app"
    },
    {
        id: 3,
        title: "practice useState()",
        desc: "UserState and useEffect()"

    }
];
 
export default function TaskDetails() {
    const {id} = useParams();
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <h1>Task not found</h1>;
        
    }
    return (
        <div>
            <h1>{task.title}</h1>   
            <p>{task.desc}</p>
        </div>
    );      

    }   

