import React from 'react';
import { Student } from '../state/student';
import { useActions } from '../hooks/use-actions';
import EditStudent from './EditStudent';
import '../pages/Home.scss';


interface StudentItemProps {
  student: Student
}




const StudentItem: React.FC<StudentItemProps> = ({student}) => {

  const {deleteStudent} = useActions()


    return (
          <tr className="student-table-row">
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.studentDob}</td>
        
              <td>{student.courseName}</td>
              <td>{ student.numberOfHrs}</td>
              <td>{ student.price} €</td>
              <td className="actions"><EditStudent student={student}/></td>
              <td onClick={() => deleteStudent(student.id)} className="actions">Delete</td>
        </tr>
        
  )
}

export default StudentItem