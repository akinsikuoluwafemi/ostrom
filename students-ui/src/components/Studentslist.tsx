import React from 'react';
import { useTypedSelector} from '../hooks/use-typed-selector';

import StudentItem from './StudentItem';
import '../pages/Home.scss';




const Studentslist: React.FC = () => {
  const students = useTypedSelector(({students: { data}}) => {
    return data
  });


  const renderedStudents = students.map(student => <StudentItem key={student.id} student={student}/>)


  return (
    <tbody>
      {renderedStudents}        
    </tbody>
  )
}


export default Studentslist;