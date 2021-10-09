import { Student, students } from './student';

export const getAllStudents = async (): Promise<Student[]> => {
  return students;
}

export const createStudents = async (student: Student): Promise<void> => {
   students.push(student)
}

export const updateStudents = async (student: Student): Promise<void> => {
  let index = students.findIndex(s => s.id === student['id']);
  // if its the index, make an update
  if (index > 0 || index === 0) {
    students[index]['firstName'] = student['firstName'];
    students[index]['lastName'] = student['lastName'];
    students[index]['courseName'] = student['courseName'];
    students[index]['numberOfHrs'] = student['numberOfHrs'];
    students[index]['price'] = student['price'];
    students[index]['studentDob'] = student['studentDob'];
  }
}

export const deleteStudents = async (id: string | number): Promise<void> => {
  console.log(`in delete student index is ${JSON.stringify(id)}`)
  let index = students.findIndex(s => s.id === id);
  console.log(`in delete student index is ${index}`)
  if (index > 0 || index === 0)
    students.splice(index, 1)

}