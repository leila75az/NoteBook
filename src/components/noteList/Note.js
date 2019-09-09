import React, { Component } from 'react';
import './noteList.css';
import PropTypes from 'prop-types';

class Note extends Component {
  render(){
    return(
      <div className={'note'}>
        <span className={'noteContent'}>
            { this.props.note.content }
        </span>
        <div className={'buttonContainer'}>
          <button
            onClick={this.props.handleEdit}
            className={'button'}
          >
            Edit
          </button>
          <button
            onClick={this.props.handleDelete}
            className={'button'}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  note: PropTypes.objectOf({
    content: PropTypes.string,
  }).isRequired,
};
Note.defaultProps = {};

export default Note;