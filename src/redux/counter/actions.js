import { DESCREMENT, INCREMENT, RESET, SET } from "./actionTypes"



 export const incrementCount = () => {
  return { type : INCREMENT}
}
 
 export const descrementCount = () => {
  return { type : DESCREMENT}
}

 export const resetCount = () => {
  return { type : RESET}
}
 export const setCount = () => {
  return { type : SET}
}













