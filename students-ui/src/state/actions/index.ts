import { ActionType } from '../action-types';
import { Student } from '../student';


export interface FecthStudentsAction {
  type: ActionType.FETCH_STUDENTS
}

export interface FetchStudentsSuccessAction {
  type: ActionType.FETCH_STUDENTS_SUCCESS,
  payload: string[];
}

export interface FetchStudentsErrorAction {
  type: ActionType.FETCH_STUDENTS_ERROR,
  payload: string;
}

export interface ListStudentsAction {
  type: ActionType.LIST_STUDENTS
}

export interface EditStudentAction {
  type: ActionType.EDIT_STUDENT,
  payload: Student;

}

export interface DeleteStudentAction {
  type: ActionType.DELETE_STUDENT,
  payload: string;
  
}

export interface CreateStudentAction {
  type: ActionType.CREATE_STUDENT,
  payload: Student;
}

export type Action =
  | FecthStudentsAction
  | FetchStudentsSuccessAction
  | FetchStudentsErrorAction
  | ListStudentsAction
  | EditStudentAction
  | DeleteStudentAction
  | CreateStudentAction
