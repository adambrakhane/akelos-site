import React from "react";
import emailjs from "emailjs-com";
import ReCaptchaV2 from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LckrH8fAAAAADmqeeiQycpWfhMrhKxjdgHm262_";

export default function Signup() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitError, setSubmitError] = React.useState(null);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [token, setToken] = React.useState("");

  const handleToken = (token) => {
    console.log(token);
    setToken(token);
  };

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

    // Validate that the recaptcha token is done
    if (token === "" || token === null) {
      setSubmitError("Please complete the captcha.");
      return;
    }

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

    // Get recaptcha token then send the email

    emailjs
      .send(
        "service_cl03vwo",
        "template_mhq6ruj",
        {
          reply_to: email,
          from: email,
          message_html: message,
          message_text: message,
          "g-recaptcha-response": token,
        },
        "eLnJsEzEf-YxLE2yg"
      )
      .then(
        (result) => {
          setSubmitSuccess(true);
        },
        (error) => {
          console.error(error.text);
          console.error(error);
          setSubmitError(error.text);
        }
      );
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
              <div className="row">
                <div className="col">
                  <ReCaptchaV2
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleToken}
                    size="normal"
                    className="g-recaptcha"
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
