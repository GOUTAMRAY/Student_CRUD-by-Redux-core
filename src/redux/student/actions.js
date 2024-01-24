import axios from "axios"
import { ADD_STUDENT_FULFILLED, ADD_STUDENT_PENDING, ADD_STUDENT_REJECTED, DELETE_STUDENT_FULFILLED, DELETE_STUDENT_PENDING, DELETE_STUDENT_REJECTED, GET_STUDENT_FULFILLED, GET_STUDENT_PENDING, GET_STUDENT_REJECTED, UPDATE_STUDENT_FULFILLED, UPDATE_STUDENT_PENDING, UPDATE_STUDENT_REJECTED } from "./actionTypes";

// get all students data 
export const getAllStudentData = () => async(dispatch) => {
     try {
      dispatch({ type : GET_STUDENT_PENDING});
      const response = await axios.get("http://localhost:5000/students");
      dispatch({ type: GET_STUDENT_FULFILLED, payload : response.data});
     } catch (error) {
      dispatch({ type: GET_STUDENT_REJECTED});
     }
}; 

// delete single students data 
export const deleteSingleStudent = (id) => async(dispatch) => {
     try {
      dispatch({ type : DELETE_STUDENT_PENDING});
       await axios.delete(`http://localhost:5000/students/${id}`);
      dispatch({ type: DELETE_STUDENT_FULFILLED, payload : id});
     } catch (error) {
      dispatch({ type: DELETE_STUDENT_REJECTED});
     }
}; 

// delete single students data 
export const AddNewStudent = (data) => async(dispatch) => {
     try {
      dispatch({ type : ADD_STUDENT_PENDING});
      await axios.post(`http://localhost:5000/students`, data);
      dispatch({ type: ADD_STUDENT_FULFILLED, payload : data});
     } catch (error) {
      dispatch({ type: ADD_STUDENT_REJECTED});
     }
}; 

// delete single students data 
export const UpdateStudent = ( data) => async(dispatch) => {
     try {
      dispatch({ type : UPDATE_STUDENT_PENDING});
      await axios.patch(`http://localhost:5000/students/${data.id}`, data);
      dispatch({ type: UPDATE_STUDENT_FULFILLED, payload : data   });
     } catch (error) {
      dispatch({ type: UPDATE_STUDENT_REJECTED});
     }
}; 














