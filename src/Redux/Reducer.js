import { ADDTASK, CHECKALL, DELETEALL, HANDLECHECK, HANDLEDELETE, SEARCH, UNCHECKALL } from "./ActionTypes"

const initialState = {
    tasks : [
        { title: "go to bed", id: Math.random(), isChecked: false },
        { title: "go away", id: Math.random(), isChecked: false },
        { title: "go mimi", id: Math.random(), isChecked: false },
    ],
    searchedvalue : ""
}

const Reducer = (state = initialState , action) => {
    switch (action.type) {

        case HANDLECHECK : return {
            ...state,
            tasks: state.tasks.map((el) =>
                el.id === action.payload ? { ...el, isChecked: !el.isChecked } : el
            )
        }

        case HANDLEDELETE : return {
            ...state,
            tasks: state.tasks.filter((el) => 
                el.id !== action.payload)
        }

        case ADDTASK : return {
            ...state, 
            tasks : [...state.tasks, action.payload]
        }

        case SEARCH : return {
            ...state,
            searchedvalue : action.payload
        }

        case CHECKALL : return {
            ...state,
            tasks: state.tasks.map((el) =>
                !el.isChecked  ? { ...el, isChecked: !el.isChecked } : el
            )
        }

        case UNCHECKALL : return {
            ...state,
            tasks: state.tasks.map((el) =>
                el.isChecked  ? { ...el, isChecked: !el.isChecked } : el
            )
        }

        case DELETEALL : return {
            ...state,
            tasks: state.tasks.filter((el) => 
                el === true)
        }

        default: return state
    }
}

export default Reducer