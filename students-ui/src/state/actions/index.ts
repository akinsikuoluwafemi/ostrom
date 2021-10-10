import { ActionType } from '../action-types';
import { Student } from '../student';


export interface FecthStudentsAction {
  type: ActionType.FETCH_STUDENTS
}

export interface FetchStudentsSuccessAction {
  type: ActionType.FETCH_STUDENTS_SUCCESS,
  payload: Student[];
}

export interface FetchStudentsErrorAction {
  type: ActionType.FETCH_STUDENTS_ERROR,
  payload: string;
}

export interface CreateStudentAction {
  type: ActionType.CREATE_STUDENT
}

export interface CreateStudentSuccessAction {
  type: ActionType.CREATE_STUDENT_SUCCESS,
  payload: Student
}

export interface CreateStudentErrorAction {
  type: ActionType.CREATE_STUDENT_ERROR,
  payload: string;
}

export interface UpdateStudentAction {
  type: ActionType.UPDATE_STUDENT
}

export interface UpdateStudentSuccessAction {
  type: ActionType.UPDATE_STUDENT_SUCCESS,
  payload: Student;
}

export interface UpdateStudentErrorAction {
  type: ActionType.UPDATE_STUDENT_ERROR,
  payload: string;
}

export interface DeleteStudentAction {
  type: ActionType.DELETE_STUDENT
}

export interface DeleteStudentSuccessAction {
  type: ActionType.DELETE_STUDENT_SUCCESS
  payload: number
}

export interface DeleteStudentErrorAction {
  type: ActionType.DELETE_STUDENT_ERROR,
  payload: string;
}




export type Action =
  | FecthStudentsAction
  | FetchStudentsSuccessAction
  | FetchStudentsErrorAction
  | CreateStudentAction
  | CreateStudentSuccessAction
  | CreateStudentErrorAction
  | UpdateStudentAction
  | UpdateStudentSuccessAction
  | UpdateStudentErrorAction
  | DeleteStudentAction
  | DeleteStudentErrorAction
  | DeleteStudentSuccessAction


  
