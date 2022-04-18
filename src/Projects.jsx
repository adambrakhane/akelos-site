import React from "react";

function FeaturedProject({ title, img, children }) {
  return (
    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
      <div className="col-xl-8 col-lg-7">
        <img className="img-fluid mb-3 mb-lg-0" src={img} alt="..." />
      </div>
      <div className="col-xl-4 col-lg-5">
        <div className="featured-text text-center text-lg-left">
          <h4>{title}</h4>
          <p className="text-black-50 mb-0">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Project({ align, title, img, children }) {
  const content = (
    <div className="bg-black text-center h-100 project">
      <div className="d-flex h-100">
        <div className="project-text w-100 my-auto text-center text-lg-left">
          <h4 className="text-white">{title}</h4>
          <p className="mb-0 text-white-50">{children}</p>
          <hr className="d-none d-lg-block mb-0 ms-0" />
        </div>
      </div>
    </div>
  );

  const image = <img className="img-fluid" src={img} alt="..." />;

  return (
    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
      <div className="col-lg-6">{align === "left" ? image : content}</div>
      <div className="col-lg-6">{align === "left" ? content : image}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        {/* <!-- Featured Project Row--> */}
        <FeaturedProject title="Our Projects" img="img/las-tablas01.jpg">
          We've assisted with water projects in Senegal, Guatemala, and
          Honduras.
          <br />
          <br />
          Akelos was established in 2016 in a small office of the University of
          Illinois at Urbana-Champaign. A diverse group of students who had
          experience working on developmental water projects recognized the
          disparity between engineering solutions and social integration. They
          decided to use their collective skills to help collaborate with
          existing projects to better address the specific needs of each
          individual project.
        </FeaturedProject>
        {/* <!-- Project One Row--> */}
        <Project
          align="left"
          title="What is Contextual Engineering?"
          img="img/lima.jpg"
        >
          The people we serve come from backgrounds and cultures different than
          our own. Solutions not only impact their health, but also their
          lifestyle. Here at Akelos, we want to ensure that our systems
          integrate seamlessly into local communities' ways of life.
          <br />
          <br />
          We collaborate with local non-governmental organizations (NGOs) that
          understand the culture and mindset of the communities we are helping.
          These NGOs connect us to local leaders who define the project for us,
          so that we can collaborate on a solution that is supported by all
          parties.
        </Project>
        <Project
          align="right"
          title="How is Akelos different?"
          img="img/road.jpg"
        >
          Akelos is a 501(c)(3) non-profit that combats the notion of a
          one-size-fits-all solution by finding the unique challenges that are
          present in each community. We focus on rural international communities
          that are often overlooked by larger international water organizations.
          Our aim is to understand the technical issues arising from the lack of
          water but also strive to understand the people who need it in order to
          limit failure and maximize impact.
          <br />
          <br />
          Understanding the lens with which each community views the world helps
          us think creatively and craft customized solutions that address needs
          unique to a locale. We encourage community leaders to be involved at
          every step of the planning, designing and implementation process.
        </Project>
      </div>
    </section>
  );
}
