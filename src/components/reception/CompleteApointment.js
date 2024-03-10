import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { setUpdateReception } from '../../redux1/action/Actions';
import ApiStore,{Apiurls} from '../../ApiStore';
const CompleteApointment = () => {
    const dispatch=useDispatch();
    const list = useSelector((state) => state.donePatient.complete_patient);
  console.log(list)
  const userData = useSelector((state) => state.DocLogIn.user_info);
  const {token}=userData;

  const userDelete = async (id)=>{
    
    try{
const response= await ApiStore.DeleApiCall(Apiurls.PATIENT_DELETE+id,token)
        const res= await response.data;
        console.log(response)
      }
          catch(error){
            console.log(error)
          }
       }
  return (<div>
    <h2 className="mt-10 text-center">Appointment List</h2>
    <button className='btn'><Link to={'/pendingAppointment'}> Pending Appointments</Link></button>
    <button className='btn float-right'><Link to={'/completeApointment'}>Completed Appointments </Link></button>
  
  <table className="table mt-20">
    <thead className="list-main-area">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">NUMBER</th>
        <th scope="col">AGE</th>
        <th scope="col">GENDER</th>
        <th scope="col">TIME</th>
       <th scope="col">APPOINTMENT DATE</th>
       <th scope="col">STATUS</th>
       <th scope="col">ACTION</th>
  
  
      </tr>
    </thead>
    {
      list?.map((val)=>{
          return   <tbody>
      <tr>
        <th scope="row">{val.id}</th>
        <td>{val.name}</td>
        <td>{val.phoneNumber}</td>
        <td>{val.age}</td>
        <td>{val.sex}</td>
        <td>{val.time}</td>
        <td>{val.appointmentdate}</td>
        <td>Done</td>
        {/* <td><button className={disble?"btn-success mr-2":"d-none"} onClick={()=>userDone({id1:val.id,name1:val.name,phoneNumber1:val.phoneNumber,appointmentdate1:val.appointmentdate})}>Done</button><button className='btn-dark' onClick={()=>userUndo({id1:val.id,name1:val.name,phoneNumber1:val.phoneNumber,appointmentdate1:val.appointmentdate})}>Undo</button></td> */}
        <td><Link to={`/patientUpdate/${val.id}`} ><button className='btn-primary mr-2' onClick={()=>dispatch(setUpdateReception({updateName:val.name,updatePhoneNumber:val.phoneNumber,updateappointmentdate:val.appointmentdate}))} >Update</button></Link>
        <button className='btn-danger' onClick={()=>userDelete(val.id)}>Delete</button>
        </td>
  
   </tr>
    </tbody>})}
  </table></div>
    )
  }

export default CompleteApointment