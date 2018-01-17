import React, { Component  } from "react";
import { Button,  Input, Dropdown} from 'semantic-ui-react';
import { statusOptions,priorityOptions } from "../utils/todoOptions";


class TodoItem extends Component {
    
    state = {
        description : "",
        status : "QUEUE",
        priority: "HIGH"        
    };
    
    handleDescriptionChange = (event) => {
        this.setState({description:event.target.value});
    }

    handleClickAddTodoItem = (event) => {
        this.props.clickAddTodoItem(this.state.description, this.state.status, this.state.priority);
        this.setState({description:""})
    }

    handleStatusChange = (event,data) => {
        this.setState({status:data.value});
    }
    handlePriorityChange = (event,data) => {
        this.setState({priority:data.value});
    }

    render(){
        return(
            <div>    
                <Button onClick={this.handleClickAddTodoItem}>Add</Button>        <Input type="text" name="description" placeholder="description" size="small" onChange={this.handleDescriptionChange} value={this.state.description} />
                <Dropdown name="status" placeholder="Select status" selection options={statusOptions} onChange={this.handleStatusChange} value={this.state.status} />
                <Dropdown name="priority" placeholder="Select priority" selection options={priorityOptions} onChange={this.handlePriorityChange} value={this.state.priority} />
            </div>
        );
    }
}

export default TodoItem;