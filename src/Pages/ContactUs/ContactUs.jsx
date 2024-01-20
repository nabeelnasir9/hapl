import { useState, useEffect } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons from react-icons
import "./ContactUs.css"; // Renamed CSS file
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const YorkContactUs = () => {
  const [message, setMessage] = useState("");
  const messages = ["Leave us a message", "Get in touch with us!"];
  let [messageIndex, setMessageIndex] = useState(0);
  let [charIndex, setCharIndex] = useState(0);
  let [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 80; // for example, deleting speed is faster

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < messages[messageIndex].length) {
        setMessage(
          (prevValue) => prevValue + messages[messageIndex][charIndex]
        );
        setCharIndex((prevValue) => prevValue + 1);
      } else if (isDeleting && charIndex > 0) {
        setMessage((prevValue) =>
          messages[messageIndex].substring(0, prevValue.length - 1)
        );
        setCharIndex((prevValue) => prevValue - 1);
      } else if (charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prevValue) => (prevValue + 1) % messages.length);
      } else {
        setIsDeleting(true);
        setTimeout(() => typingEffect, 1000); // Wait for a second before starting to delete
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [message, charIndex, isDeleting, messageIndex, messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hxhqwu7",
        "template_fn5dxhe",
        e.target,
        "HQGOsxvFXg98PetQw"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); // Reset the form fields
          toast.success("Message sent successfully!"); // Display success toast
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send the message. Please try again later."); // Display error toast
        }
      );
  };

  return (
    <div className="york-contactus-container">
        <div className="ExpertiseStart_heading">
          Get <span style={{ color: "#fff" }}>In Touch With Us</span>
        </div>
      <div className="contactus-container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="contactus-form-container">
          <h2 className="contactus-header">
            To have our catalog or product sample:{" "}
            <span style={{ color: "#cb2000" }}>{message}</span>
          </h2>
          <form className="contactus-user-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              className="contactus-input-name"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className="contactus-input-email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              className="contactus-input-phone"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
            />

            <label htmlFor="services">Services:</label>
            <select
              className="contactus-input-service"
              id="services"
              name="services"
            >
              <option value="General Querry">General Querry</option>
              <option value="3D Virtual Tour (Matterport)">
                3D Virtual Tour (Matterport)
              </option>
              <option value="Aerial Photo / Video">Leather Auxiliaries</option>
              <option value="3D Rendering (CGI)">Water Treatment Auxiliaries</option>
              <option value="Video Tours">Textile Auxiliaries</option>
              <option value="Property Website">Sugar Industries Auxiliaries</option>
              <option value="Virtual Staging">Paper & Pulp Auxiliaries</option>
            </select>

            <label htmlFor="message">Message:</label>
            <textarea
              className="contactus-input-message"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button className="contactus-send-button" type="submit">
              SEND
            </button>
          </form>
        </div>
        {/* <div className="contactus-image-container">
        <img className="contactus-image" src={Contact} alt="Contact Us" />
      </div> */}
      </div>
    </div>
  );
};

export default YorkContactUs;
