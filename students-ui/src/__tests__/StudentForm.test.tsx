import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StudentsForm from "../components/StudentsForm";


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

const data: CourseDataProps = {
  id: 1,
  firstName: "",
  lastName: "",
  courseName: "",
  numberOfHrs: "",
  price: ""
}

describe("when the `Add Student` button is pressed", () => {

  it("should call the `showModal` callback", () => {
    const onShowModalMock = jest.fn();

    render(
      <StudentsForm
        action={"add"}
        dob="Test Date"
        isModalVisible={true}
        showModal={onShowModalMock}
        handleOk={() => { }}
        handleSubmit={() => { }}
        handleDateChange={() => { }}
        handleCancel={() => { }}
        handleChange={() => { }}
        data={data}
      
      />
    );

    userEvent.click(screen.getByRole('button', {name: /Add Student/i }));
    expect(onShowModalMock).toBeCalled()

  })

  

})

describe("when the `Edit` text is pressed", () => {
  it("should call the `showModal` callback", () => {
    const onShowModalMock = jest.fn();

    render(
      <StudentsForm
        action={"edit"}
        dob="Test Date"
        isModalVisible={true}
        showModal={onShowModalMock}
        handleOk={() => { }}
        handleSubmit={() => { }}
        handleDateChange={() => { }}
        handleCancel={() => { }}
        handleChange={() => { }}
        data={data}
      
      />
    );

    userEvent.click(screen.getByText('Edit'));
    expect(onShowModalMock).toBeCalled()

  })
})

describe("when the `Save` button is pressed", () => {
  it("should call the `handleSubmit` callback", () => {
    const onHandleSubmitMock = jest.fn();

    render(
      <StudentsForm
        action={"edit"}
        dob="Test Date"
        isModalVisible={true}
        showModal={() => { }}
        handleOk={() => { }}
        handleSubmit={onHandleSubmitMock}
        handleDateChange={() => { }}
        handleCancel={() => { }}
        handleChange={() => { }}
        data={data}
      
      />
    )

    userEvent.click(screen.getByRole("button", {name: 'Save'}));
    expect(onHandleSubmitMock).toBeCalled()

  })
})




  

  
