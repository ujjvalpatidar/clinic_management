import React from 'react';
import { useState } from 'react';
import ApiStore,{Apiurls} from '../ApiStore';
import { useNavigate } from 'react-router-dom'
import { setDocLogIn } from '../redux1/action/Actions';
import { useDispatch } from 'react-redux';
import { TailSpin } from 'react-loader-spinner'

const LogInPage = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [isLoading,setIsLoading]=useState(false)

    const [email,setEmail]=useState("")
    const [password,setPassowrd]=useState("");

    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
const   funcLoading=()=>{
  setIsLoading(true)
  setTimeout(()=>{
    setIsLoading(false)
      navigate("/")

  },2000)
}

    const logIn= async (e)=>{
        let item={email,password};
        e.preventDefault();
        try{
      const response= await ApiStore.PostAPiCall(Apiurls.LOGIN,item)
      console.log(response)
if (response.status) {
  // alert(response.data.msg)
 dispatch(setDocLogIn({name:response.data.data.user.name, isLogin: true, token : response.data.data.token, userTyp:response.data.data.userType }))
  // navigate("/")
  funcLoading()
}
else {
  // alert(response.data.msg)
}
        }
        catch(error){
          console.log(error)
        }
        if(!email){
          setEmailError("**Please fill out this field**")
      
        } if(!passwordError){
          setPasswordError("**Please fill out this field**")
      
        }
        
           }
  return (
    <>
 {isLoading?<TailSpin
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
/> :<>
    <div className='col-lg-4 offset-lg-4 border mt-50 p-5 shadow mb-5 bg-white rounded'>
    <h1 style={{textAlign:"center"}}>LogIn Page</h1>

    <input type="text" name="EMAIL" onChange={(e)=>setEmail(e.target.value)} placeholder=" Email Address " className="input-group input-group-lg" style={{height:"35px",marginBottom:"10px"}}/>
    <span className='span-error'>{emailError}</span>


<br/>
<input type="password" placeholder='Password' onChange={(e)=>setPassowrd(e.target.value)} className='input-group input-group-lg' style={{height:"35px",marginBottom:"10px"}}/>
<span className='span-error'>{passwordError}</span>


<br/>
<button className='btn' style={{width:"100%",padding:"24px"}} onClick={logIn}>Login</button>

    </div>
</>}

    
    {/* </form> */}
    </>
  )
}

export default LogInPage