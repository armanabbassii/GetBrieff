import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const recaptchaRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      setErrorMessage("Please verify the Captcha.");
    } else {
      try {
        const response = await fetch(
          "https://connect.mailerlite.com/api/subscribers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer YOUR_API_TOKEN`, // Replace with your actual MailerLite API token
            },
            body: JSON.stringify({
              email: email,
              groups: ["117872522076096341"], // Replace with your MailerLite group ID
            }),
          }
        );

        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.message);
          return;
        }

        setSuccessMessage("Thank you for joining our newsletter!");
        setEmail(""); // Clear the input after success
        recaptchaRef.current.reset(); // Reset the Captcha after submission
      } catch (error) {
        setErrorMessage("Failed to subscribe. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      <input
        type="email"
        value={email}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <ReCAPTCHA ref={recaptchaRef} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />

      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscriptionForm;
