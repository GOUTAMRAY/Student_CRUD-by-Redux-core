import { useDispatch, useSelector } from "react-redux";
import { descrementCount, incrementCount, resetCount, setCount } from "../redux/counter/actions";


const Counter = () => {
   const { counter } = useSelector((state) => state)
  const dispatch = useDispatch()


  return (
    <>
      <h1> { counter} </h1>
      <hr />
      <button onClick={() =>dispatch(descrementCount()) } className="btn btn-primary"> -- </button>  &nbsp;
      <button onClick={() =>dispatch(incrementCount()) } className="btn btn-primary"> ++ </button> &nbsp;
      <button onClick={() =>dispatch(resetCount()) } className="btn btn-primary"> reset </button> &nbsp;
      <button onClick={() =>dispatch(setCount()) } className="btn btn-primary"> set </button> 
    </>
  )
}

export default Counter;












