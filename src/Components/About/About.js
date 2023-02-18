import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Resume } from "./Resume";
import { Skill } from "./Skill";

export const About = () => {
  const same = [
    {
      title: "Birthday : ",
      data: "08-12-2001",
    },
    {
      title: "Age : ",
      data: "21",
    },
    {
      title: "Website : ",
      data: "www.mohammedalihussainnwaris.com",
    },
    {
      title: "Email : ",
      data: "mohammedalihussainnwaris@gmail.com",
    },
    {
      title: "Phone ",
      data: "+92-324-8962621",
    },
    {
      title: "City : ",
      data: "Lahore , Pakistan",
    },
    {
      title: "Freelancer : ",
      data: "Available",
    },
  ];
  return (
    <>
      <div className="h-full relative mt-52 lg:mt-4" id="About">
        <div className="w-4/5 mx-auto text-center">
          <h1 className="text-3xl underline underline-offset-8 decoration-sky-500">
            About
          </h1>
          <p className="mt-2">
            Welcome to the portfolio of a UI/UX Designer and MERN Stack
            Developer. Our mission is to create intuitive and engaging user
            experiences through the combination of captivating design and
            cutting-edge technology. As a UI/UX Designer, we have a passion for
            crafting digital products that not only look good, but also provide
            a seamless and enjoyable experience for users. Our design philosophy
            is rooted in creating intuitive interfaces that are easy to navigate
            and visually appealing.
          </p>
          <div className="md:flex flex-row mx-auto mt-4">
            <img
              src="https://i.ibb.co/LNpQX1J/320075919-1348011149302017-8643250846350799781-n.jpg"
              className="md:w-[300px] h-[300px] md:block rounded-full"
              alt="Person"
            />
            <div className="md:float-left w-3/4 mt-4 md:mt-0 md:ml-3 grid place-items-center">
              <h2 className="text-md md:text-xl text-sky-500">
                UI / UX DESIGNER & MERN STACK DEVELOPER
              </h2>
              {same.map((datas) => (
                <div className="md:flex flex-row">
                  <h3 className="text-sm md:text-md text-gray-500 flex flex-row">
                    <ChevronRight className="text-sky-500 text-xl" />
                    <span className="font-bold text-gray-700">
                      {datas.title}
                    </span>
                    <span>{datas.data}</span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-2">
            As a MERN Stack Developer, we have a deep
            understanding of the latest web technologies and have expertise in
            building full-stack web applications using the MERN (MongoDB,
            Express.js, React.js, and Node.js) stack. We are committed to
            delivering fast, scalable, and secure applications that meet the
            unique needs of our clients. Together, our unique combination of
            skills allows us to create beautiful, functional, and technically
            sound web applications that meet the needs of both users and
            business stakeholders. Browse our portfolio to see some of our
            recent work and contact us to learn more about how we can help bring
            your next project to life.
          </p>
          <h1 className="text-3xl underline underline-offset-8 decoration-sky-500 mt-4 md:mt-4">
            Skills
          </h1>
          <Skill />
          <h1 className="text-3xl underline underline-offset-8 decoration-sky-500 mt-4 md:mt-4">
            Resume
          </h1>
          <Resume/>
        </div>
      </div>
    </>
  );
};
