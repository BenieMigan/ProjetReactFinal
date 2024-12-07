import React from "react";
import "./style.css";
import "./tailwind.css";
import { Link } from "react-router-dom";

interface MainProps {
  mytitle: string;
  title: string;
  image: string;
  description: string;
  mytitle1: string;
  title1: string;
  image1: string;
  description1: string;
  mytitle2: string;
  title2: string;
  image2: string;
  image3: string;
  image4: string;
  description2: string;
  
}

  const Droit: React.FC<MainProps> = ({mytitle,title,image, description,mytitle1,title1,image1,image4,description1,
                                      mytitle2,title2,image2,image3,description2}) => {
  
  return (
    <div>
       {/* Les elements flexé a droite*/}
  {/* div droite */}
<div className="flex-1 md:w-4/5 bg-gray-100">
        {/* Les éléments flexé à droite */}
<div className="flex justify-center items-center min-h-screen p-4 mt-0 bg-gray-100">
  <div className="max-w-full md:max-w-[720px] mx-auto bg-gray-100">
    <div className="relative border-4 border-inherit  flex flex-col w-full h-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="py-4 bg-gray-100">
        <div className="flex items-center bg-gray-100">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md  border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
          />
          <svg
            className="h-8 w-8 text-black ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
      </div>

      {/* Premier élément flexé à droite */}
      <div className="bg-gray-100">
        <br /><b className="ml-5 ">Recent Posts</b>
        <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image3} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />

        <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image4} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />
        <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image2} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />
            <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image3} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        <hr className="border-t border-gray-300 w-96 my-4" />
            <div className="p-2 flex">
            <div className="relative w-2/5 overflow-hidden text-gray-700 bg-gray-100  bg-clip-border  shrink-0">
              <img src={image2} alt="card-image" className=" w-28 h-auto"/>
            </div>
            <div className="p-2">
              <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                <p className="text-red-600">startups concset</p>
              </h6>
              <p>Lyft launching cross-platform service this week</p>
            </div>
        </div>
        
      </div>
    </div>
        
  </div>
</div>
{/* Deuxième élément */}
  <div className="p-4 bg-gray-100 border-4  ">
    <h2 className="text-xl font-bold text-gray-700 mb-4">Tags</h2>
    <div className="flex flex-wrap gap-2">
      <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span>
       <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span> <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span> <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        sitdoor
      </span> <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span>
      <span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        outdoor
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        startups
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span><span className="bg-gray-300 text-red-800 border border-gray-300 px-3 py-1 hover:bg-red-500 hover:text-red-800 transition-colors cursor-pointer">
        modern
      </span>
  </div>
</div>

</div>
    </div>
  );
}

export default Droit;
