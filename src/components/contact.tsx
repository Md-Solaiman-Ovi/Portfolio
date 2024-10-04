import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  // Using React state to capture form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle change in form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target; // Destructure the target
    setFormData((prev) => ({ ...prev, [name]: value })); // Update state
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.name, // Sender's name
      to_name: "Ovi", // Optional: Add recipient name
      from_email: formData.email, // Sender's email
      subject: formData.subject, // Subject of the email
      message: formData.message, // Message content
    };

    emailjs
      .send(
        "service_f9ot7gh", // Replace with your EmailJS Service ID
        "template_g4db6zo", // Replace with your EmailJS Template ID
        emailData, // Pass the data object instead of a form reference
        "N3YwqCsjLIbTUCvmw", // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("check ", result);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        },
      );

    // Reset the form data state after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="flex flex-col gap-5 px-4 xl:px-0">
      <h2 className="mb-6 text-center text-4xl font-bold text-teal-500 lg:text-start">
        Get In Touch
      </h2>
      <p className="mb-8 text-center text-black dark:text-gray-400 lg:text-start">
        Feel free to reach out to me for collaboration, project inquiries, or
        any questions. You can connect with me via email, or find me on
        LinkedIn. I’m always open to discussing new opportunities and sharing
        ideas!
      </p>

      <div className="flex flex-col justify-center gap-10 lg:flex-row">
        <div className="flex w-full flex-col gap-4 px-28 text-center text-white lg:w-1/2">
          <article className="group flex flex-col items-center justify-center rounded-lg bg-teal-600 p-4 transition-all hover:border-[1px] hover:border-teal-500 hover:bg-transparent hover:text-black dark:hover:text-white">
            <HiOutlineMail className="group-hover:text-teal-500" />
            <h4>Email</h4>
            <h5>mdsolaimanovi@gmail.com</h5>
            <a
              href="mailto:mdsolaimanovi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-teal-500"
            >
              Send a message
            </a>
          </article>

          <article className="group flex flex-col items-center justify-center rounded-lg bg-teal-600 p-4 transition-all hover:border-[1px] hover:border-teal-500 hover:bg-transparent hover:text-black dark:hover:text-white">
            <FaFacebookMessenger className="group-hover:text-blue-500" />
            <h4>Messenger</h4>
            <h5>Md Solaiman Ovi</h5>
            <a
              href="https://www.messenger.com/t/100013116103489/"
              target="__blank"
              rel="noopener noreferrer"
              className="group-hover:text-blue-500"
            >
              Send a message
            </a>
          </article>

          <article className="group flex flex-col items-center justify-center rounded-lg bg-teal-600 p-4 transition-all hover:border-[1px] hover:border-teal-500 hover:bg-transparent hover:text-black dark:hover:text-white">
            <FaWhatsapp className="group-hover:text-green-500" />
            <h4>Whatsapp</h4>
            <h5>+8801738477664</h5>
            <a
              href="https://wa.me/+8801738477664"
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-green-500"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form
          className="flex w-full flex-col gap-4 lg:w-1/2"
          onSubmit={sendEmail}
        >
          <input
            className="rounded-lg border-2 border-teal-500 bg-transparent p-4 text-white"
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-lg border-2 border-teal-500 bg-transparent p-4 text-white"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-lg border-2 border-teal-500 bg-transparent p-4 text-white"
            type="text"
            name="subject"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            className="rounded-lg border-2 border-teal-500 bg-transparent p-4 text-white"
            name="message"
            rows={10}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="flex justify-end">
            <button className="rounded-md bg-teal-500 p-2" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
