import React from "react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer id="footer" className="animated animatedFadeInDown fadeInDown">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>
              <a href="/">
                <img src="/images/logo.png" alt="Qik.ai Logo" style={{ width: "80px", height: "auto" }} />
              </a>
            </h4>
            <p>
              Supercharge your business with 50+ integrated business
              applications. With Qik Cloud Stack, you can speedup, automate
              and bring transparency to your business activities. Experience
              the power of cloud to increase your business productivity by
              20%. Every app in our ecosystem is free and open source.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Products</h4>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                marginTop: "20px",
                lineHeight: "2",
              }}
            >
              <li><Link href="/products/opensign" style={{ color: "inherit" }}>OpenSign — E-Signature</Link></li>
              <li><Link href="/products/doctrack" style={{ color: "inherit" }}>DocTrack — Document Analytics</Link></li>
              <li><Link href="/products/openclm" style={{ color: "inherit" }}>OpenCLM — Contract Management</Link></li>
              <li><Link href="/products/openbuzz" style={{ color: "inherit" }}>OpenBuzz — Social Automation</Link></li>
              <li><Link href="/products" style={{ color: "inherit" }}>All products →</Link></li>
            </ul>
          </div>
          <div className="col-md-4 text-right-uvs">
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
            <h4 style={{ marginTop: "24px" }}>Always reachable on</h4>
            <div className="social-links" style={{ marginTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  outlineColor: "transparent",
                  outline: "none",
                }}
              >
                <img
                  src="/images/linkedin.svg"
                  alt="Business solution icon"
                />
              </button>
              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  outlineColor: "transparent",
                  outline: "none",
                }}
              >
                <img
                  src="/images/gmail.svg"
                  alt="Business solution icon"
                  style={{ marginLeft: "20px" }}
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
          All rights reserved © {currentYear}
          <strong>
            <span>
              <a href="/" target="_blank">
                © Qik Innovations private limited
              </a>
            </span>
          </strong>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
