import { useSelector } from "react-redux"
import Card from "./Card"

const ListTasks =()=> {
    const tasks = useSelector(state => state.tasks)
    const searchedvalue = useSelector(state=> state.searchedvalue)
    return (
        <div>
            {
                tasks
                .filter((el) => el.title.includes(searchedvalue))
                .map((task)=> <Card key={task.id} task = {task}/>)
            }
        </div>
    )
}

export default ListTasks