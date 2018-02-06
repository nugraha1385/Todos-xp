/**
 * Created by Indrap on 29/11/2017.
 */
import React from 'react';
import {Input,Table, Button, Dropdown} from 'semantic-ui-react'
import { statusOptions, priorityOptions } from "../utils/todoOptions";




class TodoItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            status: props.todo.status,
            priority: props.todo.priority,
            description: props.todo.description,
            editDesc:false
        };
    }

    handleStatusChange = (event, data) => {
        this.setState({status: data.value},console.log(this.state))
    }

    handlePriorityChange = (event, data) => {
        this.setState({priority: data.value},console.log(this.state))
    }

    editThis = (event) => {
        console.log("call edit this");
        this.setState({editDesc:true});
    }


    stopEditThis = (event) => {
        console.log("stop edit this");
        this.setState({editDesc:false});
    }

    handleDescriptionChange = (event, data) => {
        console.log("handle description changes");
        this.setState({description: data.value},console.log(this.state))
    }




    render(){            
         
        let saveButtonElement = (<Button type="button" 
            onClick={() => {
                this.props.clickSaveButton(this.props.todo.id,this.state.description, this.state.status, this.state.priority);          
            }}> Save</Button>);

        let descriptionComp = (<span onClick={this.editThis}>{this.state.description}</span>);
        if(this.state.editDesc){
            descriptionComp = (<Input type="text" name="description" placeholder="description" size="small" onBlur={this.stopEditThis}
                               onChange={this.handleDescriptionChange} value={this.state.description} />);
        }

        return(
            <Table.Row key={this.props.todo.id}>
                <Table.Cell>{this.props.todo.no}</Table.Cell>
                <Table.Cell>
                    {descriptionComp}
                </Table.Cell>
                <Table.Cell>
                    <Dropdown options={statusOptions} onChange={this.handleStatusChange} value={this.state.status} />
                </Table.Cell>
                <Table.Cell>
                    <Dropdown options={priorityOptions} onChange={this.handlePriorityChange} value={this.state.priority} />
                </Table.Cell>
                <Table.Cell>
                    {saveButtonElement}
                    <Button type="button" onClick={this.props.clickDeleteButton}> Delete </Button>
                </Table.Cell>
            </Table.Row>
        );
    };
}

export default TodoItem;