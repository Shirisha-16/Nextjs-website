import React from 'react'

export default function Features() {
  return (
    <section>
  <div className="container py-4">
    <div className="pb-3">
      <h1 className="display-md-6  display-sm-4 fw-bold col-md-6 offset-md-3">
        Turn traffic with insanely SEO &amp; growth into revenue
      </h1>
    </div>
    <div className="row m-3 ">
      <div className="col-md-4 col-sm-6">
        <div className="px-5 py-3">
          <img src="feature1.svg" />
        </div>
        <h4 className="mb-3">Increases Brand Awareness</h4>
        <p className="fs-5">
          You want to stand out in your industry as a leader, but you also want
          to be seen as a relevant solution for your audience.
        </p>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="px-5 py-3">
          <img src="feature2.svg" />
        </div>
        <h4 className="mb-3">Amplifies PPC Success</h4>
        <div>
          <p className="fs-5">
            Make sure you optimize your PPC ads for both desktop and mobile
            search ads for focusing on desktop successfully.
          </p>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="px-5 py-3">
          <img src="feature3.svg" />
        </div>
        <h4 className="mb-3">Builds Customer Trust</h4>
        <p className="fs-5">
          Even with a strong SEO strategy, building customer trust in your brand
          takes time. Invest in quality content for readers.
        </p>
      </div>
    </div>
  </div>
</section>
  );
}

