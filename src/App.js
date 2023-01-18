import React from 'react';
import NoteList from './Components/NoteList';
import {nanoid} from  'nanoid';
import SearchBar from './Components/SearchBar';

class App extends React.Component {
  constructor(props){
    super(props);

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {notes: [{
      id: nanoid(),
      content: "This is my note",
      date: '12/01/2000'
    },
    {id: nanoid(),
    content: "Second note",
    date: '12/03/2020'},
    {id: nanoid(),
    content: "Third note",
    date: '02/23/2021'}
    ]}
  }

  addNote(text){
    const newNotes = this.state.notes;
    const date = new Date();
    newNotes.push({id: nanoid(), content: text, date: date.toLocaleDateString()});
    this.setState({notes: newNotes});
  }

  deleteNote(noteid){
    const newNotes = this.state.notes.filter(i => i.id !== noteid);
    this.setState({notes: newNotes});
  }

  searchNote(){

  }

  render(){
    return (
      <div>
        <div className="title">
          Me<span>m</span>o
        </div>
        <div className='search-bar'>
          <SearchBar />
        </div>
        <div className='container'>
          <NoteList notes={this.state.notes}
                    onSave={this.addNote}
                    onDelete={this.deleteNote}/>
        </div>
      </div>
    )
  }
}

export default App;