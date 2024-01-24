
import { DESCREMENT, INCREMENT, RESET, SET } from "./actionTypes";
import initialState from "./initialState";


// create counter reducer 
const counterReducer = (state = initialState, {type, payload }) => {

   switch (type) {
    case INCREMENT:
       return state + 1;

    case DESCREMENT:
       return state - 1;

    case RESET:
       return 0;

    case SET:
       return 1200;
  
   
    default:
      return state;
   }
}


// export default 
export default counterReducer;











