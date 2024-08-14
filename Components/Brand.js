import Image from 'next/image';

import React from 'react'

export default function Brand() {
  return (
    <section>
    <div className="row p-5 m-5">
      <div className="col">
        <img src="brand-1.png" />
      </div>
      <div className="col ">
        <img src="brand-2.png" />
      </div>
      <div className="col d-sm-none d-md-block">
        <img src="brand-3.png" />
      </div>
      <div className="col d-sm-none d-md-block">
        <img src="brand-4.png" />
      </div>
      <div className="col d-sm-none d-md-block">
        <img src="brand-5.png" />
      </div>
    </div>
  </section>
   
  )
}

