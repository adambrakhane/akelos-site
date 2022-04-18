import React from "react";

export default function PrimaryContent({ href, title, img, children }) {
  return (
    <section className="about-section text-center" id={href ? href : ""}>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8">
            {title && <h2 className="text-white mb-4">{title}</h2>}
            <p className="text-white-50">{children}</p>
          </div>
        </div>
        {img && <img className="img-fluid" src={img} alt="..." />}
      </div>
    </section>
  );
}
