import React, { useRef } from "react";
import "../main-style-academy.css";
import { Link } from "react-router-dom";
const Business = () => {
  const ref = useRef([]);
  const handleClick = (idx, name) => {
    // console.log("ref.current[idx || 1] ", ref.current);
    ref.current[idx || 1].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <header id="header">
        <div className="containervs">
          <div className="row">
            <div className="col-md-2 col-sm-2 col-2">
              <a href="/">
                <img
                  src={require("./images/logo.svg").default}
                  alt="Qik.ai"
                  className="img-logovs"
                />
              </a>
            </div>
            <div className="col-md-6 col-3">
              <div className=" nav-menu d-none d-lg-block float-right" style={{ padding: 4 }}>
                {/* <nav className="nav-menu d-none d-lg-block float-right"> */}
                <ul>
                  <li>
                    <div onClick={() => handleClick(1, "qik-intro")}>Home</div>
                    {/* <a href="#qik-intro">Home</a> */}
                  </li>
                  <li>
                    <div onClick={() => handleClick(2, "qik-features")}>
                      Features
                    </div>
                    {/* <a href="#qik-features">Features</a> */}
                  </li>
                  <li>
                    <div onClick={() => handleClick(3, "qik-pricing")}>
                      Pricing
                    </div>
                    {/* <a href="#qik-pricing">Pricing</a> */}
                  </li>
                  <li>
                    <div onClick={() => handleClick(4, "contact-us")}>
                      Contact Us
                    </div>
                    {/* <a href="#contact-us">Contact Us</a> */}
                  </li>
                </ul>
                {/* </nav> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6 text-right">
              <div className="us-contact">
                <i className="fa fa-envelope" /> hello@qik.ai
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        ref={(el) => (ref.current[1] = el)}
        id="qik-intro"
        className="qik-intro"
      >
        <div className="containervs">
          <div className="col-md-12 row">
            <div className="col-md-6 introtext">
              <h2>
                Qik Coaching Institute App on Cloud
                <hr className="section-line-border mhide" />
                <hr className="section-line-border1 mshow" />
              </h2>
              <p>
                Undoubtedly the simplest yet most powerful software on cloud to
                automate &amp; grow your coaching institute. Trusted by 2000+
                institutions worldwide.
              </p>
              <button
                onClick={() => handleClick(3, "qik-pricing")}
                // href="#qik-pricing"
                className="btn btn-primary btn-lg"
                style={{ marginBottom: "40px", borderRadius: "4px" }}
              >
                Get Business App
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={require("./images/academy-intro.png")}
                alt=""
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <h5 style={{ textAlign: "center" }}>
                Qik Coaching Institute Software
              </h5>
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '   .introtext h2{text-align:left;}\n    .boxus { \n        align-self: flex-end;\n        animation-duration: 2s;\n        animation-iteration-count: infinite;\n        margin: 0 auto 0 auto;\n        transform-origin: bottom;\n    }\n    .bounce-1us {\n        animation-name: bounce-1us;\n        animation-timing-function: linear;\n    }\n    @keyframes bounce-1us {\n        0%   { transform: translateY(0); }\n        50%  { transform: translateY(-20px); }\n        100% { transform: translateY(0); }\n    }\n\ttable.table.uvstable {\n    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);margin-bottom:50px;  -webkit-transition: all 0.25s linear;\n  transition: all 0.25s linear;\n  -webkit-box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);\n          box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);    min-height: 200px;\n}\n \n \n .section-line-border {\n        position: relative;\n        overflow: hidden;\n        height: 4px;\n        width: 120px;\n        border:none;\n        background:#00abf6;\n        margin:15px 0;\n    }\n    .section-line-border::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        width: 60px;\n        background:#00abf6;\n    } .section-line-border1 {\n        position: relative;\n        overflow: hidden;\n        height: 4px;\n        width: 120px;\n        border:none;\n        background:#00abf6;\n        margin:15px auto;\n    }\n    .section-line-border1::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        width: 60px;\n        background:#00abf6;\n    }\n.us-contact {\n    font-size: 14px;\n    line-height: 28px;color: #001e4b;\n}.uvstable td img {\n    width: 48px;\n    height: 48px;\n}.btn-primary{border-radius: 4px;}\n\n.container, .container-lg, .container-md, .container-sm, .container-xl {\n    max-width: 96%;\n}.mshow{display:none;}.text-center-uvs{text-align:center;}.text-right-uvs{text-align:right;}\n  @media only screen and (max-width: 780px) { section#contact-us {\n    padding-bottom: 20px;\n}  .mhide{display:none;}.introtext h2{text-align:center;}.mshow{display:block;} .span.uvs-span{font-size: 18px;}\n#qik-pricing,#qik-features {\n    padding-bottom: 10px;\n}\n.text-center-uvs{text-align:left;}.text-right-uvs{text-align:left;}\n }\n\nhtml{overflow-x:hidden;}.form-uvsl .form-control {\n    margin-bottom:16px;margin-top:8px;\n    border: 0px solid #eee;\n    background: #eee;\n    padding: 25px 15px;\n} \n\t',
        }}
      />
      <section
        ref={(el) => (ref.current[2] = el)}
        id="qik-features"
        className="qik-features"
      >
        <div className="containervs">
          <div className="col-md-12">
            <div className="col-md-12 containervs-text-center">
              <span className="uvs-span">Core Features</span>
              <h2>
                Next Generation features that will help you manage &amp; grow
                your coaching institute seamlessly.
                <hr className="section-line-border1" /> <br />
                <br />
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf1.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Student Record</h4>
                        <p>
                          Record of student details with photographs personal
                          &amp; parent contact details, batches, previous year
                          marks, etc.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf2.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Test Management</h4>
                        <p>
                          Facility to add Test details &amp; marks, enter
                          students marks, auto alerts to students &amp; parents
                          for marks obtained. Record of all tests &amp; scored
                          marks studentwise
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf3.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Fees Management</h4>
                        <p>
                          Keep track of all payments datewise. Alert for paid
                          amount &amp; remaining amountm facilityto print
                          receipts.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf4.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Assign Homework</h4>
                        <p> </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf5.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>I-Card Printing</h4>
                        <p>
                          Be ahead &amp; unique from competitors by providing
                          I-cards to students. Facility to design own institute
                          I-card by uploading header &amp; footer logo. Generate
                          Individual or Bulk I-cards batchwise &amp; print.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf6.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Videos</h4>
                        <p> </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf7.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Custom Setting</h4>
                        <p>
                          Management of all modules configuration settings such
                          as SMS API Setting, facility to add/update institute
                          details with logo, receipt header or footer images
                          etc.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf8.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Mobile Application</h4>
                        <p>
                          Single App which gives information about Attendance,
                          Tests, Exam results, Holidays and Fees details to
                          students and parents.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/cf9.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Reports</h4>
                        <p>
                          All full-fledged reports with filter &amp; sort to
                          generate custom reports as per need. Complete set of
                          reports such as enquires, registrations, attendance,
                          tests, expences, Results student or batchwise &amp;
                          many more
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/Enquiry.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>Enquiry Management</h4>
                        <p>
                          Keep track on all enquiries with status &amp; follow
                          up date reminder for coverting open enquiries into
                          admissions. Enquiry report where can review all
                          Prospect, Converted &amp; Closed enquiries.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/Biometric.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>Biometric Attendance</h4>
                        <p>
                          Track daily batch-wise attendance of students, send
                          daily attendance alerts to absentees, push attendance
                          from biometric machine to cloud in real time
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/Subjectwise.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>Subjectwise Progress</h4>
                        <p>
                          Subjectwise complete progress report of student for
                          parents. All performance record such as total present
                          days &amp; absent days, Fees Summary, Total tests
                          &amp; obtained marks, Remarks &amp; many more
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/sms.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>Auto SMS</h4>
                        <p>
                          Automatically send SMS alerts to parents for
                          subjectwise absentee, fees payment, test results,
                          holidays etc. Facility to send custom messages like
                          for batch timing, festival wishes or b’day wish etc.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/Exam.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>Test</h4>
                        <p>
                          Facility to add test &amp; details such as title,
                          description &amp; out of marks. Test marks &amp;
                          absent for test alerts to parents. Storing all test
                          records studentwise.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/smstemplete.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>SMS Templates</h4>
                        <p>
                          Save all event based SMS templates such as New
                          registration, Absentee, Test Marks, Holidays etc. Can
                          create custom template &amp; save for future use.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/email.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>Email Alerts</h4>
                        <p>
                          Send custom email alerts to parents
                          batchwise/subjectwise
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img src={require("./images/omr.svg").default} alt="" />
                      </td>
                      <td>
                        <h4>OMR Integration</h4>
                        <p>
                          Automatic checking of OMR Sheets for MCQs.
                          Automatically update marks scored and analyse
                          question-wise performance. OMR results alert to
                          parents via SMS.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/expense.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4>Manage Expense</h4>
                        <p>
                          Keep track of all expense entries &amp; salaries.
                          Create categories &amp; heads as per expenses. Keep
                          record of all payment transactions with bank account
                          details.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <table className="table uvstable">
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("./images/subscription.svg").default}
                          alt=""
                        />
                      </td>
                      <td>
                        <h4> Online Subscription</h4>
                        <p>
                          Easy &amp; speedy modes to top up your subscription
                          packages. Netbanking, Credit/Debit Card &amp; Paytm.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={(el) => (ref.current[3] = el)}
        id="qik-pricing"
        className="qik-pricing"
      >
        <div className="containervs">
          <div className="row">
            <div
              className="col-md-12"
              style={{ textAlign: "center", marginBottom: "7%" }}
            >
              <span className="uvs-span">Pricing</span>
              <h2>
                App subscription <hr className="section-line-border1" />
              </h2>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="uvs-classics">
                    <table className="uvs-table">
                      <caption>
                        Customize Pack 1<br />
                        <span className="uvs-line" />
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
                        <span className="uvs-line" />
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
      <section
        ref={(el) => (ref.current[4] = el)}
        id="contact-us"
        style={{ paddingTop: "100px" }}
      >
        <div className="containervs">
          <div className="row">
            <div className="col-md-12 containervs-text-center">
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="footer-top">
          <div className="containervs">
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
                      style={{ marginLeft: "20px" }}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="containervs">
          <div className="copyright">
            <p style={{ textAlign: "center" }}>
              All rights reserved © 2023
              <strong>
                <span>
                  <Link to="/">Qik.Ai</Link>
                </span>
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Business;
