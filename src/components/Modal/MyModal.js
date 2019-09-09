import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './myModal.css';

class MyModal extends Component{
  render(){
    return(
      <div className={'root'}>
        <span className={'title'}>{this.props.title}</span>
        <div className={'content'}>
          {this.props.components}
        </div>
        <button
          className={'modalButton'}
          onClick={this.props.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}
MyModal.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
MyModal.defaultProps = {};

export default MyModal;