import React, { Component  } from "react";
import { Dropdown  } from "semantic-ui-react";
import { statusOptions,priorityOptions } from "../utils/todoOptions";


class TodoFilter extends Component {

    state = {
        statusFilter:"",
        priorityFilter: ""
    };       

    handleStatusFilterChange = (event,data) => {
        this.setState({statusFilter:data.value},
            () => this.props.changeFilter(this.state.statusFilter, this.state.priorityFilter)); 
    }
    handlePriorityFilterChange = (event,data) => {
        this.setState({priorityFilter:data.value},
            () => this.props.changeFilter(this.state.statusFilter, this.state.priorityFilter)); 
                     
    } 

    render(){
        return(<div>
            <Dropdown name="statusFilter" placeholder="Filter status" selection  options={statusOptions} onChange={this.handleStatusFilterChange} value={this.state.statusFilter} />
            <Dropdown name="priorityFilter" placeholder="Filter priority" selection  options={priorityOptions} onChange={this.handlePriorityFilterChange} value={this.state.priorityFilter} />
        </div>);
    }
}

export default TodoFilter;