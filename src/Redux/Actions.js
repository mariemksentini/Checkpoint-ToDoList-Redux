import { ADDTASK, CHECKALL, DELETEALL, HANDLECHECK, HANDLEDELETE, SEARCH, UNCHECKALL } from "./ActionTypes";

export const handleCheck =(payload)=> {
    return ({
        type : HANDLECHECK,
        payload
    })
}

export const handleDelete = (payload)=> {
    return ({
        type : HANDLEDELETE,
        payload
    })
}

export const AddTask =(payload)=> {
    return ({
        type : ADDTASK,
        payload
    })
}

export const search =(payload)=> {
    return ({
        type : SEARCH,
        payload
    })
}

export const CheckAll =()=> {
    return({
        type : CHECKALL,
    })
}

export const UnCheckAll =()=> {
    return({
        type : UNCHECKALL
    })
}

export const DeleteAll =()=> {
    return({
        type : DELETEALL
    })
}