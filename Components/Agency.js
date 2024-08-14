import React from 'react'

export default function Agency() {
  return (
    <section>
  <div
    className="container-fluid mt-5 py-5"
    style={{ backgroundColor: "rgb(245 243 234)" }}
  >
    <div className="container float-md-end float-start col-md-6 p-3">
      <span>
        <h1 className="fw-bold">
          SEO agency that will evolve your search performance
        </h1>
        <p>
          These days, no business can’t to ignore Search Engine Optimization.
          SEO should plays a part in your online marketing strategy as it helps
          people to find you online. Over time that leads to more sales.
        </p>
        <div className="row">
          <div className="col">
            <h1
              className="display-1 fw-bold"
              style={{ color: "rgb(255 153 102)" }}
            >
              98%
            </h1>
            <p className="fs-5">Average Conversion Rate</p>
          </div>
          <div className="col">
            <h1
              className="display-1 fw-bold"
              style={{ color: "rgb(255 153 102)" }}
            >
              60M
            </h1>
            <p className="fs-5">Traffic Generated</p>
          </div>
        </div>
      </span>
    </div>
    <span>
      <img src="content-img-1.png" />
    </span>
  </div>
</section>
  );
}

