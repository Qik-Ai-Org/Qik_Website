import React from "react";

const AboutUs = () => (
  <section id="about-us" className="about-us-section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">About Us</h2>
          <hr className="section-line-border1" style={{ margin: "20px auto" }} />
        </div>
        <div className="col-md-8 mx-auto" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ fontSize: "18px", lineHeight: 1.9 }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Qik Cloud Stack</strong>, powered by Qik Innovations Private Limited, is your gateway to next-generation business automation. With over 50+ integrated AI-first applications, we help organizations streamline compliance, HR, legal, asset management, and more—trusted by 50,000+ businesses worldwide and delivering the best value for your money.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Founded in 2020, <strong>Qik Innovations</strong> is a global leader in technology solutions, specializing in Enterprise Managed Services, custom software, mobile and web app development. Our team of highly skilled engineers brings deep expertise in AI, ML, IoT, and cloud platforms, serving clients across BFSI, healthcare, retail, and telecom sectors.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Our mission is to innovate, act, and deliver—empowering businesses to achieve more through intelligent automation and secure, scalable solutions. We pride ourselves on customer-centricity, proactive support, and a commitment to quality, driven by a systematic approach.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              With our teams spread across the globe, we combine global reach with local expertise. Whether you’re a multinational or a growing startup, Qik Cloud Stack is your partner for AI first digital transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
