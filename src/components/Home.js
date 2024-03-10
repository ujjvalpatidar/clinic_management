import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Home = () => {
    const getData =async()=>{
        const response = await axios.get("http://tutorials.codebetter.in:7085/api/category/list")
        console.log(response)
    }
   useEffect(()=>{
getData()
   },[])
  return (
<>

    <main>
        {/* Slider Area Start */}
        <div className="slider-area">
            <div className="slider-active dot-style">
                {/* Slider Single  */}
                <div className="single-slider d-flex align-items-center slider-height">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 ">
                             <div className="hero-wrapper">
                                {/* Video icon  */}
                                <div className="video-icon">
                                    <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0" data-animation="bounceIn" data-delay=".4s">
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay=".3s">Health is wealth  keep it healthy </h1>
                                    {/* <p data-animation="fadeInUp" data-delay=".6s">Almost before we knew it, we<br/> had left the ground</p> */}
                                    <a href="services.html" className="btn" data-animation="fadeInLeft" data-delay=".3s">Take a Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    </div>
</div>
{/* Slider Area End  */}
{/* About-2 Area Start  */}
<div className="about-area2 section-padding40">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
                {/* about-img  */}
                <div className="about-img ">
                    <img src="assets/img/gallery/about.png" alt=""/>
                </div>
            </div>
            <div className="col-lg-5 col-md-12">
                <div className="about-caption">
                    {/* Section Tittle  */}
                    <div className="section-tittle mb-35">
                        <h2>Create a healthy 
                        life you love!</h2>
                    </div>
                    <p className="pera-top mb-40">The greatest wealth is health.</p>
                   <p className="pera-bottom mb-30">"The doctor of the future will give no medicine but will instruct his patient in the care of the human frame, in diet, and in the cause and prevention of disease." <br/> - Thomas Edison</p>
                    <div className="icon-about">
                     <img src="assets/img/icon/about1.svg" alt="" className=" mr-20"/>
                     <img src="assets/img/icon/about2.svg" alt=""/>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>
{/* About-2 Area End  */}
<section className="wantToWork-area section-bg3" data-background="assets/img/gallery/section_bg01.png">
    <div className="container">
        <div className="wants-wrapper w-padding2">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-9 col-md-8">
                    <div className="wantToWork-caption wantToWork-caption2">
                        <h2>Happy mind <br/>healthy life</h2>
                        {/* <p>Almost before we knew it, we<br/> had left the ground</p> */}
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <a href="services.html" className="btn f-right sm-left">Take a Service</a>
                </div>
            </div>
        </div>
    </div>
</section>
  {/* <!--? Services Area Start --> */}
  <div className="service-area ">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <img src="assets/img/icon/services1.svg" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Appointment Management</a></h5>
                            <p>Doctors can efficiently manage appointments through the system.Their responsibilities include:
Managing patient details,Adding new appointments.</p>
                            <a href="services.html" className="plus-btn"><i className="ti-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <img src="assets/img/icon/services2.svg" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Patient Details</a></h5>
                            <p>seamless communication between doctors and receptionists by displaying patient details to both parties.Doctors can access patient details associated with each appointment</p>
                            <a href="services.html" className="plus-btn"><i className="ti-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <img src="assets/img/icon/services3.svg" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Security Measures</a></h5>
                            <p>The system incorporates robust security measures:
Secure login mechanisms for both doctors and receptionists,
	Access control to ensure appropriate permissions.
.</p>
                            <a href="services.html" className="plus-btn"><i className="ti-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services Area End --> */}
        
    {/* <!--? About Law Start--> */}
    <section className="about-low-area mt-100">
        <div className="container">
            <div className="about-cap-wrapper">
                <div className="row">
                    <div className="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
                        <div className="about-caption mb-50">
                            {/* <!-- Section Tittle --> */}
                            <div className="section-tittle mb-35">
                                <h2>100% satisfaction guaranteed.</h2>
                            </div>
                            {/* <p>Almost before we knew it, we had left the ground</p> */}
                            <a href="about.html" className="border-btn">Make an Appointment</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        {/* <!-- about-img --> */}
                        <div className="about-img">
                            <div className="about-font-img">
                                <img src="assets/img/gallery/about2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* About Law End */}
</main>

</>  )
}

export default Home