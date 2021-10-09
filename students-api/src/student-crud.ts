import * as StudentService from './student-crud.service';
import { Student } from './student';


export const getStudentList = async (req: any, res: any) => {
  const studentList: Student[] = await StudentService.getAllStudents();
  console.log(`in get ${JSON.stringify(studentList)}`)

  try {
    res.status(200).send(studentList);
  } catch (e: any) {
    res.status(404).send(e.message);
  }

}

export const createStudent = async (req: any, res: any) => {
  const student: Student = req.body;
  await StudentService.createStudents(student);

  try {
    res.status(200).send({
      message: "Successfully added",
      IsSuccess: true,
      result: ""
    })
  } catch (e: any) {
    res.status(400).send(e.message)
  }

};

export const updateStudent = async (req: any, res: any) => {
  const student: Student = req.body;
  await StudentService.updateStudents(student);
  try {
    res.status(200).send({
      message: "Successfully updated",
      IsSuccess: true,
      result: ""
    })
  } catch (e: any) {
    res.status(404).send(e.message);
  }
}

export const deleteStudent = async (req: any, res: any) => {
  const studentID: number | string = req.body['id'];
  await StudentService.deleteStudents(studentID);

  try {
    res.status(200).send({
      message: "Successfully deleted",
      IsSuccess: true,
      result: ""
    })
  } catch (e: any) {
    res.status(404).send(e.message);
  }
}