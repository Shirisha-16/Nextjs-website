// components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ backgroundColor: "rgb(245 243 234)" }}>
  <div className="container-fluid p-5">
    <div className="row ">
      <div className="col-sm-6 col-lg-8">
        <h1 className="display-2 fw-bold lh-1">
          Bring additional qualified traffic to your website
        </h1>
        <p className="col-8 pt-2">
          SEO is a digital marketing strategy that helps your website appear in
          relevant search results in search engines. It involves various
          techniques from using to keywords on your pages to earning links to
          your site.
        </p>
        <div className="bg-light py-3 px-1 col-6">
          <span>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="border-0 shadow-none bg-light"
            />{" "}
          </span>
          <span
            style={{ backgroundColor: "rgb(255 153 102)" }}
            className="px-5 py-2 rounded"
          >
            Subscribe
          </span>
        </div>
        <div className="pt-4">
          <span>
            <img src="star.svg" />
          </span>
          <span>
            <img src="star.svg" />
          </span>
          <span>
            <img src="star.svg" />
          </span>
          <span>
            <img src="star.svg" />
          </span>
          <span>
            <img src="star.svg" />
          </span>
          <span className="fw-bold">( 4.8 out of 5 Rating)</span>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="position-absolute m-0 mb-md-5">
          <img src="bar.png" />
        </div>
        <div className="position-relative m-5 px-5 d-none d-lg-block">
          <img src="graph.png" />
        </div>
        <div className="d-none d-lg-block ">
          <img src="accelerator.png" />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

