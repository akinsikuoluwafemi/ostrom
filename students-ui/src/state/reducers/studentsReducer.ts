import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Student } from '../student';




export interface StudentsState {
  loading: boolean;
  error: string | null;
  data: Student[];
  
}

const initialState: StudentsState = {
  loading: false,
  error: null,
  data: []
}



const reducer = (state: StudentsState =initialState, action: Action ): StudentsState => {
  
  switch (action.type) {
    // case ActionType.FETCH_STUDENTS:
      // return { ...state, loading: true, error: null, data: []}
    
    // case ActionType.FETCH_STUDENTS_SUCCESS:
      // return {...state, loading: false, error: null, data: action.payload}

    // case ActionType.FETCH_STUDENTS_ERROR:
      // return { ...state, loading: false, error: action.payload, data: [] }
    
    case ActionType.CREATE_STUDENT:

     
      return {
        ...state,
        data: [...state.data, action.payload]
      }

    case ActionType.EDIT_STUDENT:
      return {
        ...state,
        data: state.data.map(item => item.id === action.payload.id ? action.payload : item)

      }
    
    case ActionType.DELETE_STUDENT:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload)
      }

    default:
      return state;
  }
}



export default reducer;