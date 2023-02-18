import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Envelope, GeoAlt, Phone } from "react-bootstrap-icons";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_msq6o9d",
        "template_r850pek",
        form.current,
        "mJaJivJ_uwpoumffi"
      )
      .then(
        (result) => {
          var x = document.getElementById("alert");
          x.style.display = "block";
          setTimeout(() => {
            x.style.display = "none";
          }, 1000);
        },
        (error) => {
          var x = document.getElementById("alert1");
          x.style.display = "block";
          setTimeout(() => {
            x.style.display = "none";
          }, 1000);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="w-4/5 mx-auto mb-10 mt-8 space-y-4 sm:space-y-0" id="Contact">
        <h1 className="text-3xl text-center underline underline-offset-8 decoration-sky-500">
          Contact
        </h1>
        <div className="sm:flex flex-row space-y-4 sm:space-y-4">
          <div className="space-y-4 mt-10 sm:mt-0">
            <div className="flex flex-row">
              <GeoAlt className="text-5xl bg-sky-100 p-2 rounded-full hover:bg-sky-500 hover:text-white" />
              <div className="flex flex-col ml-2">
                <span className="text-2xl">Location</span>
                <span className="text-sm">
                  WAPDA Head Staff Lahore , Punjab , Pakistan
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <Envelope className="text-5xl bg-sky-100 p-3 rounded-full hover:bg-sky-500 hover:text-white" />
              <div className="flex flex-col ml-2">
                <span className="text-2xl">Email</span>
                <span className="text-sm">
                  mohammedalihussainwaris@gmail.com
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <Phone className="text-5xl bg-sky-100 p-3 rounded-full hover:bg-sky-500 hover:text-white" />
              <div className="flex flex-col ml-2">
                <span className="text-2xl">Phone</span>
                <span className="text-sm">+92-311-4482203</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form-group w-4/5 mx-auto"
            >
              <div className="flex flex-row space-x-4">
                <div className="mb-3 w-1/2">
                  <label
                    for="exampleFormControlInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Name :
                  </label>
                  <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlInput"
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3 w-1/2">
                  <label
                    for="exampleFormControlInput2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlInput1"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-3 w-full">
                  <label
                    for="exampleFormControlInput2"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Subject :
                  </label>
                  <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlInput2"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-3 w-full">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Your Message :
                  </label>
                  <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
              <div className="text-center mb-5">
                <input
                  type="submit"
                  className="border border-sky-500 w-1/2 rounded-full p-2 hover:bg-sky-500 hover:text-white"
                />
              </div>
            </form>
          </div>
        </div>
        <div
          id="alert"
          style={{ display: "none" }}
          className="p-4 mb-4 text-sm text-green-800 rounded-lg border border-green-400 bg-green-100 text-green-400 alert"
          role="alert"
        >
          <span className="font-medium">Your Email Succesfully Sent!</span>.
        </div>
        <div
          id="alert1"
          style={{ display: "none" }}
          class="p-4 mb-4 text-sm text-red-800 rounded-lg border border-red-400 bg-red-100 text-red-400 alert1"
          role="alert"
        >
          <span class="font-medium">Your Email not Sent!</span>
        </div>
      </div>
    </>
  );
};
