import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { search } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

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
    width: '460px',
    height: '50px',
    borderRadius: '17px',
    fontFamily: 'Brush Script MT, cursive',
}


function SearchTask () {
    
    const dispatch = useDispatch()

    const [c, setC] = useState("")

    const handleReset =()=> {
        setC("")
        dispatch(search(""))
    }

    return (
        
        <div style={styleBox}>
            <input
                style={styleInput}
                type="text"
                placeholder="Search tasks..."
                value={c}
                onChange={(e)=> setC(e.target.value)}
            />

            <FontAwesomeIcon 
                onClick={()=> dispatch(search(c))}
                style={iconStyle}
                icon={faMagnifyingGlass} 
            />

            <FontAwesomeIcon
                style={iconStyle}
                icon={faXmark}
                onClick={()=> handleReset()}
            />
        </div>
    );
}

export default SearchTask