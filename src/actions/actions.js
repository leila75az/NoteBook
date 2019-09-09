import { ADD_NEW_NOTE, DELETE_NOTE, EDIT_NOTE } from '../constants';

export const AddNewNote = (content) => ({
  type: ADD_NEW_NOTE,
  payload: content,
});

export const editNote = (content, id) => ({
  type: EDIT_NOTE,
  payload: {
    content: content,
    id: id,
  }
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  id: id,
});

