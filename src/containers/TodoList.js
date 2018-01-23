/**
 * Created by Indrap on 29/11/2017.
 */
import React from 'react';
import { connect } from 'react-redux';
import TodoItem  from '../components/TodoItem';
import TodoInput  from '../components/TodoInput';
import TodoFilter from "../components/TodoFilter";
import { saveTodo, deleteTodo, addTodo, filterTodo } from '../actions/todoAction';
import { Table } from 'semantic-ui-react'
import { todoReducer } from '../reducers/todoReducer'


class TodoList extends React.Component {

    viewFilteredTodo = (todos, filter) => {
        let displayedTodo = todos.filter((todo) => {
            return ((todo.status == filter.statusFilter) || ("" == filter.statusFilter))
        });
        displayedTodo = displayedTodo.filter((todo) => {
            return ((todo.priority == filter.priorityFilter) || ("" == filter.priorityFilter))
        });

        return displayedTodo.map((todo)=>(
            <TodoItem todo={todo} key={todo.id} 
                clickSaveButton={this.props.handleSave}
                clickDeleteButton={() => this.props.handleDelete(todo.id)} />
        ));  
    }

    render(){
        return(
            <div>               
                <TodoInput clickAddTodoItem={this.props.handleAddTodoItem} />  
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>Desc</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Priority</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.viewFilteredTodo(this.props.todos, this.props.todosFilter)}                                                             
                    </Table.Body>
                </Table>
                <TodoFilter changeFilter={this.props.handleChangeFilter} />
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos,
        todosFilter: state.todoReducer.todosFilter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSave: (id,status,priority) => {
            console.log("handle save on component for:"+id);
            dispatch(saveTodo(id,status,priority));
        },
        handleDelete: (id) => {
            console.log("handle delete on component for:"+id);
            dispatch(deleteTodo(id));
        },
        handleAddTodoItem: (description,status, priority) => {           
            dispatch(addTodo(description,status, priority));
        },
        handleChangeFilter: (statusFilter, priorityFilter) => {
            dispatch(filterTodo(statusFilter, priorityFilter));
        }
    };
}



export default connect(mapStateToProps,mapDispatchToProps)(TodoList);