/**
 * Created by Indrap on 29/11/2017.
 */

import {ADD_TODO_ACTION, DELETE_TODO_ACTION, SAVE_TODO_ACTION,
    FILTER_TODO_ACTION} from '../actions/todoAction';

const initialState = {
    todos :
        [
            {id:223344 ,no:1, description:"Wake Up",status:"QUEUE",priority:"HIGH"},
            {id:334455, no:2, description:"Shower",status:"QUEUE",priority:"MEDIUM"}
        ] ,
    todosFilter : {
        statusFilter:"",
        priorityFilter:""
    }
}

const todoReducer = (state = initialState, action) => {
    let newState;
    switch(v){  
        case ADD_TODO_ACTION:      
            newState = {
                ...state,
                todos: state.todos.concat(
                    {
                        id: new Date(),
                        description:action.payload.description,
                        no:state.todos.length + 1,
                        status: action.payload.status,
                        priority:action.payload.priority
                    }
                )
            }
            break;

        case DELETE_TODO_ACTION:
            newState = {
                ...state,
                todos: state.todos.filter((todo)=>(todo.id !== action.payload.id))
            }
            break;

        case SAVE_TODO_ACTION:     
            newState = {
                ...state,
                todos: state.todos.map((todo)=>{

                    if(todo.id === action.payload.id){
                        todo = {
                            ...todo,                                           
                                status: action.payload.status,
                                priority:action.payload.priority
                            }
                    }
                    return todo;
                })
            };            
            break;
        
        case FILTER_TODO_ACTION:
            newState = {
                ...state,
                todosFilter: {
                    statusFilter: action.payload.statusFilter,
                    priorityFilter: action.payload.priorityFilter
                }          
            };            
                          
            break;
        
        default:
            newState = {...state};
    }; 
    return newState;
};

export default todoReducer;