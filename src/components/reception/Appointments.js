import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react';
import ApiStore,{Apiurls} from '../../ApiStore';
import { setClinicList } from '../../redux1/action/Actions';
import { Link } from 'react-router-dom';
import { setUpdateReception } from '../../redux1/action/Actions';
import { setPatientDone } from '../../redux1/action/Actions';
import { setPatientUndo } from '../../redux1/action/Actions';
import { setPatientExist } from '../../redux1/action/Actions';
const Appointments = () => {
  const dispatch=useDispatch();
  const userData = useSelector((state) => state.DocLogIn.user_info);
  const {token}=userData;
  const[list,setList]=useState()


const[data,setData]=useState({
  id:"",
  name:"",
  phoneNumber:"",
  appointmentdate:""
});
  const getData= async()=>{
       
    try{
        const response= await ApiStore.GetApiCall(Apiurls.APPOINTMENT_LIST, token)
        const res= await response.data;
        dispatch(setClinicList(res.data))
        setList(res.data)
          }
          catch(error){
            console.log(error)
          }
       }

       useEffect(()=>{
        getData()
       },[])
       const patientDone=async()=>{

        try{
        const response= await ApiStore.PutApiCall(Apiurls.APPOINTMENT_DONE+data.id,data,token)
              const res= await response.data;
              getData()

  dispatch(setPatientDone(res.data))

                }
                catch(error){
                  console.log(error)
                }}

                const patientUndo=async()=>{
          
                  try{
                  const response= await ApiStore.PutApiCall(Apiurls.APPOINTMENT_UNDU+data.id,data,token)
                        const res= await response.data;
                        getData()
                       dispatch(setPatientUndo(res.data))
                          }
                          catch(error){
                            console.log(error)
                          }}

       const userDelete = async (id)=>{
    
          try{
      const response= await ApiStore.DeleApiCall(Apiurls.PATIENT_DELETE+id,token)
              const res= await response.data;
              if(res.msg==="patient deleted !"){
                getData()
              }
            }
                catch(error){
                  console.log(error)
                }
             }
const userDone=(id)=>{
setData({
  id:id.id1,
  name:id.name1,
  phoneNumber:id.phoneNumber1,
  appointmentdate:id.appointmentdate1
})
patientDone();
}
const userUndo=(id)=>{
  setData({
    id:id.id1,
    name:id.name1,
    phoneNumber:id.phoneNumber1,
    appointmentdate:id.appointmentdate1
  })
  patientUndo()
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
      {
    
        val.activeStatus===false?<td><button className="btn-dark" onClick={()=>userUndo({id1:val.id,name1:val.name,phoneNumber1:val.phoneNumber,appointmentdate1:val.appointmentdate})}>Undo</button></td>:<td><button className="btn-success mr-2" onClick={()=>userDone({id1:val.id,name1:val.name,phoneNumber1:val.phoneNumber,appointmentdate1:val.appointmentdate})} >Done</button></td>

      }
      <td><Link to={`/patientUpdate/${val.id}`} > <button className='btn-primary mr-2' onClick={()=>dispatch(setUpdateReception({updateName:val.name,updatePhoneNumber:val.phoneNumber,updateappointmentdate:val.appointmentdate}))} >Update</button></Link>
      <button className='btn-danger' onClick={()=>userDelete(val.id)}>Delete</button>
      </td>

 </tr>
  </tbody>})}
</table></div>
  )
}

export default Appointments;