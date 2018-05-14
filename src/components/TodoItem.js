/**
 * Created by Indrap on 29/11/2017.
 */
import React from 'react';
import {Input,Table, Button, Dropdown, Image} from 'semantic-ui-react'
import { statusOptions, priorityOptions } from "../utils/todoOptions";
import loading from '../asset/loading-icon.gif';




class TodoItem extends React.Component {

    //test
    //test 2
    //dev2 branch
    constructor(props){
        super(props);
        this.state = {
            status: props.todo.status,
            priority: props.todo.priority,
            description: props.todo.description,
            editDesc:false,
            isLoading:props.todo.isLoading
        };
        console.log(this.state);
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
         
        let buttonElement;
        let descriptionComp;

        {console.log(this.state.isLoading)}
        if (this.state.isLoading){
            buttonElement =
                (<Image src={loading} size='tiny' />);
        } else {
            buttonElement=
                (<div>
                <Button type="button"
                        onClick={() => {
                            this.props.clickSaveButton(this.props.todo.id,this.state.description, this.state.status, this.state.priority);
                            this.setState({isLoading:true});
                        }}> Save</Button>
                <Button type="button" onClick={this.props.clickDeleteButton}> Delete </Button>
                </div>
            );
        }

        if(this.state.editDesc){
            descriptionComp =
                (<Input type="text" name="description" placeholder="description" size="small" onBlur={this.stopEditThis}
                               onChange={this.handleDescriptionChange} value={this.state.description} />);
        } else {
            descriptionComp =
                (<span onClick={this.editThis}>{this.state.description}</span>);
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
                    {buttonElement}
                </Table.Cell>
            </Table.Row>
        );
    };
}

export default TodoItem;