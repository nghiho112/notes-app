import React from 'react';
import {FiSave} from 'react-icons/fi';

class AddNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {noteText: ''};
        this.charLimit = 200;
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event){
        if ((this.charLimit-event.target.value.length) >= 0){
            this.setState({noteText: event.target.value});
        }
    }

    handleSave(){
        this.props.onSave(this.state.noteText);
        this.setState({noteText: ''});
    }

    render (){
        return (
            <div className="note add">
                <textarea 
                    value={this.state.noteText}
                    rows='8'
                    cols='10'
                    placeholder='Add your note here...'
                    onChange={this.handleChange}></textarea>
                <div className='note-footer'>
                    <small>{this.charLimit - this.state.noteText.length} Remaining</small>
                    <FiSave className="save icon"
                            onClick={this.handleSave} />
                </div>
            </div>
        )
    }
}
export default AddNote;