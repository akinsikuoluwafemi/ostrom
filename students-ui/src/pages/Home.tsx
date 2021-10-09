import React from 'react';
import AddStudents from '../components/AddStudents';
import Studentslist from '../components/Studentslist';
import './Home.scss';




export default function Home() {
  return (
    <div className=" container my-5">

      <div className="mb-4">
          <AddStudents/>

      </div>

      <table className=" student-table  shadow-sm  table  bg-light ">
        
				<thead>
					<tr className="student-table-row">
						<th scope="col">FIRST NAME</th>
						<th scope="col">LAST NAME</th>
						<th scope="col">DATE OF BIRTH</th>
						<th scope="col">COURSE</th>
            <th scope="col">HOURS</th>
						<th scope="col">PRICE</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				
        <Studentslist/>
       
			</table>
    </div>
    
  );

}
