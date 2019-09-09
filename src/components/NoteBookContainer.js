import React, { Component } from 'react';
import Header from './header/Header';
import { connect } from 'react-redux';
import MyModal from './Modal/MyModal';
import NoteListContainer from './noteList/NoteListContainer';
import './main.css';
import { AddNewNote } from '../actions/actions';


class NoteBookContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newNoteModalOpen: false,
      note: '',
    };
  }

  handleAddNote = () => {
    this.props.addNewNote(this.state.note);
    this.setState({newNoteModalOpen: false, note: '' });
  };


  render() {
    return(
      <div>
        <Header
          handleOpenNewNoteDialog={() => this.setState({ newNoteModalOpen: true })}
        />
        <NoteListContainer />
        <div
          style={this.state.newNoteModalOpen? { display: 'flex' }: { display: 'none' }}
          className={'modal'}
        >
          <MyModal
            title={'New Note'}
            handleSubmit={this.handleAddNote}
            components={<input className={'input'} type="text" onChange={(event) => this.setState({ note: event.target.value})}/>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addNewNote: (content) => dispatch(AddNewNote(content)),
});

export default connect(mapStateToProps , mapDispatchToProps)(NoteBookContainer);
