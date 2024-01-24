import { ADD_STUDENT_FULFILLED, ADD_STUDENT_PENDING, ADD_STUDENT_REJECTED, DELETE_STUDENT_FULFILLED, DELETE_STUDENT_PENDING, DELETE_STUDENT_REJECTED, GET_STUDENT_FULFILLED, GET_STUDENT_PENDING, GET_STUDENT_REJECTED, UPDATE_STUDENT_FULFILLED, UPDATE_STUDENT_PENDING, UPDATE_STUDENT_REJECTED } from "./actionTypes";
import { initialState } from "./initialState";

// create student reducer 
const studentReducer = (state = initialState, { type, payload}) => {
   switch (type) {
      // get all students types 
    case GET_STUDENT_PENDING:
       return {
         ...state,
         loading : true,
       };

    case GET_STUDENT_FULFILLED:
       return {
         ...state,
         loading : false,
         message : "Get All Students Successfull",
         students : payload,
       };

       case GET_STUDENT_REJECTED:
         return {
           ...state,
           loading : false,
           error : "Student Data Failed",
         };  

       // deleted all types  
      case DELETE_STUDENT_PENDING:
            return {
              ...state,
              loading : true,
            };   

      case DELETE_STUDENT_FULFILLED:
            return {
              ...state,
              loading : false,
              students : state.students.filter(data => data.id !== payload),
              message : "Student Deleted Succesfull"
            };   

      case DELETE_STUDENT_REJECTED:
            return {
              ...state,
              loading : false,
              message : "Student Delete Failed",
            };   
      
      // Add student all  types 
      case ADD_STUDENT_PENDING:
         return {
           ...state,
           loading : true,
         };        
  
      case ADD_STUDENT_FULFILLED:
         return {
           ...state,
           loading : false,
           message : "Student Created Successfull",
           students : [...state.students, payload],
         };        
  
      case ADD_STUDENT_REJECTED:
            return {
              ...state,
              loading : false,
              message : "Student created Failed",
            }; 

       case UPDATE_STUDENT_PENDING:
             return {
                 ...state,
                 loading : true,
               };       

       case UPDATE_STUDENT_FULFILLED:
            return {
                 ...state,
                 loading : false,
                 message : "Student updated SuccessFull",
                 students : state.students.map((item) => {
                  if (item.id === payload.id) {
                      return payload;
                  }else{
                     return item;
                  }
                 })
               };    

       case UPDATE_STUDENT_REJECTED:
            return {
                 ...state,
                 loading : false,
                 message : "Student updated failed",
               };        
   
    default:
      return state;
   }
}


// export default
export default studentReducer;











