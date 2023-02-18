import React, { useState } from "react";

export const Portfolio = () => {
  const data = [
    {
      image:"https://knowtechie.com/wp-content/uploads/2019/03/imac-on-table.jpg" ,
      title : "Website",
      select : "Web"
    },
    {
      image:"https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/02/open-source-hero.png?q=50&fit=contain&w=1140&h=&dpr=1.5" ,
      title : "APP",
      select : "Web"
    },
    {
      image:"https://cdn.dribbble.com/users/1445352/screenshots/4963430/media/bbc46cec1acb2b36f63ccaffa5ae7143.jpg?compress=1&resize=768x576&vertical=top" ,
      title : "UI / UX",
      select : "UI"
    },
  ];
  const [state , setState] = useState(data);
  const filterdata = (e)=>{
    let word = e.target.value;
    if(word === "All"){
      setState(data);
    }
    else if(word === "Website"){
      const filter  = data.filter(item=>item.select === "Web")
      setState(filter);
    }
    else if(word === "UI"){
      const filter  = data.filter(item=>item.select === "UI")
      setState(filter);
    }
  }
  return (
    <>
      <div className="w-4/5 mx-auto mb-10 mt-8 space-y-4 sm:space-y-0" id="Portfolio">
        <h1 className="text-3xl text-center underline underline-offset-8 decoration-sky-500">
          Portfolio
        </h1>
        <div className="space-y-4">
          <div className="sm:w-3/12 mx-auto mt-5">
            <ul className="flex flex-row justify-between md:text-md sm:space-x-2 md:space-y-0">
              <li>
                <button value="All" onClick={filterdata} className="border border-sky-500 p-2 rounded-full hover:bg-sky-500 hover:text-white">
                  ALL
                </button>
              </li>
              <li>
                <button value="Website" onClick={filterdata} className="border border-sky-500 p-2 rounded-full hover:bg-sky-500 hover:text-white">
                  WEBSITE
                </button>
              </li>
              <li>
                <button value="UI" onClick={filterdata} className="border border-sky-500 p-2 rounded-full hover:bg-sky-500 hover:text-white">
                  UI/UX
                </button>
              </li>
            </ul>
          </div>
          <div className="sm:grid grid-cols-3 gap-4">
            {state.map((datas)=>(
              <div class="mb-4">
              <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs   rounded-lg">
                <img
                  src={datas.image}
                  class="max-w-xs"
                  alt="Louvre"
                  />
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out bg-gray-300">
                  <div className="grid place-content-center h-full uppercase text-xl text-grasy-700">
                    <h1>{datas.title}</h1>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
