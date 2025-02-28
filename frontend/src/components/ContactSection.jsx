import React, { useState, useEffect } from "react";
import { linkedinLogo, githubLogo, gmail } from "../assets";

const ContactSection = () => {
  const formSpreeLink = import.meta.env.VITE_FORMSPREE_LINK; // Replace with your Formspree link
  const [status, setStatus] = useState("");
  const [submissionCount, setSubmissionCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("submissionCount");
    if (savedCount) {
      setSubmissionCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submissionCount >= 5) return;

    const formData = new FormData(e.target);

    const response = await fetch(formSpreeLink, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      const newCount = submissionCount + 1;
      setSubmissionCount(newCount);
      localStorage.setItem("submissionCount", newCount);
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className=" max-w-[1440px] py-10 w-full  flex flex-col gap-8 justify-center items-center transition-all ease-in-out duration-300"
    >
      <h1 className="font-montserrat font-bold text-2xl">Contact</h1>
      <div className="w-full flex flex-wrap justify-center  gap-4 md:gap-8 xl:gap-12 px-[24px]  py-10 xl:py-12 bg-white xl:rounded-lg">
        <a
          href="mailto:prathammhavale38@gmail.com"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img
            src={gmail}
            alt="Gmail"
            loading="lazy"
            className="w-5 xl:w-6 h-auto"
          />
          <p className="hidden md:flex text-sm xl:text-lg font-inter font-semibold">
            prathammhavale38
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/pratham-mhavale"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img
            src={linkedinLogo}
            loading="lazy"
            alt="LinkedIn"
            className="w-5 xl:w-6 h-auto"
          />
          <p className="hidden md:flex text-sm xl:text-lg font-inter font-semibold">
            pratham-mhavale
          </p>
        </a>

        <a
          href="https://github.com/prathammhavale"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 items-center justify-center"
        >
          <img
            src={githubLogo}
            alt="GitHub"
            loading="lazy"
            className="w-5 xl:w-6 h-auto"
          />
          <p className="hidden md:flex text-sm xl:text-lg font-inter font-semibold">
            prathammhavale
          </p>
        </a>
      </div>
      <p className="text-gray-500 text-[14px]">Submission limit 5</p>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="my-8 mx-[24px] md:mx-[34px] flex flex-wrap md:grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          className="w-full  px-4 py-2 text-sm xl:text-lg font-inter rounded-md shadow-md"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="w-full  px-4 py-2 text-sm xl:text-lg font-inter rounded-md shadow-md"
        />
        <textarea
          rows={4}
          name="message"
          placeholder="message"
          className="w-full  px-4 py-2 text-sm xl:text-lg font-inter rounded-md shadow-md"
        ></textarea>
        <button
          type="submit"
          disabled={submissionCount >= 5}
          className={`w-full md:w-1/2 md:h-1/2 md:mt-auto px-4 py-3 text-sm xl:text-lg font-medium font-montserrat rounded-md ${
            submissionCount >= 5
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white"
          }`}
        >
          {submissionCount >= 5 ? "Limit Reached" : "Send"}
        </button>
      </form>

      {status && (
        <p className="text-center text-sm xl:text-lg text-gray-600 mt-2">
          {status}
        </p>
      )}
      {submissionCount >= 5 && (
        <p className="text-center text-red-500 mt-2">
          You've reached the submission limit.
        </p>
      )}
    </div>
  );
};

export default ContactSection;
