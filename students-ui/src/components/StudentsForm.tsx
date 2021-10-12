import React, {FC} from 'react';
import { Modal, Button, DatePicker } from 'antd';




import './StudentsForm.scss';
import moment from 'moment';


interface CourseDataProps {
  id: number;
  firstName: string;
  lastName: string;
  courseName: string;
  numberOfHrs: string;
  price: string;

}

export interface StudentsFormProps {
  action: "add" | "edit";
  data: CourseDataProps;
  showModal: () => void;
  handleOk: () => void;
  dob: string;
  handleCancel: () => void;
  isModalVisible: boolean;
  handleSubmit: () => void;
  handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
  handleDateChange: (date: any, dateString: any)=> void;
}

const StudentsForm: FC<StudentsFormProps> = ({  dob, action, showModal, isModalVisible, handleOk, handleCancel, handleChange, handleSubmit, handleDateChange,  data }) => {
  	
  const dateFormat = "YYYY/MM/DD";

  const {  firstName, lastName, courseName, numberOfHrs, price} = data;
  
  return (
    <>
      
      {action === 'add' ? (
        <Button type="primary" className="action-btn" onClick={showModal}>
        { action === 'add'? 'Add Student' : 'Edit Student'}
      </Button>
      ): (
         <p className="action-text" onClick={showModal}>Edit</p> 
      )}

      

      <Modal width="20"  title={action === 'add' ? 'Add Students' : 'Edit Students'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        footer={[<Button key="submit" type="primary"  onClick={handleSubmit} className="action-btn">
              Save
            </Button>]}>
        <form onSubmit={handleSubmit}>
          <table className="table bg-none ">
            <thead>
              <tr className="student-form-header ">
                <th className="font-normal"  scope="col">FIRST NAME</th>
                <th className="font-normal" scope="col">LAST NAME</th>
                <th className="font-normal" scope="col">DATE OF BIRTH</th>
                <th className="font-normal" scope="col">COURSE</th>
                <th className="font-normal" scope="col">HOURS</th>
                <th className="font-normal" scope="col">PRICE</th>
              </tr>
            </thead>
           
            <tbody>
              <tr className="student-table-row" >
                  <td>
                    <input type="text" className="form-control" name="firstName" onChange={handleChange} value={firstName}  aria-describedby="firstName" placeholder="first-name"/>
                </td>
                  <td>
                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleChange} aria-describedby="lastName" placeholder="last-name"/>
                </td>
                  <td>

                    <DatePicker format={dateFormat} suffixIcon={null} allowClear={false}  className="form-control"  value={moment(dob)} style={{ display: 'flex' }} onChange={handleDateChange} />
                </td>
                  <td>
                    <input type="text" className="form-control" name="courseName" value={courseName} onChange={handleChange} aria-describedby="courseName" placeholder="course-name"/>
                </td>
                  <td>
                    <input type="text" className="form-control" name="numberOfHrs" value={numberOfHrs} onChange={handleChange} aria-describedby="numberOfHrs" placeholder="hours"/>
                    
                </td>
                  <td>
                    <input type="text" className="form-control" name="price" value={price} onChange={handleChange} aria-describedby="price" placeholder="price"/>
                </td>
               
              </tr>
		        </tbody>
          </table>
          
            
        
          </form>
      </Modal>


    </>
  )
}


export default StudentsForm;