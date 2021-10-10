
export interface StudentItem {
  id: string | number;
  firstName: string;
  lastName: string;
  courseName: string;
  numberOfHrs: string;
  price: string;
  studentDob: any;
}

export interface Item extends StudentItem {
  id: number | string;
}

