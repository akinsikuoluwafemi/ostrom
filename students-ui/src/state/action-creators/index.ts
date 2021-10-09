import { ActionType } from '../action-types';
import {  CreateStudentAction, DeleteStudentAction, EditStudentAction, ListStudentsAction } from '../actions';
import { Student } from '../student';


export const listStudents = (): ListStudentsAction => {
  return {
    type: ActionType.LIST_STUDENTS
  }
}

export const editStudent = (student: Student): EditStudentAction => {
  return {
    type: ActionType.EDIT_STUDENT,
    payload: student
  }
}

export const deleteStudent = (id: string): DeleteStudentAction => {
  return {
    type: ActionType.DELETE_STUDENT,
    payload: id
  }
}

export const createStudent = (student: Student): CreateStudentAction => {
  return {
    type: ActionType.CREATE_STUDENT,
    payload: student
  }
}