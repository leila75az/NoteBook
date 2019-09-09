import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import './noteList.css';

class NoteListContainer extends Component {

  render(){
    return(
      <div className={'noteList'}>
        {this.props.noteList && this.props.noteList.map ( note => (
          <Note
            handleEdit={() => {}}
            handleDelete={() => {}}
            note={note}
          />
        ))}
      </div>
    );
  }
}

NoteListContainer.propTypes = {};
NoteListContainer.defaultProps = {};

const mapStateToProps = (state) => ({
  noteList: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps , mapDispatchToProps)(NoteListContainer);
