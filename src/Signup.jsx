import React from "react";

export default function Signup() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitError, setSubmitError] = React.useState(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only submit if not already submitted
    if (submitSuccess) {
      setSubmitError("You have already sent a message.");
      return;
    }

    // Clear error
    setSubmitError(null);
    setSubmitError(false);

    console.log(email, message);

    // Validate that email is set
    if (email === "") {
      setSubmitError("Please enter an email address");
      return;
    }

    // Validate that email is the right form
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }

    // @todo - send email
    setSubmitSuccess(true);
  };

  return (
    <section className="signup-section" id="signup">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">We would love to hear from you!</h2>
            <form
              className="form-signup"
              id="contactForm"
              onSubmit={handleSubmit}
            >
              {/* <!-- Email address input--> */}
              <div className="row input-group-newsletter">
                <div className="col">
                  <input
                    className="form-control"
                    id="emailAddress"
                    type="email"
                    placeholder="Enter your email address..."
                    aria-label="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-primary"
                    id="submitButton"
                    type="submit"
                  >
                    Send!
                  </button>
                </div>
              </div>
              <div className="row input-group-newsletter">
                <div className="col">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              {submitError && (
                <div className="invalid-feedback mt-2">{submitError}</div>
              )}
              {submitSuccess && (
                <div id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2 text-white">
                    <div className="fw-bolder">
                      Your message was sent. Thank you!
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
