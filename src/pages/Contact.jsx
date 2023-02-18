import emailjs from "@emailjs/browser";
import { useRef, useContext, useEffect, useState } from "react";
import { IsOpenContext } from "../context/IsOpenContext";

import "../styles/Contact.css";

export default function Contact() {
  const { setBurger } = useContext(IsOpenContext);
  useEffect(() => {
    setBurger(false);
  }, []);
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreed: false,
  });
  const [error, updateError] = useState(false);
  const [styles, updateStyle] = useState("");
  const [tmessage, updatetmessge] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const sendEmail = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_w8dxu55",
        "template_3kd2m1k",
        form.current,
        "Guw6C31CD_T6V4MHV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted("Thank you, We'll get back to you");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            agreed: false,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleSubmit(event) {
    // submitToApi(formData)
    event.preventDefault();
    if (formData.message === "") {
      console.log("error");
      updateError((prev) => true);
      updateStyle("error");
      updatetmessge("Please enter a message");
    } else {
      sendEmail(event);
    }
  }
  return (
    <div>
      <div className="contact--page">
        <h1 className="contact--header">Contact Me</h1>
        <p className="contact--leading">
          Hi there, contact me to ask me about anything you have in mind
        </p>
        <form className="contact--form" onSubmit={handleSubmit} ref={form}>
          <div className="name--flex">
            <div>
              <label htmlFor="first_name">First name</label>
              <input
                required
                className="contact--form__text"
                value={formData.firstName}
                id="first_name"
                name="firstName"
                onChange={handleChange}
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <input
                required
                className="contact--form__text"
                value={formData.lastName}
                id="last_name"
                name="lastName"
                onChange={handleChange}
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            required
            className="contact--form__text"
            value={formData.email}
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="yourname@email.com"
          />
          <p className="textarea--label">Message</p>
          <textarea
            id={styles}
            value={formData.message}
            onChange={handleChange}
            className="contact--form__textarea"
            name="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
          {tmessage.length > 1 && <p className="t_error">{tmessage}</p>}
          <div className="checkbox--container">
            <input
              checked={formData.agreed}
              className={`contact--form__checkbox ${styles}`}
              type="checkbox"
              onChange={handleChange}
              id="agreed"
              name="agreed"
            />
            <label className="checkbox--label" htmlFor="agreed">
              You agree to providing your data to Deni who may contact you.
            </label>
          </div>

          <button className="contact--form__submit">Send message</button>
          {submitted.length > 0 && <p class="when_submitted">{submitted}</p>}
        </form>
      </div>
    </div>
  );
}
