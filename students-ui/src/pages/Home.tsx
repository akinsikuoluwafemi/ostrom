import React, {useEffect, lazy, Suspense} from 'react';
import AddStudents from '../components/AddStudents';
import {useActions} from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Spin } from 'antd';

import './Home.scss';


const Studentslist = lazy(() => import('../components/Studentslist'));


export default function Home() {
  
	// getting states out of the redux store
	const students = useTypedSelector(({students: { data}}) => {
		return data
  });



	const { fetchStudentAsync } = useActions();

	useEffect(() => {
			fetchStudentAsync()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
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
						
					<Suspense fallback={<div style={{textAlign: 'center', margin: '20px 0'}}> <Spin/></div>}>
							<Studentslist students={students}/>
					</Suspense>
					
					
					</table>
    </div>
    
  );

}
