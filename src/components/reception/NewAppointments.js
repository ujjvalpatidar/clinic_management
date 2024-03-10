import React from 'react'
import ApiStore,{Apiurls} from '../../ApiStore'
import { useNavigate } from 'react-router';
import { useState } from 'react'
import { useSelector } from "react-redux";

const NewAppointments = () => {
    const userData = useSelector((state) => state.DocLogIn.user_info);
    const {token}=userData;

    const navigate = useNavigate()
  const [name,setName]=useState("");
  const [sex,setSex]=useState("")
  const [phoneNumber,setPhoneNumber]=useState()
  const [age,setAge]=useState()
  const [appointmentdate,setAppointmentDate]=useState();
  const [time,setTime]=useState()

  const [nameError,setNameError]=useState("");
        const [phoneNumberError,setPhoneNumberError]=useState("");
        const [sexError,setSexError]=useState("")
        const [ageError,setAgeError]=useState()
        const [appointmentdateError,setAppointmentDateError]=useState();
        const [timeError,setTimeError]=useState()

const submit= async(e)=>{
    e.preventDefault();
    let item={name,sex,age,phoneNumber,appointmentdate,time};
    try{
        const response= await ApiStore.PostCall(Apiurls.NEW_APPOINTMENT,item,token)
        console.log(response)
if(response.data.msg==="patient detail is saved"){
    navigate('/appointments')
}
          }
          catch(error){
            console.log(error)
          }
          if(!name){
            setNameError("**Please fill out this field**")
}

          if(!phoneNumber){
            setPhoneNumberError("**Please fill out this field**")
        
          }
          if(!sex){
            setSexError("**Please fill out this field**")
        
          } if(!age){
            setAgeError("**Please fill out this field**")
        
          }
          if(!appointmentdate){
            setAppointmentDateError("**Please fill out this field**")
        
          }
          if(!time){
            setTimeError("**Please fill out this field**")
        
          }
}

  return (
 <>
        <div className='col-lg-4 offset-lg-4 border mt-50 p-5 shadow mb-5 bg-white rounded'>
        <h1 style={{textAlign:"center"}}>New Apppointment</h1>

        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="text"  value={name} placeholder=" Name " onChange={(e)=>setName(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{nameError}</span>


    <br/>
    <label for="exampleInputEmail1" className="form-label">Age</label>
        <input type="text"  value={age} placeholder=" Name " onChange={(e)=>setAge(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{ageError}</span>


    <br/>
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
        <input type="text"  value={phoneNumber} placeholder=" Phone Number " onChange={(e)=>setPhoneNumber(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{phoneNumberError}</span>


    <br/>
   
    <label for="exampleInputEmail1" className="form-label">Gender</label>
        <input type="text"  value={sex} placeholder="Gender " onChange={(e)=>setSex(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{sexError}</span>


    <br/>
    <label for="exampleInputEmail1" className="form-label">Appointment Date</label>
        <input type="text"  value={appointmentdate} placeholder="Appointment Date " onChange={(e)=>setAppointmentDate(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{appointmentdateError}</span>

    
   <br/>
    <label for="exampleInputEmail1" className="form-label">Time</label>
        <input type="text"  value={time} placeholder="Time " onChange={(e)=>setTime(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{timeError}</span>


    <br/>
    <button className='btn' style={{width:"100%",padding:"24px"}} onClick={submit}>Submit</button>
    
        </div> 
        </>   )
}

export default NewAppointments