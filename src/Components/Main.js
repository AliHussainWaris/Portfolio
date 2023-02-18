import React from "react";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home/Home";
import { Portfolio } from "./Portfolio/Portfolio";
import { Services } from "./Service/Service";
import { Sidebar } from "./Sidebar/Sidebar";

export const Main = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute">
            <Home/>
            <About/>
            <Portfolio/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
        <div className="fixed">
          <Sidebar />
        </div>
      </div>
    </>
  );
};
