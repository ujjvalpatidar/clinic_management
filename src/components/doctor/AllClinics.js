import React from 'react'
import { useEffect,useState } from 'react';
import ApiStore,{Apiurls} from '../../ApiStore';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setClinicList } from '../../redux1/action/Actions';
import { Link } from 'react-router-dom';
import { setUpdateReception } from '../../redux1/action/Actions';
// import { AiFillDelete } from "react-icons/ai";

const AllClinics = () => {
    const userData = useSelector((state) => state.DocLogIn.user_info);
    const list = useSelector((state) => state.clinicList.clinic_list);
    const {token}=userData;
    const[data,setData]=useState({
      id:"",
      name:"",
      phoneNumber:"",
      password:"",
      oldPassword:""

    });
    const dispatch=useDispatch()


       const getData= async()=>{
       
        try{
            const response= await ApiStore.GetApiCall(Apiurls.RECEPTION_LIST, token)
            const res= await response.data;
            dispatch(setClinicList(res.data))
              }
              catch(error){
                console.log(error)
              }
           }

           useEffect(()=>{
            getData()
           },[])
           const userDeleteData = async ()=>{      
            try{
        const response= await ApiStore.PutApiCall(Apiurls.PutApiCall+data.id,data,token)
                const res= await response.data;
                console.log(response)
                getData()
              }
                  catch(error){
                    console.log(error)
                  }
               }
               const userDelete=(id)=>{
                setData({
                  id:id.id1,
                  name:id.name1,
                  phoneNumber:id.phoneNumber1,
                  password:id.appointmentdate1,
                  oldPassword:id.oldPassword1
                })
                userDeleteData();
                }
  return (
<>
<div >
<h2 className="mt-10 text-center">All Clinic List</h2>
<table className="table mt-20">
  <thead className="list-main-area">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col"> PHONE NUMBER</th>
      <th scope="col">ADDRESS</th>
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
      <td>{val.raddress}</td>
      <td><Link to={`/updatePage/${val.id}`} ><button className='btn-primary' onClick={()=>dispatch(setUpdateReception({updateName:val.name,updatePhoneNumber:val.phoneNumber}))} >Update</button></Link>
      <button className='btn-danger ml-2' onClick={()=>userDelete({id1:val.id,name1:val.name,phoneNumber1:val.phoneNumber,password1:val.password,oldPassword1:val.oldPassword})}>Delete</button>

</td>

 </tr>
  </tbody>})}
</table></div>
</>  )
}

export default AllClinics;