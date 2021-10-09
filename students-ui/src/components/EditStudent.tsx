import React, { useState } from 'react';
import StudentsForm from './StudentsForm';
import { Student } from '../state';
import { useActions } from '../hooks/use-actions';


interface EditStudentProps {
  student: Student;
}

const EditStudent: React.FC<EditStudentProps> = ({student}) => {

  const { editStudent} = useActions()



  // courseData states
  const [courseData, setCourseData] = useState({id: student.id, firstName: student.firstName, lastName: student.lastName, courseName: student.courseName, numberOfHrs: student.numberOfHrs, price: student.price });
  const [studentDob, setStudentDob] = useState(student.studentDob);


  const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  	function handleDateChange(date: Date, dateString:  any) {
      // console.log(moment(dateString));
      // console.log(dateString?.toString().replaceAll('-','/'));
      setStudentDob(dateString);
	}

  const handleChange = (event: { target: { value: string; name: string; }; }) => {
    const { value, name } = event.target;

    setCourseData({ ...courseData, [name]: value })
  }

  const {firstName, lastName, courseName, numberOfHrs, price} = courseData

  const handleSubmit = () => {
    if (firstName === "" || lastName === "" || courseName === "" || numberOfHrs === "" || price === "") {
      alert('inputs field must not be empty');
    }
    else {
      // closing the modal and creating the students
      setIsModalVisible(false);
      // console.log({ ...courseData, studentDob });
      editStudent({ ...courseData, studentDob })

    }
    
  }
  
  return (
    <StudentsForm
      action="edit"
      showModal={showModal}
      isModalVisible={isModalVisible}
      handleCancel={handleCancel}
      handleOk={handleOk}
      handleDateChange={handleDateChange}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      dob={studentDob}
      data={courseData}
    />
  )
}


export default EditStudent;