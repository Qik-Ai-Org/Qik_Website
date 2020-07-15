import React from 'react'; 
import { Link } from 'react-router-dom';
import '../main-style.css';  
const Home = () => {
    return (
  
	<div>
	<header id="header"><div className="container">  <div className="row"><div className="col-md-4 col-sm-4 col-4">
	 
	<a href="http://www.qik.ai/" >				<img src={require("./images/logo.svg")} alt="Qik.ai" className="img-logovs" /></a> </div><div className="col-md-8 col-sm-8 col-8 text-right"><div className="us-contact">
			  <i className="fa fa-phone" /> +91 9503122314  <br /><i className="fa fa-envelope" /> 			  hello@qik.ai</div> </div></div> </div></header>  	  
	<section id="qik-intro" className="qik-intro "> 
	  <div className="container">
		<div className="row">
		  <div className="col-md-7 animated animatedFadeInDown fadeInDown class-uvstext"> 
			<h1 className="heading-h1">Qik cloud stack </h1>
			<h2 className="heading-h2" style={{fontWeight: 'normal'}}>Every business tool you will ever need to fuel your business growth </h2> 
			<div className="row">
            <div className="col-md-12">
              <div>
                <div id="main-section"><br/>
                  <h5>Select your business industry</h5>
                  <div className="col-md-12" id="products">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 col-6">
                        <a id="hidevs-edu"> <div className="feature-item"><img src={require("./images/1.svg")}  />
                            <br />
                            Education </div></a>
                      </div>
                      <div className="col-md-3 col-sm-6 col-6">
                        <a id="hidevs">	<div className="feature-item"> <img src={require("./images/2.svg")}  /> 
                            <br />
                            Health care </div></a>
                      </div> 
                      <div className="col-md-3 col-sm-6 col-6">
                        <a id="hidevs-retail"><div className="feature-item"> <img src={require("./images/3.svg")}  /> 
                            <br />
                            Retail </div></a>
                      </div> 
                      <div className="col-md-3 col-sm-6 col-6">
                        <a id="hidevs-hr"><div className="feature-item"> <img src={require("./images/4.svg")}  /> 
                            <br />
                            HR </div></a>
                      </div>
                    </div> </div> 
                </div>   
                <div id="sub-edu-section" style={{display: 'none'}}>
                  <h5 style={{marginBottom: '30px'}}><a href="JavaScript:Void(0);" style={{float: 'left'}} id="showvs-edu"> <i className="fa fa-angle-left"> </i>
                      <span style={{fontSize: '14px', color: '#000', fontWeight: 'normal', marginRight: '40px'}}>Back</span> </a> Education sector</h5>
                  <div className="col-md-12" id="products">
                    <div className="row" style={{marginBottom: '60px'}}>
                      <div className="col-md-4 col-sm-6 col-6"> <a href="http://www.qik.ai/Academy" >		 <div className="feature-item">
                            <img src={require("./images/e3.svg")}  /> 
                            <br />
                            Coaching
                          </div>   
						  </a></div>
                      <div className="col-md-4 col-sm-6 col-6">
                        <a href="http://www.qik.ai/Academy" >		 <div className="feature-item">	 <img src={require("./images/e2.svg")}  /> 
                            <br />
                            University / 
                            College</div>
							</a>
                      </div>
                      <div className="col-md-4 col-sm-6 col-6">
					 <a href="http://www.qik.ai/Academy" >		<div className="feature-item"> <img src={require("./images/e1.svg")}  />
                            <br />
                            Schools 
                          </div>	</a> </div>
                      <div className="col-md-4 col-sm-6 col-6"> 
                        <a href="http://www.qik.ai/Academy" >		<div className="feature-item"> <img src={require("./images/e4.svg")}  /> 
                            <br />
                            Play Schools  
                          </div>
						  </a>
                      </div> 
                      <div className="col-md-4 col-sm-6 col-6"> 
                        <a href="http://www.qik.ai/Academy" >		<div className="feature-item"> <img src={require("./images/e5.svg")}  /> 
                            <br />
                            Libraries 
                          </div>
                      	</a>
                      </div>
                      <div className="col-md-4 col-sm-6 col-6"> 
                        <a href="http://www.qik.ai/Academy" >		<div className="feature-item"> <img src={require("./images/e6.svg")}  /> 
                            <br />
                            Home Tutors 
                          </div>
						  </a>
                      </div>
                    </div>  
                  </div>
                </div> 
                <div id="sub-section" style={{display: 'none'}}>
                  <h5 style={{marginBottom: '30px'}}><a href="JavaScript:Void(0);" style={{float: 'left'}} id="showvs"> <i className="fa fa-angle-left"> </i> 
                      <span style={{fontSize: '14px', color: '#000', fontWeight: 'normal', marginRight: '40px'}}>Back </span></a> Heath Care Sector </h5>
                  <div className="col-md-12" id="products">
                    <div className="row">
                      <div className="col-md-12"><h1 style={{color: '#00abf6', fontWeight: 'bold'}}>Coming Soon... </h1></div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                    </div> </div>
                </div> 
                <div id="sub-section-retail" style={{display: 'none'}}>
                  <h5 style={{marginBottom: '30px'}}><a href="JavaScript:Void(0);" style={{float: 'left'}} id="showvs-retail"> <i className="fa fa-angle-left"> </i> 
                      <span style={{fontSize: '14px', color: '#000', fontWeight: 'normal', marginRight: '40px'}}>Back </span></a> Retail Sector </h5>
                  <div className="col-md-12" id="products">
                    <div className="row">
                      <div className="col-md-12"><h1 style={{color: '#00abf6', fontWeight: 'bold'}}>Coming Soon... </h1></div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                    </div> </div>
                </div> 
                <div id="sub-section-hr" style={{display: 'none'}}>
                  <h5 style={{marginBottom: '30px'}}><a href="JavaScript:Void(0);" style={{float: 'left'}} id="showvs-hr"> <i className="fa fa-angle-left"> </i> 
                      <span style={{fontSize: '14px', color: '#000', fontWeight: 'normal', marginRight: '40px'}}>Back </span></a> HR Sector </h5>
                  <div className="col-md-12" id="products">
                    <div className="row">
                      <div className="col-md-12"><h1 style={{color: '#00abf6', fontWeight: 'bold'}}>Coming Soon... </h1></div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                      <div className="col-md-4 col-sm-4 col-4">		 </div>
                    </div> </div>
                </div> 
              </div>	 </div>
          </div>  </div>
		  <div className="col-md-5 animated animatedFadeInUp fadeInUp suvs-imgs"> 
			 <img src={require("./images/intro.svg")} width="100%" /><br />
		  </div>
		</div>
	  </div>
	</section> 
	<style dangerouslySetInnerHTML={{__html: "   \n    .boxus { \n        align-self: flex-end;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        margin: 0 auto 0 auto;\n        transform-origin: bottom;\n    }\n    .bounce-1us {\n        animation-name: bounce-1us;\n        animation-timing-function: linear;\n    }\n    @keyframes bounce-1us {\n        0%   { transform: translateY(0); }\n        50%  { transform: translateY(-20px); }\n        100% { transform: translateY(0); }\n    }\n\t\n\n\t#products img {\n    text-align: center;\n    margin: 25px 0;\n}\n\t#products a {font-size:18px;color: #001e4b;  text-align: center;\n    font-weight: 600;}#products a:hover{color:#00abf6;}\n\t\n.feature-item{  -webkit-transition: all 0.25s linear;\n  transition: all 0.25s linear;}\n.feature-item:hover { \n  -webkit-transform: translateY(-10px);\n          transform: translateY(-10px);\n}\n\n .us-contact {\n    font-size: 14px;\n    line-height: 28px;color: #001e4b;\n}a.btn-primary {\n    background: #2f42fc;\n    border-color: #2f42fc;\n    border-radius: 0;\n    text-align: left;padding: 15px 40px;font-size: 16px;font-weight:600;\n}\n.btn-primary{border-radius: 4px;}p{color: #001e4b;}body {\n    color: #001e4b;\n}.container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 96%;\n}\n" }} />

 
 
	<footer id="footer" className="animated animatedFadeInDown fadeInDown">
	  <div className="footer-top">
		<div className="container">
		  <div className="row">
			<div className="col-md-4">
			  <h4>     <a href="index.html"> <img src={require("./images/logo.svg")} /></a> </h4>
			  <p>
				Supercharge your business with 50+ integrated business applications. With Qik Cloud Stack, you can speedup, automate and bring transparency to your business activities. Experience the power of cloud to increase your business productivity by 20%.
			  </p>
			</div>
			<div className="col-md-4 text-center-uvs">
			  <h4>Contact</h4>
			  <ul style={{listStyleType: 'none', padding: 0, margin: 0, marginTop: '20px'}}>
				<li style={{marginBottom: '13px'}}>Email: hello@qik.ai</li>
				<li>Phone:  +91 9503122314<br /><br /></li>
			  </ul>
			</div> 
			<div className="col-md-4 text-right-uvs">
			  <h4>Always reachable on</h4> 
			  <div className="social-links" style={{marginTop: '20px'}}>
				<a href="JavaScript:Void(0);"> <img src={require("./images/linkedin.svg")} /></a>
				<a href="JavaScript:Void(0);"> <img src={require("./images/gmail.svg")} style={{marginLeft: '20px'}} /></a>             
			  </div>
			</div>
		  </div>
		</div>
	  </div> 
	  <div className="containervs">
		<div className="copyright">
		  <p style={{textAlign: 'center'}}>   All rights reserved © 2020 <strong><span>
			  <a href="http://qik.ai/" target="_blank">Qik.Ai</a></span></strong>   
		  </p></div>
	  </div>
	</footer>
  </div>

);
}


export default Home;