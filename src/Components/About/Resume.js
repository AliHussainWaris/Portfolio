import React from "react";

export const Resume = () => {
  return (
    <>
      <div className="sm:flex flex-row mt-8 w-4/5 mx-auto">
        <div className="space-y-4">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-700">EDUCATION</h1>
            <div className="ml-2">
              <div>
                <h2 className="text-lg font-bold text-sky-500">
                  Matriculation
                </h2>
                <h3 className="text-md">2005 - 2017</h3>
              </div>
              <div>
                <h2 className="text-md font-bold text-gray-500">
                  WAPDA Boys Model High School , Lahore , Punjab , Pakistan
                </h2>
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="ml-2">
              <div>
                <h2 className="text-lg font-bold text-sky-500">
                Diploma of Associate Engineering in Electrical Technology.
                </h2>
                <h3 className="text-md">2017 - 2020</h3>
              </div>
              <div>
                <h2 className="text-md font-bold text-gray-500">
                  Punjab Poly Technical Institute, Lahore , Punjab , Pakistan
                </h2>
              </div>
            </div>
          </div>
          <div className="text-left">
            <div className="ml-2">
              <div>
                <h2 className="text-lg font-bold text-sky-500">
                  Bachelor of Science in Artificial Intelligence.
                </h2>
                <h3 className="text-md">2021 - PRESENT</h3>
              </div>
              <div>
                <h2 className="text-md font-bold text-gray-500">
                  Unversity of Managment and Technology, Lahore , Punjab , Pakistan
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-600">Professional Experience</h1>
            <div className="ml-2">
              <div>
                <h2 className="text-lg font-bold text-sky-500">
                  Intern MERN Stack Developer
                </h2>
                <h3 className="text-md">2020 - 2020</h3>
              </div>
              <div>
                <h2 className="text-md font-bold text-gray-500">
                  Offroad Studio , Lahore , Punjab , Pakistan
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
