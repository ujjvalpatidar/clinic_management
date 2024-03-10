import React from 'react'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useSelector } from "react-redux";
import ApiStore, { Apiurls } from '../ApiStore';
import { useNavigate } from 'react-router';
const UpdatePage = () => {
  const navigate = useNavigate()

    const userData = useSelector((state) => state.DocLogIn.user_info);
    const data = useSelector((state) => state.updateReception.Update_reception);
const {updateName,updatePhoneNumber}=data;
const {token}=userData;

    let {id}=useParams()
    const [name,setName]=useState(updateName);
    const [phoneNumber,setPhoneNumber]=useState(updatePhoneNumber)
    const [oldPassword,setoldPassword]=useState("")
    const [password,setPassowrd]=useState("");


    
    const updateDetails=async(id)=>{

        let item={name,phoneNumber,password,oldPassword};

        try{
        const response= await ApiStore.PutApiCall(Apiurls.PutApiCall+id, item,token)
              const res= await response.data;
              if(res.msg=="Reception details updated!"){
                alert(res.msg)
                navigate('/allClinics')
              }
             else if(oldPassword!==password){
                return document.getElementById('update_page_span').innerHTML="inccorect old password"
              }
              else if(password==""){
                return document.getElementById('update-pass').innerHTML="password is empty"

              }
              else if(oldPassword==""){
                return document.getElementById('update-old-pass').innerHTML=" old password is empty"

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
    <label for="exampleInputEmail1" className="form-label">Password</label>
    <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px"}}/>
    <span id='update-pass'></span>

    
    <br/>
    <label for="exampleInputEmail1" className="form-label">Old Password</label>
        <input type="password"  value={oldPassword} placeholder=" Old Number" onChange={(e)=>setoldPassword(e.target.value)} className="input-group input-group-lg" style={{height:"35px"}}/>
<span id='update-old-pass'></span>

<br/>
    <label for="exampleInputEmail1" className="form-label">Phone Number</label>
        <input type="text"  value={phoneNumber} placeholder=" Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
    <br/>
    <button className='btn' style={{width:"100%",padding:"24px"}} onClick={(e)=>updateDetails(id)}>Update</button>

        </div> 
        </> )
}

export default UpdatePage;