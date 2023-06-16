import React from "react";
import "../main-style-academy-business.css";
import { Link } from "react-router-dom";
const Academy = () => {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-2" style={{ padding: 0 }}>
              <a href="/">
                <img
                  src={require("./images/logo.svg").default}
                  alt="Qik.ai"
                  className="img-logovs"
                />
              </a>
            </div>
            <div className="col-md-7 col-4">
              {/* <nav className="nav-menu d-none d-lg-block float-right">
                <ul>
                  <li>
                    <a href="#qik-intro">Home</a>
                  </li>

                  <li>
                    <a href="#qik-products">Products</a>
                  </li>
                  <li>
                    <a href="#customer">Our Customers</a>
                  </li>
                  <li>
                    <a href="#qik-pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                </ul>
              </nav> */}
            </div>
            <div className="col-md-3 col-sm-6 col-6 text-right">
              <div className="us-contact">
                <i className="fa fa-phone" /> 🇺🇸 +1 8453637505 🇮🇳 +91-9209157677
                <br />
                <i className="fa fa-envelope" /> hello@qik.ai
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="qik-intro" className="qik-intro">
        <div className="container">
          <div className="row">
            <div className="col-md-5 introtext">
              <h2>
                Let's manage your <br />
                academy just a few
                <br />
                clicks
                <hr className="section-line-border mhide" />
                <hr className="section-line-border1 mshow" />
              </h2>
              <p>
                Make your academy digital by bringing all the <br />
                stakeholders - students, parents, teachers and
                <br /> management on a signle platform.
              </p>
              <a
                href="#qik-products"
                className="btn btn-primary btn-lg"
                style={{ marginBottom: "40px", borderRadius: "4px" }}
              >
                Get Business App
              </a>
            </div>
            <div className="col-md-7">
              <img
                src={require("./images/academy-intro.png")}
                className="img-fluid"
                width="100%"
                alt=""
              />
              <br />
              <br />
              <h5 style={{ textAlign: "center" }}>Qik Academy Software</h5>
              {/*      <div class="boxus bounce-1us">  </div> */}
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '   \n    .boxus { \n        align-self: flex-end;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        margin: 0 auto 0 auto;\n        transform-origin: bottom;\n    }\n    .bounce-1us {\n        animation-name: bounce-1us;\n        animation-timing-function: linear;\n    }\n    @keyframes bounce-1us {\n        0%   { transform: translateY(0); }\n        50%  { transform: translateY(-20px); }\n        100% { transform: translateY(0); }\n    }\n\t\n    .section-line-border {\n        position: relative;\n        overflow: hidden;\n        height: 4px;\n        width: 120px;\n        border:none;\n        background:#00abf6;\n        margin:15px 0;\n    }\n    .section-line-border::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        width: 60px;\n        background:#00abf6;\n    } .section-line-border1 {\n        position: relative;\n        overflow: hidden;\n        height: 4px;\n        width: 120px;\n        border:none;\n        background:#00abf6;\n        margin:15px auto;\n    }\n    .section-line-border1::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        width: 60px;\n        background:#00abf6;\n    }\n  .us-contact {\n    font-size: 14px;\n    line-height: 28px;color: #001e4b;\n}.btn-primary{border-radius: 4px;}.uvs-line{\n    height: 78%;\n    position: absolute;\n    width: 1px;\n    background: #ccc;\n    margin-top: -120px;margin-left:20px;\n}.uvs-line-h{\n   width:35%;\n    position: absolute;\n   height: 1px;\n    background: #ccc; margin-left:20px;\n} \n.container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 96%;\n}\n.border-left-uvs{border-left:1px solid #ccc;} \n.border-right-uvs{border-right:1px solid #ccc;} \n.border-bottom-uvs{border-bottom:1px solid #ccc;}\n.border-bottom-uvs:hover{ border-bottom:4px solid #ffc107;}  \n.container-text-center {\n    text-align: center;\n}.vs-btns{margin-top:45%;}\n.mshow{display:none;} .text-center-uvs{text-align:center;}.text-right-uvs{text-align:right;}\n@media (max-width:780px) { .text-center-uvs{text-align:left;}.text-right-uvs{text-align:left;}\n.mhide{display:none;}.mshow{display:block;}\n#qik-pricing{padding-bottom:20px;}.vs-btns{margin-top:0%;}.border-left-uvs{border-left:0px solid #ccc;} \n.border-right-uvs{border-right:0px solid #ccc;} \n.border-bottom-uvs{border-bottom:0px solid #ccc;}\n.border-bottom-uvs:hover{ border-bottom:0px solid #ffc107;} \n.uvs-line-h{display:none;}.uvs-line {display:none;}\n}\nhtml{overflow-x:hidden;}\n',
        }}
      />
      <section id="qik-products" className="qik-products">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <a href="/Business">
                <img
                  src={require("./images/pc.svg").default}
                  alt=""
                  className="vs-btns"
                />
              </a>
              <br />
              <br />
              <h5>
                Qik Academy
                <br /> Software
              </h5>
              <a href="/">
                Education <i className="fa fa-angle-down" />
              </a>
              <br />
              <br />
            </div>
            <div className="col-md-8">
              <span className="uvs-span">Applications</span>
              <h2>
                Simple &amp; reliable suit of <br />
                application to run your
                <br /> academy <hr className="section-line-border" />
              </h2>
              <p>
                The exceptional cloud-based solution for academy management with
                student records management such as results, homework &amp; fess.
                SMS updates to parents &amp; students for free reminder. test
                results &amp; holidays. Other important features such as print
                I-cards, progress reports of students &amp;
                <a href="/Business"> Many more</a>
                <br />
                <br />
                <small>
                  <a href="/go/elearning/">Qik E-Learning App</a>
                </small>
              </p>
            </div>
            <div className="uvs-line" />
            <div className="row text-center uvs-boxes">
              <div className="uvs-line-h" />
              <div className="col-md-3 border-right-uvs border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a1.svg").default} alt="" />
                  <h4>CRM</h4>
                  <p>
                    Manage and track all the student inquiries in a single
                    place.
                  </p>
                  Learn More
                </a>
                <div className="uvs-line-hover" />
              </div>
              <div className="col-md-3 border-right-uvs border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a2.svg").default} alt="" />
                  <h4>
                    Attendance <br />
                    Management
                  </h4>
                  <p>Daily track the batch-wise attendance of students.</p>
                  Learn More
                </a>
                <div className="uvs-line-hover" />
              </div>
              <div className="col-md-3 border-right-uvs border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a3.svg").default} alt="" />
                  <h4>Communication</h4>
                  <p>Send custom emails/SMS alerts or make templates.</p> Learn
                  More
                </a>
                <div className="uvs-line-hover" />
              </div>
              <div className="col-md-3 border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a4.svg").default} alt="" />
                  <h4>
                    Expense <br />
                    Tracker
                  </h4>
                  <p>
                    Keep a record of all payment transactions with account
                    details.
                  </p>
                  Learn More
                </a>
                <div className="uvs-line-hover" />
              </div>
              <div className="col-md-3 border-right-uvs border-bottom-uvs ">
                <a href="/Business">
                  <img src={require("./images/a5.svg").default} alt="" />
                  <h4>
                    Web <br /> Solution
                  </h4>
                  <p>Create a website as per your requirement.</p> Learn More
                </a>
              </div>
              <div className="col-md-3 border-right-uvs border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a6.svg").default} alt="" />
                  <h4>
                    Task <br />
                    Management
                  </h4>
                  <p>Create, assign, and track tasks.</p> Learn More
                </a>
              </div>
              <div className="col-md-3 border-right-uvs border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a7.svg").default} alt="" />
                  <h4>Payroll</h4>
                  <p>
                    Manage &amp; track the salary generation of the employees.
                  </p>
                  Learn More
                </a>
              </div>
              <div className="col-md-3  border-bottom-uvs">
                <a href="/Business">
                  <img src={require("./images/a8.svg").default} alt="" />
                  <h4>
                    Social <br />
                    Media
                  </h4>
                  <p>
                    Create &amp; Upload the post on different social channel.
                  </p>
                  Learn More
                </a>
              </div>
              <div className="col-md-3 border-right-uvs">
                <a href="/go/elearning/">
                  <img
                    src={require("./images/logo.png").default}
                    alt=""
                    style={{ width: "116px" }}
                  />
                  <h4>
                    Qik <br />
                    E-Learning
                  </h4>
                  <p>
                    Get your own E-Learning app on playstore and make money by
                    selling premium recorded video, Audio & PDF courses like a
                    pro.
                  </p>
                  Learn More
                </a>
              </div>
              <div className="col-md-12 text-center">
                <a
                  href="#qik-pricing"
                  className="btn btn-primary btn-lg"
                  id="customer"
                  style={{
                    margin: "40px 0",
                    borderRadius: "4px",
                    width: "216px",
                    textAlign: "center",
                  }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="qik-products" className="qik-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="uvs-span">Reviews</span>
              <h2>
                What our customers <br />
                are saying <hr className="section-line-border" />
              </h2>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ' \n.mySlides {display: none}\nimg {vertical-align: middle;}\n\n/* Slideshow container */\n.slideshow-container { \n  position: relative;\n  margin: auto;\n}\n\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n}\n\n/* Position the "next button" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: rgba(0,0,0,0.8);\n}\n\n/* Caption text */\n.text {\n  color: #f2f2f2;\n  font-size: 15px;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 8px;\n  width: 100%;\n  text-align: center;\n}\n\n/* Number text (1/3 etc) */\n.numbertext {\n  color: #f2f2f2;\n  font-size: 12px;\n  padding: 8px 12px;\n  position: absolute;\n  top: 0;\n}\n\n/* The dots/bullets/indicators */\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active, .dot:hover {\n  background-color: #00abf6;\n}\n\n/* Fading animation */\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n\n/* On smaller screens, decrease text size */\n@media only screen and (max-width: 300px) {\n  .prev, .next,.text {font-size: 11px}\n}\n.class-desript{padding:11%;}\n.text-t-color{color:#00abf6;}\n.img-uvss{float:right;margin-top:-16%;}\n.mySlides.fades .col-md-4 img {\n    margin-bottom:4%;\n}\n.form-uvsl .form-control {\n    margin-bottom:16px;margin-top:8px;\n    border: 0px solid #eee;\n    background: #eee;\n    padding: 25px 15px;\n}  @media only screen and (max-width: 780px) {.class-desript{padding:5%;}\n.text-t-color{color:#00abf6;}\n.img-uvss{float:right;margin-top:-16%;}\n.mySlides.fades .col-md-4 img {\n    margin-left: 0%;margin-bottom:8%;\n}\n section#contact-us {\n    padding-bottom: 20px;\n}.uvs-boxes p{ min-height:30px;}\n\t.uvs-boxes h4{  min-height:30px; } \n\t\n\t.span.uvs-span{font-size: 18px;}\n\n} .mySlides.fades .col-md-4{padding-left:0;}\n',
              }}
            />
          </div>
        </div>
        <div style={{ background: "#eeeeee54" }}>
          <div className="container">
            <div className="slideshow-container">
              <div className="slider">
                <input
                  type="radio"
                  name="slider"
                  title="slide1"
                  defaultChecked="checked"
                  className="slider__nav"
                />
                <input
                  type="radio"
                  name="slider"
                  title="slide2"
                  className="slider__nav"
                />
                <input
                  type="radio"
                  name="slider"
                  title="slide3"
                  className="slider__nav"
                />
                <input
                  type="radio"
                  name="slider"
                  title="slide4"
                  className="slider__nav"
                />
                <div className="slider__inner">
                  <div className="slider__contents">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={require("./images/profile.jpg").default}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="img-uvss">
                            <img
                              src={
                                require("./images/brain-academy.jpg").default
                              }
                              alt=""
                            />
                          </div>
                          <div className="class-desript">
                            <h3>Samruddhi Patil</h3>
                            <p>
                              We have taken Drona Academy Software for our
                              classrooms and have found it to be a very useful
                              teaching and learning solution. The content is
                              well-maaped and the software is easy to use. On
                              top of that, Support is always available for any
                              help or service. We highly recommend Drona Academy
                              Software to other Academy as well.
                            </p>
                            <p className="text-t-color">
                              - Brain Booster Academy (MD)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider__contents">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={require("./images/profile.jpg").default}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="img-uvss">
                            <img
                              src={
                                require("./images/brain-academy.jpg").default
                              }
                              alt=""
                            />
                          </div>
                          <div className="class-desript">
                            <h3>Samruddhi Patil 1</h3>
                            <p>
                              We have taken Drona Academy Software for our
                              classrooms and have found it to be a very useful
                              teaching and learning solution. The content is
                              well-maaped and the software is easy to use. On
                              top of that, Support is always available for any
                              help or service. We highly recommend Drona Academy
                              Software to other Academy as well.
                            </p>
                            <p className="text-t-color">
                              - Brain Booster Academy (MD)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider__contents">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={require("./images/profile.jpg").default}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="img-uvss">
                            <img
                              src={
                                require("./images/brain-academy.jpg").default
                              }
                              alt=""
                            />
                          </div>
                          <div className="class-desript">
                            <h3>Samruddhi Patil 2</h3>
                            <p>
                              We have taken Drona Academy Software for our
                              classrooms and have found it to be a very useful
                              teaching and learning solution. The content is
                              well-maaped and the software is easy to use. On
                              top of that, Support is always available for any
                              help or service. We highly recommend Drona Academy
                              Software to other Academy as well.
                            </p>
                            <p className="text-t-color">
                              - Brain Booster Academy (MD)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider__contents">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={require("./images/profile.jpg").default}
                            alt=""
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="img-uvss">
                            <img
                              src={
                                require("./images/brain-academy.jpg").default
                              }
                              alt=""
                            />
                          </div>
                          <div className="class-desript">
                            <h3>Samruddhi Patil 3</h3>
                            <p>
                              We have taken Drona Academy Software for our
                              classrooms and have found it to be a very useful
                              teaching and learning solution. The content is
                              well-maaped and the software is easy to use. On
                              top of that, Support is always available for any
                              help or service. We highly recommend Drona Academy
                              Software to other Academy as well.
                            </p>
                            <p className="text-t-color">
                              - Brain Booster Academy (MD)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qik-pricing" className="qik-pricing">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ textAlign: "center", marginBottom: "7%" }}
            >
              <span className="uvs-span">Pricing</span>
              <h2>
                App subscription
                <hr
                  className="section-line-border1"
                  style={{ background: "#00abf6" }}
                />
              </h2>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="uvs-classics">
                    <table className="uvs-table">
                      <caption>
                        Customize Pack 1<br />
                        <span className="uvs-lines" />
                      </caption>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ color: "#00abf6" }}>
                              50% discount
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <strong>
                              <strike>$999</strike>
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>$450</h2> Per Month
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td className="select-td">
                            <button className="btn btn-uvs">
                              Choose Plan &nbsp;&nbsp;
                              <i className="fa fa-angle-right"> </i>
                              <i className="fa fa-angle-right"> </i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="uvs-classics-vs">
                    <table className="uvs-table">
                      <caption style={{ color: "#fff" }}>
                        Annual Pack 3<br />
                        <span className="uvs-linevs" />
                      </caption>
                      <tbody>
                        <tr>
                          <td>
                            <h2 style={{ color: "#fff" }}>$990</h2> Per Month
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td className="select-td">
                            <button className="btn btn-primary">
                              Choose Plan &nbsp;&nbsp;
                              <i className="fa fa-angle-right"> </i>
                              <i className="fa fa-angle-right"> </i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="uvs-classics">
                    <table className="uvs-table">
                      <caption>
                        Customize Pack 4 <br />
                        <span className="uvs-lines" />
                      </caption>
                      <tbody>
                        <tr>
                          <td>
                            <span style={{ color: "#00abf6" }}>
                              50% discount
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <strong>
                              <strike>$999</strike>
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2>$450</h2> Per Month
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-check" aria-hidden="true" />
                            It is a long established fact that
                          </td>
                        </tr>
                        <tr>
                          <td className="select-td">
                            <button className="btn btn-uvs">
                              Choose Plan &nbsp;&nbsp;
                              <i className="fa fa-angle-right"> </i>
                              <i className="fa fa-angle-right"> </i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12 container-text-center">
              <span className="uvs-span">Contact us</span>
              <h2>
                Let's create progress <br />
                together <hr className="section-line-border1" />
              </h2>
            </div>
            <div className="col-md-6">
              <img
                src={require("./images/contact.svg").default}
                width="100%"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="form-uvsl">
                <br />
                <br />
                Name <input type="text" name="name" className="form-control" />
                Email Address
                <input type="text" name="name" className="form-control" />
                Mobile Number
                <input type="text" name="name" className="form-control" />
                Description
                <textarea className="form-control" defaultValue={""} />
                <input
                  type="submit"
                  className="btn btn-primary btn-lg"
                  text="Submit"
                  style={{ width: "216px", textAlign: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>
                  <Link to="/">
                    <img src={require("./images/logo.svg").default} alt="" />
                  </Link>
                </h4>
                <p>
                  Supercharge your business with 50+ integrated business
                  applications. With Qik Cloud Stack, you can speedup, automate
                  and bring transparency to your business activities. Experience
                  the power of cloud to increase your business productivity by
                  20%.
                </p>
              </div>
              <div className="col-md-4 text-center-uvs">
                <h4>Contact</h4>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    marginTop: "20px",
                  }}
                >
                  <li style={{ marginBottom: "13px" }}>Email: hello@qik.ai</li>
                  <li>
                    Phone: +91 9503122314
                    <br />
                    <br />
                  </li>
                </ul>
              </div>
              <div className="col-md-4 text-right-uvs">
                <h4>Always reachable on</h4>
                <div className="social-links" style={{ marginTop: "20px" }}>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      outlineColor: "transparent",
                      borderColor: "transparent",
                      outline: "none",
                    }}
                  >
                    <img
                      src={require("./images/linkedin.svg").default}
                      alt=""
                    />
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      outlineColor: "transparent",
                      borderColor: "transparent",
                      outline: "none",
                    }}
                  >
                    <img
                      src={require("./images/gmail.svg").default}
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p style={{ textAlign: "center" }}>
              All rights reserved © 2023
              <strong>
                <span>
                  <a href="/" target="_blank">
                    Qik.Ai
                  </a>
                </span>
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Academy;
