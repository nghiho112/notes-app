import React from "react";
import Note from './Note';
import AddNote from './AddNote';

class NoteList extends React.Component {
    render(){
        return (
            <div className="note-list">
                {   
                    this.props.notes.map((iterator) => (
                        <Note key={this.props.notes.indexOf(iterator)}
                              content={iterator.content}
                              id={iterator.id}
                              date={iterator.date}
                              onDelete={this.props.onDelete}/>
                    ))
                }
                <AddNote onSave={this.props.onSave}/>
            </div>
        )
    }
}

export default NoteList;