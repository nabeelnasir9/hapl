import "./Contact.css";
import GetIn from "../../assets/get.png";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
const Contact = () => {
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_446vg88",
//         "template_rs2lmby",
//         form.current,
//         "UAsngTjxzGxFPZM5M"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           toast.success("Email successfully sent!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log(error.text);
//           toast.error("There was an error sending the email.");
//         }
//       );
//   };
  return (
    <div className="unique-full-bg" id="contact">
      {/* <ToastContainer /> */}
      <div className="unique-contact-container">
        <div className="unique-form-section">
          <h2
            className="Contact_head"
            style={{ borderBottom: "2px solid #01923f" }}
          >
            Contact Us
          </h2>
          <h3>
            Customise your own engineering team of{" "}
            <span style={{ color: "#01923f" }}>
              software engineers and start work in 24 hours!
            </span>
          </h3>
          <form id="unique-contact-form">
            <div className="unique-input-group">
              <label htmlFor="unique-name">Name</label>
              <input
                type="text"
                id="unique-name"
                name="from_name"
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div className="unique-input-group">
              <label htmlFor="unique-email">Email</label>
              <input
                type="email"
                id="unique-email"
                name="from_email"
                required
                placeholder="Enter Your Email"
              />
            </div>
            <div className="unique-input-group">
              <label htmlFor="unique-phone">Phone</label>
              <input
                type="tel"
                id="unique-phone"
                name="from_phone"
                required
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="unique-input-group">
              <label htmlFor="unique-message">Message</label>
              <textarea
                id="unique-message"
                name="message"
                rows="4"
                required
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button className="contact_button" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="unique-image-section">
          <img src={GetIn} alt="Descriptive Alt Text" />
        </div>
      </div>
    </div>
  );
};

export default Contact;