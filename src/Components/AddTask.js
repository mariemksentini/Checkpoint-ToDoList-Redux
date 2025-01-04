import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTask } from '../Redux/Actions';


const styleBox = {
    width: '500px',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    border: 'grey solid 2px',
    borderRadius: '20px',
    margin: '50px',
}

const iconStyle = {
    padding: '5px',
    fontSize: '25px',
    cursor : 'pointer'
}

const styleInput = {
    border: 'grey 0px',
    fontSize: '25px',
    width: '480px',
    height: '50px',
    borderRadius: '17px',
    fontFamily: 'Brush Script MT, cursive',
}


const AddNewTask =()=> {

    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const handleAddTask =()=> {
        dispatch(AddTask({title, id : Math.random(), isChecked : false}))
        setTitle("")
    }

    return (
        <div style={styleBox}>
            <input
                style={styleInput}
                type="text"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder="Enter a new task"
            />
            
            <div>
                <FontAwesomeIcon
                    onClick={()=> handleAddTask()}
                    style={iconStyle}
                    icon={faArrowUp}
                />
            </div>
        </div>
    );
}

export default AddNewTask