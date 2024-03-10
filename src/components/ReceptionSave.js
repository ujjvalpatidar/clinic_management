import React from 'react'
import { useState } from 'react';
import ApiStore,{Apiurls} from '../ApiStore';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const ReceptionSave = () => {
    const userData = useSelector((state) => state.DocLogIn.user_info);
const {token}=userData;
 const nevigate=useNavigate()
    const [name,setName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassowrd]=useState("");
    const [raddress,setraddress]=useState("");


    const [nameError,setNameError]=useState("");
    const [phoneNumberError,setPhoneNumberError]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [raddressError,setRaddressError]=useState("");

    const register= async (e)=>{
        e.preventDefault();
        let item={name,phoneNumber,email,password,raddress};
        try{
            const response= await ApiStore.PostCall(Apiurls.RECEPTION_SAVE,item,token)
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
  if(!email){
    setEmailError("**Please fill out this field**")

  } if(!passwordError){
    setPasswordError("**Please fill out this field**")

  }
  if(!raddressError){
    setRaddressError("**Please fill out this field**")

  }
           }

  return (
    <>
        <div className='col-lg-4 offset-lg-4 border mt-50 p-5 shadow mb-5 bg-white rounded mt-4'>
        <h1 style={{textAlign:"center",margin:"25px"}}>Register</h1>
  <label className="form-label">Name</label>
        <input type="text"  value={name} placeholder=" Name " onChange={(e)=>setName(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{nameError}</span>


    <br/>

    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
        <input type="text"  value={phoneNumber} placeholder=" Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{phoneNumberError}</span>


    <br/>
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email"  value={email} name="EMAIL"  placeholder=" Email Address " onChange={(e)=>setEmail(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
        <span className='span-error'>{emailError}</span>

        
    <br/>
    <label for="exampleInputEmail1" className="form-label">Password</label>
    <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
    <span className='span-error'>{passwordError}</span>


    <br/>
    <label for="exampleInputEmail1" className="form-label">Address</label>
    <input type="text" value={raddress} placeholder='Address' onChange={(e)=>setraddress(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
    <span className='span-error'>{raddressError}</span>


    <br/>
    <button className='btn' style={{width:"100%",padding:"24px"}} onClick={register}>Register</button>
    
        </div> 
        </> )
}

export default ReceptionSave;