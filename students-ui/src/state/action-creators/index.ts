import { ActionType } from '../action-types';
import axios from 'axios';
import {Dispatch} from 'redux';
import {  
  CreateStudentAction,
  CreateStudentSuccessAction,
  CreateStudentErrorAction ,
  UpdateStudentAction,
  UpdateStudentSuccessAction,
  UpdateStudentErrorAction,
  FecthStudentsAction,
  FetchStudentsSuccessAction,
  FetchStudentsErrorAction,
  DeleteStudentAction,
  DeleteStudentErrorAction,
  DeleteStudentSuccessAction

} from '../actions';

import { Student } from '../student';


/**
 *  Fetching students from API
 */
 const fetchStudents = ():FecthStudentsAction => {
  return {
    type: ActionType.FETCH_STUDENTS
  }
}

const fetchStudentsError = (error: string): FetchStudentsErrorAction => {
  return {
    type: ActionType.FETCH_STUDENTS_ERROR,
    payload: error
  }
}

const fetchStudentSuccess = (data: Student[]):FetchStudentsSuccessAction => {
  return {
     type: ActionType.FETCH_STUDENTS_SUCCESS,
      payload: data
  }
}

export const fetchStudentAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStudents());

    try {
      const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/items`)

      dispatch(fetchStudentSuccess(data))

    }catch (err: any){
      dispatch(fetchStudentsError(err.message))
    }
  }
}

/**
 *  Creating students
 */
 const createStudent = (): CreateStudentAction => {
   return {
     type: ActionType.CREATE_STUDENT
   }
 }

const createStudentError = (error: string): CreateStudentErrorAction => {
  return {
    type: ActionType.CREATE_STUDENT_ERROR,
    payload: error
  }
}

const createStudentSuccess = (data: Student): CreateStudentSuccessAction => {
  return {
    type: ActionType.CREATE_STUDENT_SUCCESS,
    payload: data
  }
}



export const createStudentAsync = (student: Student) => {
  return async (dispatch: Dispatch) => {
    dispatch(createStudent())

  try {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/items`, student)

    dispatch(createStudentSuccess(data));

  }catch(err: any){
    dispatch(createStudentError(err.message));
  }

  }
}


/**
 *  Updating students
 */
 const updateStudent = (): UpdateStudentAction => {
   return {
     type: ActionType.UPDATE_STUDENT
   }
 }

const updateStudentError = (error: string): UpdateStudentErrorAction => {
  return {
    type: ActionType.UPDATE_STUDENT_ERROR,
    payload: error
  }
}
const updateStudentSuccess = (data: Student): UpdateStudentSuccessAction => {
  return {
    type: ActionType.UPDATE_STUDENT_SUCCESS,
    payload: data
  }
}

export const updateStudentAsync = (student: Student) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateStudent())
    try {
    const {data} = await axios.put(`${process.env.REACT_APP_BASE_URL}/items/${student.id}`, student)

    dispatch(updateStudentSuccess(data))

    }catch(err: any){
      dispatch(updateStudentError(err.message));
    }
  }
}


/**
 *  Deleting students
 */

const deleteStudent = ():DeleteStudentAction => {
  return {
    type: ActionType.DELETE_STUDENT
  }
}

const deleteStudentError = (error: string): DeleteStudentErrorAction => {
  return {
    type: ActionType.DELETE_STUDENT_ERROR,
    payload: error
  }
}

const deleteStudentSuccess = (id: number): DeleteStudentSuccessAction => {
  return {
    type: ActionType.DELETE_STUDENT_SUCCESS,
    payload: id
  }
}

export const deleteStudentAsync = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteStudent())
    try {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/items/${id}`)
        dispatch(deleteStudentSuccess(id));
    }catch(err: any){
      dispatch(deleteStudentError(err.message))
    }
  }
}