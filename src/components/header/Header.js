import React, { Component } from 'react';
import './header.css';
import PropTypes from 'prop-types';

class header extends Component{
  render() {
    return(
      <div className={'main'}>
        <span className={'headerTitle'}>NoteBook App</span>
        <button
          className={'addButton'}
          onClick={this.props.handleOpenNewNoteDialog}
        >
          + New Note
        </button>
      </div>
    );
  }
}
Headers.propTypes = {
  handleOpenNewNoteDialog: PropTypes.func.isRequired,
};
Headers.defaultProps = {};

export default header;
