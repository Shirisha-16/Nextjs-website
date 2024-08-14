import React from 'react'

export default function Review() {
  return (
    <section className="p-4">
  <div className="p-3 py-5">
    <h1 className="display-md-6 display-sm-4 fw-bold col-md-6 offset-md-3 pb-5 mb-5">
      We are the best from our client's point of view
    </h1>
    <div>
      <img
        src="testimonial-user.png"
        className="float-md-end float-start col-md-4 p-2"
      />
    </div>
    <div className="p-2">
      <img src="icon decor.svg" />
      <h4 className="col-md-6">
        “We are very satisfied with the SEO services we have received from Masco
        so far. Although SEO has only been around for a short time, we are
        already seeing a positive step in our page rank. We would recommend
        Masco's SEO services to anyone looking to increase their web exposure."
      </h4>
      <p className="h5 pt-2">Anjilia Smith</p>
      <p>Marketing Officer at Company</p>
      <div>
        <a href="#" className="text-decoration-none text-dark">
          <span
            className="btn-lg border-none"
            style={{ backgroundColor: "rgb(255 153 102)" }}
          >
            View 1000 + Happy Clients Review
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
 );
}

