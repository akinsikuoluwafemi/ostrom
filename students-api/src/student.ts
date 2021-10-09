export interface Student {
  id: string | number | null;
  firstName: string;
  lastName: string;
  courseName: string;
  numberOfHrs: string;
  price: string;
  studentDob: any;
}

export const students: Student[] = [
  {
    id: 1,
    firstName: 'Jacob',
    lastName: 'Simpson',
    courseName: 'Javascript Fundamentals',
    numberOfHrs: '40',
    price: '500',
    studentDob: '1990/05/05'
  },
  {
    id: 2,
    firstName: 'Tyler',
    lastName: 'Kyle',
    courseName: 'Intro to Kotlin',
    numberOfHrs: '24',
    price: '259',
    studentDob: '1994/09/05'
  },
  {
    id: 3,
    firstName: 'Thomas',
    lastName: 'Pajero',
    courseName: 'Erlang Basics',
    numberOfHrs: '60',
    price: '100',
    studentDob: '2000/01/01'
  }

]