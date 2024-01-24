
const initialState = "red";


// create background reducer 
const backgroundReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case "":
         return ;
      
    
      default:
        return state;
    }
}
// export 
export default backgroundReducer;













