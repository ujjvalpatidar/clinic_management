import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import ApiStore,{Apiurls} from '../../ApiStore';
import { setClinicList } from '../../redux1/action/Actions';
import { Link } from 'react-router-dom';
import { setUpdateReception } from '../../redux1/action/Actions';

const AllPatients = () => {
  const dispatch=useDispatch();
  const list = useSelector((state) => state.clinicList.clinic_list);
// console.log(list)
  const userData = useSelector((state) => state.DocLogIn.user_info);
  const {token}=userData;
  const getData= async()=>{
       
    try{
        const response= await ApiStore.GetApiCall(Apiurls.PATIENT_LIST, token)
        const res= await response.data;
        // console.log(response)
        dispatch(setClinicList(res.data))
          }
          catch(error){
            console.log(error)
          }
       }

       useEffect(()=>{
        getData()
       },[])

       
  return (<div>
  <h2 className="mt-10 text-center">Patient List</h2>
<table className="table mt-20">
  <thead className="list-main-area">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">NUMBER</th>
      <th scope="col">AGE</th>
      <th scope="col">SEX</th>
      <th scope="col">TIME</th>
     <th scope="col">APPOINTMENT DATE</th>
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
      <td><Link to={`/patientUpdate/${val.id}`} ><button className='btn-primary' onClick={()=>dispatch(setUpdateReception({updateName:val.name,updatePhoneNumber:val.phoneNumber,updateappointmentdate:val.appointmentdate}))} >Update</button></Link>
</td>

 </tr>
  </tbody>})}
</table></div>
  )
}

export default AllPatients;