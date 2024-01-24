import { useEffect, useState } from "react";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { AddNewStudent, UpdateStudent, deleteSingleStudent, getAllStudentData } from "../redux/student/actions";



const Student = () => {       
   const dispatch = useDispatch();
   const { students, loading } = useSelector((state) => state.student)

  const [input, setInput ] = useState({
    name : "",
    email : "",
    roll : "",
    photo : "",
  });

 const [ editMode, setEditMode ] = useState(false)


  // handle input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };

    // handleEditStudent
    const handleEditStudent = (item) => {
      setEditMode(true);
      setInput(item);
   };

   
  // handleFormSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch(UpdateStudent(input));
      setEditMode(false);

    }else{
      dispatch(AddNewStudent(input));
    }
    setInput({
      name : "",
      email : "",
      roll : "",
      photo : "",
    })
  };


   useEffect(() => {
     dispatch(getAllStudentData());
   }, []);

 // handleStudentDelete
 const handleStudentDelete = (id) => {
   dispatch(deleteSingleStudent(id));
 };


  return (
    <>
       <div className="container my-5">
           <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mb-2">
                  <div className="card-body">
                    <form onSubmit={handleFormSubmit}>
                      <div className="my-3">
                        <input type="text" placeholder="Name" name="name" value={input.name} onChange={handleInputChange} />
                      </div>
                      <div className="my-3">
                        <input type="text" placeholder="Roll" name="roll" value={input.roll} onChange={handleInputChange}/>
                      </div>
                      <div className="my-3">
                        <input type="text" placeholder="Email" name="email" value={input.email} onChange={handleInputChange}/>
                      </div>
                      <div className="my-3">
                        <input type="text"  placeholder="Photo" name="photo" value={input.photo} onChange={handleInputChange}/>
                      </div>
                      <div className="my-3">
                         <button type="submit" className="btn btn-primary mb-2 "> { editMode ? "Update" : "Add"} </button>
                      </div>
                    </form>
                  </div>
                </div>

              <div className="card">
                <div className="card-header">
                    <h2 className="text-center"> All Student Data </h2>
                </div>
                <div className="card-body">
                  {loading && "Loading......."}
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr >
                        <th> # </th>
                        <th> Photo </th>
                        <th> Name</th>
                        <th> Roll</th>
                        <th> Email</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students && students.length > 0 ? students.map((item, index) => {
                        return <tr className="align-middle" key={index}>
                        <td> {index + 1 } </td>
                        <td> 
                          <img style={{width: "50px", height: "50px", borderRadius: "50%"}} src={item.photo} alt="" />
                        </td>
                        <td> {item.name}</td>
                        <td> {item.roll}</td>
                        <td> {item.email}</td>
                        <td> 
                          <button className="btn btn-sm btn-primary"> <FaRegEye/> </button>
                          <button className="btn btn-sm btn-info mx-2" onClick={() => handleEditStudent(item)}> <FiEdit /> </button>
                          <button className="btn btn-sm btn-danger" onClick={() => handleStudentDelete(item.id)}> <FaTrashAlt /> </button>
                        </td>
                      </tr>
                      })  : "No Student Found"}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
           </div>
       </div>


     
    </>
  )
}

export default Student;

















