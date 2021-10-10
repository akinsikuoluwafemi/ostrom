import React from 'react';
import { useTypedSelector} from '../hooks/use-typed-selector';
import { Student } from '../state/student';
import StudentItem from './StudentItem';
import '../pages/Home.scss';



interface StudentListProps {
  students: Student[]
}


const Studentslist: React.FC<StudentListProps> = ({students}) => {


  const renderedStudents = students.map(student => <StudentItem key={student.id} student={student}/>)


  return (
    <tbody>
      {renderedStudents}        
    </tbody>
  )
}


export default Studentslist;