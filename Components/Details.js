import React from 'react'

export default function Details() {
  return (
    <section className="py-5" style={{ backgroundColor: "rgb(27 28 29)" }}>
    <div className="container py-4 px-3">
      <div className="row p-4" style={{ backgroundColor: "rgb(255 153 102)" }}>
        <div className="col-md-6">
          <h1>Are you ready to increase your SEO ranking?</h1>
        </div>
        <div className=" col-md-2 offset-md-3">
          <p className="text-light bg-dark p-2 m-2">Let's Get Started</p>
        </div>
      </div>
    </div>
    <div className="row p-4 text-light">
      <div className="col-md-5">
        <img src="web logo-2.png" alt="logo" className="p-2" />
        <p className="text-light  fs-5 p-2">
          We are strategic &amp; creative digital agency who are focused on user
          experience, mobile, social, data gathering and promotional offerings.
        </p>
        <a href="#" className="text-light p-2 text-decoration-none">
          yourdemo@gmail.com
        </a>
        <div className="row">
          <div className=" col-1 ">
            <a href="Xzect">
              <img src="Xzect logo.png" style={{ height: 40, width: 40 }} />
            </a>
          </div>
          <div className=" col-1 ">
            <a href="facebook">
              <img src="facebook logo.png" style={{ height: 40, width: 40 }} />
            </a>
          </div>
          <div className=" col-1 ">
            <a href="Instagram">
              <img src="Instagram logo.png" style={{ height: 40, width: 40 }} />
            </a>
          </div>
          <div className=" col-1 ">
            <a href="Github">
              <img src="Github logo.png" style={{ height: 40, width: 40 }} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <p className="fs-4">Primary Pages</p>
        <ul className="text-decoration-none list-unstyled text-white lh-4 fs-5">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="col-md-2">
        <p className="fs-4">Utility Pages</p>
        <ul className="text-decoration-none list-unstyled text-white lh-4 fs-5">
          <li>Signup</li>
          <li>Login</li>
          <li>404 Not Found</li>
          <li>Password Reset</li>
        </ul>
      </div>
      <div className="col-md-2">
        <p className="fs-4">Resources</p>
        <ul className="text-decoration-none list-unstyled text-white lh-4 fs-5">
          <li>Support</li>
          <li>Privacy Policy</li>
          <li>Terms &amp; Conditions</li>
          <li>Strategic Finance</li>
          <li>Video Guide</li>
        </ul>
      </div>
    </div>
    <h3 className="fs-5 p-1 text-light offset-md-3">
      © Copyright 2024, All Rights Reserved by PixcelsThemes
    </h3>
  </section>  
  );
}

