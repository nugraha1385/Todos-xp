/**
 * Created by Indrap on 29/11/2017.
 */


export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const SAVE_TODO_ACTION = "SAVE_TODO_ACTION";
export const FILTER_TODO_ACTION = "FILTER_TODO_ACTION";


export const addTodo = (description,status, priority) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch({
                type: ADD_TODO_ACTION,
                payload: {
                    description: description,
                    status:status,
                    priority:priority
                }
            });            
        },1000);
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO_ACTION,
        payload : {
            id:id
        }
    }
}

export const saveTodo = (id, status, priority) => {
    return {
        type: SAVE_TODO_ACTION,
        payload : {
            id:id,
            status:status,
            priority: priority
        }
    }
}

export const filterTodo = (statusFilter, priorityFilter) => {
    return {
        type: FILTER_TODO_ACTION,
        payload : {
            statusFilter: statusFilter,
            priorityFilter: priorityFilter
        }
    }
}



