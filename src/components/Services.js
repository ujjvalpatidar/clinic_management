import React from 'react'

const Services = () => {
  return (
<>
<main>
        {/* <!--? Slider Area Start--> */}
        <div className="slider-area slider-area2">
            <div className="slider-active dot-style">
                {/* <!-- Slider Single --> */}
                <div className="single-slider  d-flex align-items-center slider-height2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 ">
                             <div className="hero-wrapper">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay=".3s">Services</h1>
                                    <p data-animation="fadeInUp" data-delay=".6s">Streamline Your Clinic Operations with Our Comprehensive Services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    {/* <!-- Slider Area End --> */}
    <section className="wantToWork-area">
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
                        <a href="#" className="btn f-right sm-left">Take a Service</a>
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
    {/* <!-- About Law End--> */}
</main>
</>  )
}

export default Services