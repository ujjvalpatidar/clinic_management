import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setDocLogIn } from '../redux1/action/Actions';
const Header = () => {
    const dispatch=useDispatch();
    const userData = useSelector((state) => state.DocLogIn.user_info);
    // console.log(userData)
const {userTyp,isLogin,name}=userData;
    

const RenderMenu=()=>{
    if(!isLogin){
        return (
      
            <>

            <div className="menu-main d-flex align-items-center justify-content-end">
                          {/* Main-menu  */}
                          <div className="main-menu f-right d-none d-lg-block">
                              <nav> 
                                  <ul id="navigation">
                                  <li><Link to={'/'}>Home</Link></li>
                                      <li><Link to={'/about'}>About</Link></li>
                                      <li><Link to={'/services'}>Services</Link></li>
                                      <li><Link to={'/contact'}>Contact</Link></li>    
                                  </ul>
                              </nav>
                          </div>
                          <div className="header-right-btn f-right d-none d-lg-block ml-15">
                          <button className="btn header-btn"><Link to={'/login'}>Login</Link></button>
                          <button className="btn header-btn"><Link to={'/register'}>Register</Link></button>
                          </div>
                      </div>
                      </> 
              )
    }
    else if(isLogin && userTyp==="doctor" ){
        return(
            <>
            <div className="menu-main d-flex align-items-center justify-content-end">
                      {/* Main-menu  */}
                      <div className="main-menu f-right d-none d-lg-block">
                          <nav> 
                              <ul id="navigation">
                                  <li><Link to={'/'}>Home</Link></li>
                                  <li><Link to={'/newClinics '}>New Clinic</Link></li>
                                  <li><Link to={'/allClinics '}>All Clinics</Link></li>
                                  <li><Link to={'/allPatients'}>All Patients</Link></li>
                                  <li><h3 style={{color:"#234821"}}>Hello, Dr. {name}</h3></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="header-right-btn f-right d-none d-lg-block ml-15">
                      <button className="btn header-btn" onClick={()=>{dispatch(setDocLogIn({isLogin:false}))}}><Link to={'/'}>Logout</Link></button>
                      </div>
                  </div>
 </>
        )}
        else if(isLogin && userTyp==="reception" ){
            return(
                <>
                <div className="menu-main d-flex align-items-center justify-content-end">
                          {/* Main-menu  */}
                          <div className="main-menu f-right d-none d-lg-block">
                              <nav> 
                                  <ul id="navigation">
                                      <li><Link to={'/'}>Home</Link></li>
                                      <li><Link to={'/newAppointment '}> New Appointment</Link></li>
                                      <li><Link to={'/appointments '}>Appointments</Link></li>
                                      <li><h3 style={{color:"#234821"}}>Hello, {name}</h3></li>
                                  </ul>
                              </nav>
                          </div>
                          <div className="header-right-btn f-right d-none d-lg-block ml-15">
                          <button className="btn header-btn" onClick={()=>{dispatch(setDocLogIn({isLogin:false}))}}><Link to={'/'}>Logout</Link></button>
                          </div>
                      </div>
     </>
            )}
    }

  return (
    <>
    {}
    <header>
    {/* Header Start  */}
     <div className="header-area">
         <div className="main-header header-sticky">
             <div className="container-fluid">
                 <div className="row align-items-center">
                     {/* Logo  */}
                     <div className="col-xl-2 col-lg-2 col-md-1">
                         <div className="footer-logo">
                             <Link to={'/'}><h1 style={{color:"#234821"}}>Shubh Clinic</h1> </Link>
                         </div>
                     </div>
                     <div className="col-xl-10 col-lg-10 col-md-10">
                      <RenderMenu/>
                     </div>   
                     {/* Mobile Menu  */}
                     <div className="col-12">
                         <div className="mobile_menu d-block d-lg-none"></div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     {/* Header End  */}
 </header> 
 </> 
 )
}

export default Header