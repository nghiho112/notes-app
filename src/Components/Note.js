import React from "react";
import { FiTrash2 } from "react-icons/fi";

class Note extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.onDelete(this.props.id);
    }

    render(){
        return (
            <div className="note">
                <span>{this.props.content}</span>
                <div className="note-footer">
                    <small>{this.props.date}</small>
                    <FiTrash2 className="trash icon"
                    onClick={this.handleDelete}/>
                </div>
            </div>
        )
    }
}

export default Note;