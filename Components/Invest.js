import React from 'react'

export default function Invest() {
  return (
    <section style={{ backgroundColor: "rgb(245 243 234)" }} className="py-4">
    <div className="row p-3">
      <div className="col">
        <h1 className="display-5 fw-bold mb-3">
          SEO gains momentum by increasing your investment
        </h1>
        <p className="fs-5">
          SEO is often referred to as the 'long-term game' in the marketing world.
          The more time you invest, the faster the benefits of SEO will accrue. As
          your website content (ie blog, service pages, etc.)
        </p>
        <div className="my-4">
          <p className="fs-5">
            Search engine optimization ensures that your online presence is both
            articulated properly and discoverable to potential customers.
          </p>
          <div>
            <a
              href="form.html"
              className="text-decoration-none text-dark p-3 rounded my-3"
              style={{ backgroundColor: "rgb(255 153 102)" }}
            >
              <span>Explore More</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col pt-5">
        <img src="sales.png" />
      </div>
    </div>
  </section>
  
  );
}

