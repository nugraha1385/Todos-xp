/**
 * Created by Indrap on 29/11/2017.
 */
import React from 'react';
import {Table, Label, Button, Dropdown} from 'semantic-ui-react'
import { statusOptions, priorityOptions } from "../utils/todoOptions";


class TodoItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            status: props.todo.status,
            priority: props.todo.priority
        };
    } 

    handleStatusChange = (event, data) => {
        this.setState({status: data.value},console.log(this.state))
    }

    handlePriorityChange = (event, data) => {
        this.setState({priority: data.value},console.log(this.state))
    }    


    render(){
        return(
            <Table.Row key={this.props.todo.no}>
                <Table.Cell>{this.props.todo.no}</Table.Cell>
                <Table.Cell>{this.props.todo.description}</Table.Cell>
                <Table.Cell>
                    <Dropdown options={statusOptions} onChange={this.handleStatusChange} value={this.state.status} />
                </Table.Cell>
                <Table.Cell>
                    <Dropdown options={priorityOptions} onChange={this.handlePriorityChange} value={this.state.priority} />
                </Table.Cell>
                <Table.Cell>
                    <Button type="button" onClick={() => this.props.clickSaveButton(this.props.todo.id, this.state.status, this.state.priority)}> Save</Button>
                    <Button type="button" onClick={this.props.clickDeleteButton}> Delete </Button>
                </Table.Cell>
            </Table.Row>
        );
    };
}

export default TodoItem;