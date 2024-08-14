import React from 'react'

export default function Rank() {
  return (
    <section className="py-3" style={{ backgroundColor: "rgb(245 243 234)" }}>
  <h1 className="display-md-6 display-sm-4 fw-bold col-md-6 offset-md-3 pb-5 mb-5">
    We follow a simple, yet effective SEO ranking process
  </h1>
  <div className="row m-4 p-2">
    <div className="col-md-4 col-sm-6 ">
      <div className="ps-5">
        <span className="rounded-circle border border-dark w-25 h-25 px-4 py-3 m-5 h3">
          1
        </span>
      </div>
      <div className="p-5">
        <h2 className="fw-bold">Keyword Research</h2>
        <p className="fs-5">
          Keyword research is the process of discovering valuable search queries
        </p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="ps-5">
        <span className="rounded-circle border border-dark w-25 h-25 px-4 py-3 m-5 h3">
          2
        </span>
      </div>
      <div className="p-5">
        <h2 className="fw-bold">Link Building</h2>
        <p className="fs-5">
          Link building is a SEO technique that increases your search engine
          ranking
        </p>
      </div>
    </div>
    <div className="col-md-4 col-sm-6">
      <div className="ps-5">
        <span className="rounded-circle border border-dark w-25 h-25 px-4 py-3 m-5 h3">
          3
        </span>
      </div>
      <div className="p-5">
        <h2 className="fw-bold">Ranking</h2>
        <p className="fs-5">
          It helps a website's 1st position in the search engine results page
        </p>
      </div>
    </div>
  </div>
</section>
 );
}

