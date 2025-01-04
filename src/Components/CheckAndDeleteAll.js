import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { CheckAll, DeleteAll, UnCheckAll } from '../Redux/Actions';

const styleBox = {
    width: '100px',
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


const CheckAndDeleteAll =()=> {
    const dispatch = useDispatch()
    return(
        <div style={styleBox}>
            <div>
                <FontAwesomeIcon
                    onClick={()=> dispatch(CheckAll())}
                    style={iconStyle}
                    icon={faCheck}
                />

                <FontAwesomeIcon
                    onClick={()=> dispatch(UnCheckAll())}
                    style={iconStyle}
                    icon={faXmark}
                />
        
                <FontAwesomeIcon 
                    onClick={()=> dispatch(DeleteAll())}
                    style={iconStyle} 
                    icon={faTrash} 
                />
            </div>
        </div>
    )
}

export default CheckAndDeleteAll