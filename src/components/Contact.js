import React from 'react'

const Contact = () => {
  return (
<>
<div className="slider-area slider-area2">
        <div className="slider-active dot-style">
            {/* <!-- Slider Single --> */}
            <div className="single-slider  d-flex align-items-center slider-height2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-8 col-md-10 ">
                         <div className="hero-wrapper">
                            <div className="hero__caption">
                                <h1 data-animation="fadeInUp" data-delay=".3s">contact</h1>
                                <p data-animation="fadeInUp" data-delay=".6s">Have questions about our Shubh Clinic app <br/>or need assistance? We're here to help!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</div>
<div className="row ml-25 mb-25">
            <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-home"></i></span>
                    <div className="media-body">
                        <h3>Buttonwood, California.</h3>
                        <p>Rosemead, CA 91770</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                    <div className="media-body">
                        <h3>+1 253 565 2365</h3>
                        <p>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div className="media contact-info">
                    <span className="contact-info__icon"><i className="ti-email"></i></span>
                    <div className="media-body">
                        <h3>support@colorlib.com</h3>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
        </div>
{/* Contact Area End*/}
{/*? About Law Start*/}
<section className="about-low-area mt-100">
    <div className="container">
        <div className="about-cap-wrapper">
            <div className="row">
                <div className="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
                    <div className="about-caption mb-50">
                        {/* Section Tittle*/}
                        <div className="section-tittle mb-35">
                            <h2>100% satisfaction guaranteed.</h2>
                        </div>
                        {/* <p>Almost before we knew it, we had left the ground</p> */}
                        <a href="about.html" className="border-btn">Make an Appointment</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    {/* about-img*/}
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
</>  )
}

export default Contact