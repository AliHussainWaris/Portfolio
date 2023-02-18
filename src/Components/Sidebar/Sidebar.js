import React from "react";
import {
  Envelope,
  HddStack,
  House,
  LayoutTextWindow,
  Person,
} from "react-bootstrap-icons";
import { HashLink as Link } from "react-router-hash-link";

export const Sidebar = () => {
    const data = [
        {
            to : "#Home",
            title : "Home",
            Icon : <House/>
        },
        {
            to : "#About",
            title : "About",
            Icon : <Person/>
        },
        {
            to : "#Portfolio",
            title : "Resume",
            Icon : <LayoutTextWindow/>
        },
        {
            to : "#Services",
            title : "Services",
            Icon : <HddStack/>
        },
        {
            to : "#Contact",
            title : "Contact",
            Icon : <Envelope/>
        },
    ]
  return (
    <>
        <ul className="h-screen grid content-center p-2 space-y-3 text-md sm:text-2xl w-1/12">
            {data.map((datas)=>(
                <li className="text-grey-500 w-12 rounded-full border border-sky-500 p-3 hover:bg-sky-600 hover:text-white hover:w-full group">
                    <Link to={datas.to} className="flex flex-row" smooth>
                        <i className="text-grey-500">{datas.Icon}</i>
                            <span className="text-base ml-1 invisible group-hover:visible">{datas.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </>
  );
};
