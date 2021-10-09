import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import { ActionType } from "./action-types";
import reducers from "./reducers";

export const store = createStore(
    reducers,
    {},
  applyMiddleware(thunk),

)



store.dispatch({
  type: ActionType.CREATE_STUDENT,
  payload: {
        id: '123hgf',
        firstName: 'femi',
        lastName: 'Akinsiku',
        courseName: 'Java',
        numberOfHrs: '100',
        price: '20000',
        studentDob: '2021/10/10'
      }
})

store.dispatch({
  type: ActionType.CREATE_STUDENT,
  payload: {
        id: '1234',
        firstName: 'Tope',
        lastName: 'Awolusi',
        courseName: 'Javascript',
        numberOfHrs: '3000',
        price: '90000',
        studentDob: '2021/10/10'
    }
})

