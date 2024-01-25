"use client";

import { useState, FormEvent } from "react"; //use hook
import { useRouter } from "next/navigation";

//import icons
import { FaCube } from "react-icons/fa";


export default function Home() {

  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter();

  const handleSubmit = (event: FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${inputVal}`);//using ` mark in here

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">

      
      <span className="flex flex-row">
        <FaCube className="text-4xl mt-[-400px] mr-2 "/>
        <h2 className="mt-[-400px] text-4xl cursor-pointer font-mono text-red-600">Can Try!</h2>
      </span>
      

      <div className="p-10 shadow-md bg-white rounded">

        <h1 className="text-xl font-semibold mb-4 text-black">Enter Your Name: 
        </h1>
      
        <form onSubmit={handleSubmit} className="space-y-4 px-5 ml-8">
          <input type="text"
          placeholder="Type Your Name..."
          value={inputVal}
          className="text-black  w-full p-2 border border-gray-400 rounded"
          onChange={(e) => setInputVal(e.target.value)} /> 

          <button type="submit" className="w-full rounded-md py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"> Predict Data</button>
        </form>

      </div>

    </div>
  );
}
