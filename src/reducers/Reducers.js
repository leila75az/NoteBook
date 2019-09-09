import { combineReducers } from "redux";
import { ADD_NEW_NOTE, DELETE_NOTE, EDIT_NOTE } from '../constants';


const initialState = {
    notes: [],
};

function noteState( state = initialState, action ) {
   switch (action.type) {
     case ADD_NEW_NOTE:
       const newObject = Object.assign({}, {content: action.payload , id: state.notes.length });
       const updatedNotes= state.notes;
       updatedNotes.push(newObject);
       console.log(updatedNotes);
       return {
         ...state,
         notes: updatedNotes,
       }
     case EDIT_NOTE:
       // get elemenent by id and change it
       return {
         ...state
       }
     case DELETE_NOTE:
       //get element by id pop it from notes and update state
       return {
         ...state
       }
     default: return state;
   }
}

// I have a problem with combineReducer so I return reducer directly!
export const noteApp = noteState;