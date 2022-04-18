import React from "react";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Akelos</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              CREATING CONTEXTUALIZED ENGINEERING SOLUTIONS AROUND THE WORLD
            </h2>
            <a className="btn btn-primary" href="#projects">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
