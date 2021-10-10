import React, { useState } from 'react';
import StudentsForm from './StudentsForm';
import { useActions } from '../hooks/use-actions';

import './AddStudents.scss';



export default function AddStudents() {
  
  const {createStudentAsync} = useActions()

//   const randomId = (): string => {
//   return Math.random().toString(36).substr(2, 5);
// }

  // courseData states
  const [courseData, setCourseData] = useState({id: 1, firstName: '', lastName: '', courseName: '', numberOfHrs: '', price: '' });
  const [studentDob, setStudentDob] = useState(new Date().toLocaleDateString().split('/').reverse().join('/'));
  
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

  
  const handleChange = (event: { target: { value: string; name: string; }; }) => {
    const { value, name } = event.target;

    setCourseData({ ...courseData, [name]: value })
  }

  	function handleDateChange(date: Date, dateString:  any) {
      // console.log(moment(dateString));
      // console.log(dateString?.toString().replaceAll('-','/'));
      setStudentDob(dateString);
	}



  const { firstName, lastName, courseName,  numberOfHrs, price} = courseData;


  const handleSubmit = () => {
    if (firstName === "" || lastName === "" || courseName === "" || numberOfHrs === "" || price === "") {
      alert('inputs field must not be empty');
    }
    else {
      // closing the modal and creating the students
      setIsModalVisible(false);
      createStudentAsync({ ...courseData, studentDob })
      // setting the field to an empty state after submitting
      setCourseData({id: 1 , firstName: '', lastName: '', courseName: '', numberOfHrs: '', price: '' })
      // setStudentDob(new Date())

    }
    
  }

  
  return (
    <StudentsForm
      action="add"
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
