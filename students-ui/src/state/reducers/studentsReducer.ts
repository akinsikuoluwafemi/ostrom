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
    case ActionType.FETCH_STUDENTS:
      return { ...state, loading: true}
    
    case ActionType.FETCH_STUDENTS_SUCCESS:
      return {...state, loading: false, data: action.payload}

    case ActionType.FETCH_STUDENTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    
    case ActionType.CREATE_STUDENT:
      return { 
        ...state, 
        loading: true, 
      }

    case ActionType.CREATE_STUDENT_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload]}
    
    case ActionType.CREATE_STUDENT_ERROR:
      return { ...state, loading: false, error: action.payload }
    

    case ActionType.UPDATE_STUDENT:
      return { 
        ...state, 
        loading: true, 
      }
    case ActionType.UPDATE_STUDENT_SUCCESS:
      return { ...state, loading: false, data: state.data.map(item => item.id === action.payload.id ? action.payload : item)}
    
    case ActionType.UPDATE_STUDENT_ERROR:
      return { ...state, loading: false, error: action.payload }


    case ActionType.DELETE_STUDENT:
      return { ...state, loading: true}

    case ActionType.DELETE_STUDENT_SUCCESS:
    return {
      ...state,
     loading: false,
      data: state.data.filter(item => item.id !== action.payload)
      }

    case ActionType.DELETE_STUDENT_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state;
  }
}



export default reducer;