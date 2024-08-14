import React from 'react'

export default function Plan() {
  return (
    <section style={{ backgroundColor: "rgb(245 243 234)" }} className="py-2">
    <div className="container-fluid my-5 py-4">
      <h1 className="display-md-6 display-sm-4 fw-bold col-md-6 offset-md-3 pb-5 mb-5">
        Explore our SEO service plans and choose your plan
      </h1>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-3 bg-light m-4 p-4 rounded">
          <img src="price-1.svg" />
          <div className="pt-3">
            <h3>Silver Plan</h3>
          </div>
          <div className="pb-5">
            <span className="display-2 fw-bold">$30</span>
            <span>/Per month</span>
          </div>
          <ul className="list-unstyled">
            <li>
              {" "}
              <img src="li element.png" /> 50 key phrases optimized
            </li>
            <li>
              <img src="li element.png" /> 30 pages optimized
            </li>
            <li>
              <img src="li element.png" /> 6 CRO assets per quarter
            </li>
            <li>
              <img src="li element.png" /> 8 custom dashboards
            </li>
            <li>
              <img src="li element.png" /> Revenue tracking dashboard
            </li>
          </ul>
          <div className=" bg-dark text-light p-3 text-center ">Choose Plan</div>
        </div>
        <div className="col-md-3 bg-light m-4 p-4 rounded">
          <img src="price-2.svg" />
          <div className="pt-1">
            <h3>Gold Plan</h3>
          </div>
          <div className="pb-5">
            <span className="display-2 fw-bold">$50</span>
            <span>/Per month</span>
          </div>
          <ul className="list-unstyled">
            <li>
              {" "}
              <img src="li element.png" /> 200 key phrases optimized
            </li>
            <li>
              <img src="li element.png" /> 40 pages optimized
            </li>
            <li>
              <img src="li element.png" /> 12 CRO assets per quarter
            </li>
            <li>
              <img src="li element.png" /> 10 custom dashboards
            </li>
            <li>
              <img src="li element.png" /> Revenue tracking dashboard
            </li>
          </ul>
          <div
            className=" text-light p-3 text-center "
            style={{ backgroundColor: "rgb(255 153 102)" }}
          >
            Choose Plan
          </div>
        </div>
        <div className="col-md-3  bg-light m-4 p-4 rounded">
          <img src="price-3.svg" />
          <div className="pt-1">
            <h3>Diamond Plan</h3>
          </div>
          <div className="pb-5">
            <span className="display-2 fw-bold">$80</span>
            <span>/Per month</span>
          </div>
          <ul className="list-unstyled">
            <li>
              {" "}
              <img src="li element.png" /> 300 key phrases optimized
            </li>
            <li>
              <img src="li element.png" /> 60 pages optimized
            </li>
            <li>
              <img src="li element.png" /> 24 CRO assets per quarter
            </li>
            <li>
              <img src="li element.png" /> 12 custom dashboards
            </li>
            <li>
              <img src="li element.png" /> Revenue tracking dashboard
            </li>
          </ul>
          <div className=" bg-dark text-light p-3 text-center ">Choose Plan</div>
        </div>
      </div>
    </div>
  </section>  
   );
}

