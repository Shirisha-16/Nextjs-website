import React from 'react'

export default function Experts() {
  return (
    <section>
  <div className="row p-3">
    <div className="col-md-6 col-sm-8 p-3 me-md-5">
      <span className="h1 fw-bold ">
        Our SEO experts are available to assist you
      </span>
    </div>
    <div className="col-md-2 p-3 offset-md-3">
      <span
        className="btn p-3 fw-bold "
        style={{ backgroundColor: "rgb(255 153 102)" }}
      >
        Meet All Members
      </span>
    </div>
  </div>
  <div className="row p-4">
    <div className="col-md-3 col-sm-6">
      <img src="CEO.jpg" className="w-105" />
    </div>
    <div className="col-md-3 col-sm-6">
      <img src="Senior Executive.jpg" className="w-105" />
    </div>
    <div className="col-md-3 col-sm-6">
      <img src="Developer.jpg" className="w-105" />
    </div>
    <div className="col-md-2 col-sm-6">
      <img src="SEO executive.jpg" className="w-105" />
    </div>
  </div>
</section>
  );
}
