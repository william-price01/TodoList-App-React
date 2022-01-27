import React, { Component } from "react";


class TodoItems extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        var todoEntreies = this.props.entries;
        var listItems = todoEntreies.map(this.createTasks);
        return(
            <ul className="thelist">
                {listItems}
            </ul>
        );       
    }
};

export default TodoItems;