import axios from "axios";
/**
 * Created by Indrap on 29/11/2017.
 */


export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const SAVE_TODO_ACTION = "SAVE_TODO_ACTION";
export const FILTER_TODO_ACTION = "FILTER_TODO_ACTION";
export const SHOW_TODO_ACTION = "SHOW_TODO_ACTION";

/*
UTILS FUNCTION
>> Request Data from REST API

*/
const showTodoCall = () => {
    return axios.get("/todos").then(response => {
        let todosResult = response.data.content;
        if(response.data.content && response.data.content[0].value && response.data.content[0].value.length <= 0){
            todosResult = [];
        }

        const result = {
            type: SHOW_TODO_ACTION,
                payload: {
                todos: todosResult
            }
        }
        return result;
    });
}


const addTodoCall = (description,status,priority,no) => {
    
    return axios.post("/todos",{
            no:no,
            description:description,
            status:status,
            priority:priority,
            userId:"IN01"})
        .then((response) => {
            return  {
                type: ADD_TODO_ACTION,
                payload: {
                    description: description,
                    status:status,
                    priority:priority
                }
            }
        });
}

const saveTodoCall = (id, description, status, priority) => {
    return axios.patch("/todos//"+id,{
        description:description,
        status:status,
        priority:priority})
        .then((response) => {
            return  {
                type: SAVE_TODO_ACTION,
                payload:{
                    id:id,
                    status:status,
                    description: description,
                    priority: priority
                }
            }
        });
}

const deleteTodoCall = (id) => {
    return axios.delete("/todos//"+id)
        .then((response) => {
            return  {
                type: DELETE_TODO_ACTION,
                payload : {
                    id:id
                }
            }
        });
}




/*
EXPORT FUNCTION
*/

export const deleteTodo = (id) => {

    return (dispatch) =>{
        return deleteTodoCall(id)
            .then((data) => dispatch(data));
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


export const showTodo = () => {
    return (dispatch) => {
        return showTodoCall()
            .then(data => dispatch(data));
    }
}

export const saveTodo = (id,description, status, priority) => {
    return (dispatch) =>{
        return saveTodoCall(id,description, status, priority)
            .then((data) => dispatch(data));
    }
}

export const addTodo = (description,status,priority) => {
    return (dispatch, getState) => {
        const {todos} = getState().todoReducer;
        const nextNo = todos != null ? todos.length +1 : 0;
        return addTodoCall(description,status,priority,nextNo).then(data => dispatch(data));
    }
}

//create action creator, receiving some data
//create fetch action, fetch some data


