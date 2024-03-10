import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useSelector } from "react-redux";
import ApiStore, { Apiurls } from '../ApiStore';
import { useNavigate } from 'react-router';
const PatientUpdate = () => {
    const navigate = useNavigate()

    const userData = useSelector((state) => state.DocLogIn.user_info);
    const data = useSelector((state) => state.updateReception.Update_reception);
const {updateName,updatePhoneNumber,updateappointmentdate}=data;
const {token}=userData;

    let {id}=useParams()
    const [name,setName]=useState(updateName);
    const [phoneNumber,setPhoneNumber]=useState(updatePhoneNumber)
    const [appointmentdate,setAppointmentDate]=useState(updateappointmentdate);



    const updateDetails=async(id)=>{

        let item={name,phoneNumber,appointmentdate};

        try{
        const response= await ApiStore.PutApiCall(Apiurls.PATIENT_UPDATE+id, item,token)
              const res= await response.data;
              alert(res.msg)
              if(res.msg=="patient details update !"){
                navigate('/')
              }
             
                }
                catch(error){
                  console.log(error)
                }
              
    }




  return (
    <>
        <div className='col-lg-4 offset-lg-4 border mt-50 p-5 shadow mb-5 bg-white rounded'>
        <h1 style={{textAlign:"center"}}>Update Details</h1>

        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="text"  value={name} placeholder=" Name " onChange={(e)=>setName(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
    <br/>
    <label for="exampleInputEmail1" className="form-label">Appointment Date</label>
        <input type="text"  value={appointmentdate} placeholder="Appointment Date " onChange={(e)=>setAppointmentDate(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
    <br/>
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
        <input type="text"  value={phoneNumber} placeholder=" Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
    <br/>
    <button className='btn' style={{width:"100%",padding:"24px"}} onClick={(e)=>updateDetails(id)}>Update</button>
        </div> 
        </> )
}

export default PatientUpdate