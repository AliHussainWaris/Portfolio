import React from "react";
import { Database, Display, PencilSquare } from "react-bootstrap-icons";

export const Services = () => {
  const data = [
    {
      icon: <Database />,
      title: "Database",
      Para: "Database administrators are responsible for the accurate and secure use, maintenance, and development of computer databases within a variety of public and private sector organizations. Any organization that stores large amounts of information and data can employ a database administrator.",
    },
    {
      icon: <Display />,
      title: "Development",
      Para: "Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems. Developers are a key part of the IT team and may be required to modify existing software products or develop entirely new resources.",
    },
    {
      icon: <PencilSquare />,
      title: "UI / UX Design & Protype",
      Para: "UI/UX designers are responsible for designing and implementing the entire experience that a user has when interacting with a digital tool such as a website. The UI/UX Designer will work closely with our marketing team and designers to ensure seamless web/mobile design and successful implementation of UI/UX best practices and principles across all our digital platforms.",
    },
  ];
  return (
    <div id="Services">
      <h1 className="text-3xl underline underline-offset-8 decoration-sky-500 text-center mt-5 mb-8">
        Services
      </h1>
      <div className="sm:grid grid-rows-1 grid-flow-col gap-4 mt-4 w-4/5 mx-auto space-y-4 sm:space-y-0">
        {data.map((datas) => (
          <div className="border border-gray-300 rounded-3xl hover:text-sky-500 hover:shadow-2xl">
            <div className="grid justify-items-center">
              <i className="text-5xl mt-14">{datas.icon}</i>
            </div>
            <div className="text-center mt-2 w-4/5 mx-auto mt-3 mb-5">
              <h2 className="text-gray-800 text-2xl">{datas.title}</h2>
              <div className="text-center mt-4">
                <p className="text-gray-800">{datas.Para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
