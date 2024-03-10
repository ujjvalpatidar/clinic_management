import React from 'react'

const About = () => {
  return (
<>
{/* {/*? Slider Area Start*/} 
<main>
        {/* {/*? Slider Area Start*/} 
        <div className="slider-area slider-area2">
            <div className="slider-active dot-style">
              {/* Slider Single */}
                <div className="single-slider  d-flex align-items-center slider-height2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 ">
                             <div className="hero-wrapper">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay=".3s">About</h1>
                                    <p data-animation="fadeInUp" data-delay=".6s">Welcome to Shubh Clinic, <br/> your comprehensive solution for streamlining clinic operations and enhancing patient care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  {/* Slider Area End */}
  {/*? Team Area Start*/}
    <section className="team-area pb-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-cat text-center mb-30">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team1.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="#">Your daily meal plan</a></h5>
                            <p>Vegetable Upma,Roti,Dal,Vegetables,yogurt or raita,Fresh cucumber, tomato, and onion salad,Soup.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-cat text-center mb-30">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team2.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="#">Muscle Gain</a></h5>
                            <p>Eat a Balanced Diet,Stay Hydrated,Exercise Regularly,Get Adequate Sleep,Manage Stress.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="single-cat text-center mb-30">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team3.png" alt=""/>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="#">Weight Loss</a></h5>
                            <p>Whole Grains,Legumes,Low-Calorie Beverages,Incorporate Physical Activity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  {/*? Team End*/}
  {/* Services End*/}
  {/*? About-2 Area Start */}
    <div className="about-area2 section-padding40">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  {/* about-img */}
                    <div className="about-img ">
                        <img src="assets/img/gallery/about.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="about-caption mb-50">
                      {/* Section Tittle */}
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
 {/*? Testimonial Area Start */}
 <section className="testimonial-area testimonial-padding fix">
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className=" col-lg-9">
                <div className="about-caption">
                  {/* Testimonial Start */}
                    <div className="h1-testimonial-active dot-style">
                      {/* Single Testimonial */}
                        <div className="single-testimonial position-relative">
                            <div className="testimonial-caption">
                                <img src="assets/img/icon/quotes-sign.png" alt="" className="quotes-sign"/>
                                <p>The Shubh Clinic App is a clinic management application designed to streamline the workflow between doctors and receptionists in a multi-clinic setup. The primary goal is to digitize and centralize the appointment scheduling process, reducing paperwork and enhancing communication between healthcare professionals.</p>
                            </div>
                        </div>
                    </div>
                  {/* Testimonial End */}
                </div>
            </div>
        </div>
    </div>
</section>
{/*? Testimonial Area End */}
    {/*? About Law Start*/}
<section className="about-low-area mt-30">
    <div className="container">
        <div className="about-cap-wrapper">
            <div className="row">
                <div className="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
                    <div className="about-caption mb-50">
                      {/* Section Tittle */}
                        <div className="section-tittle mb-35">
                            <h2>100% satisfaction guaranteed.</h2>
                        </div>
                        <a href="about.html" className="border-btn">Make an Appointment</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  {/* about-img */}
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
{/* About Law End*/}
</main>

</>  )
}

export default About