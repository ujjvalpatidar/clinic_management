import React from 'react'
import { useState } from 'react';
import ApiStore,{Apiurls} from '../ApiStore';
import { useNavigate } from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner'

const Register = () => {
  const navigate = useNavigate()
    const [name,setName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassowrd]=useState("");
    const [isLoading,setIsLoading]=useState(false)

    const [nameError,setNameError]=useState("");
    const [phoneNumberError,setPhoneNumberError]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const   funcLoading=()=>{
      setIsLoading(true)
      setTimeout(()=>{
        setIsLoading(false)
          navigate("/login")
    
      },2000)
    }
    const register= async (e)=>{
        e.preventDefault();
        let item={name,phoneNumber,email,password};
        try{
            const response= await ApiStore.PostAPiCall(Apiurls.REGISTER_API,item)
            console.log(response)
      if(response.data.msg===
        "ragister successfully"){
          funcLoading()

        }
    //   nevigate('/login')
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
           }

  return (
    <>{
      isLoading?<TailSpin
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  />:<>
        <div className='col-lg-4 offset-lg-4 border mt-50 p-5 shadow mb-5 bg-white rounded'>
        <h1 style={{textAlign:"center"}}>Register</h1>

        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="text"  value={name} placeholder=" Name " onChange={(e)=>setName(e.target.value)} className="input-group input-group-lg" style={{height:"35px"}} />
    <span className='span-error'>{nameError}</span>

    <br/>
    <label for="exampleInputEmail1" className="form-label mt-2">Phone Number</label>
        <input type="text"  value={phoneNumber} placeholder=" Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} className="input-group input-group-lg" style={{height:"35px"}} />
        <span className='span-error'>{phoneNumberError}</span>


    <br/>
        <label for="exampleInputEmail1" className="form-label mt-2">Email address</label>
        <input type="email"  value={email} name="EMAIL"  placeholder=" Email Address " onChange={(e)=>setEmail(e.target.value)} className="input-group input-group-lg" style={{height:"35px"}}/>
        <span className='span-error'>{emailError}</span>


    <br/>
    <label for="exampleInputEmail1" className="form-label mt-2">Password</label>
    <input type="password" value={password} placeholder='Password' onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px"}}/>
    <span className='span-error'>{passwordError}</span>


    <br/>
    <button className='btn mt-2' style={{width:"100%",padding:"24px"}} onClick={register}>Register</button>
    
        </div> 

  </>
    }
   
        </> )
}

export default Register