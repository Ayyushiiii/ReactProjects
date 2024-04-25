import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  //I used below codes (onSubmit) from https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18f53a43-4055-43dd-bf3e-3013f441e15b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact from or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />{" "}
            <a href="mailto:contact@edusity.dev">contact@edusity.dev</a>
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />{" "}
            <a href="tel:+11234567890">+1 123 456 7890</a>
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=77+Massachusetts+Ave,+Cambridge+MA+02139,+United+States"
              target="_blank"
              rel="noopener noreferrer"
            >
              77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />{" "}
          </button>
        </form>
        <span> {result} </span>
      </div>
    </div>
  );
};

export default Contact;
