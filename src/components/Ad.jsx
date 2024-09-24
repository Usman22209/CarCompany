import React from "react";

function Ad({ text, sub, src }) {
  return (
    <div
      className={`sm:w-[48%] w-full border relative bg-[#232A47] pb-[90px] text-white shadow-md shadow-gray-500 BG1 p-5 rounded backg`}
    >
      <div id="info" className="">
        <h1 className="text-3xl w-[60%] font-semibold">{text}</h1>
        <p className="w-[60%] text-sm py-4">{sub}</p>
        <button className="px-4 py-2 text-[14px] hover:bg-gray-200 text-[#232A47] bg-white rounded font-semibold">
          Rental Car
        </button>
      </div>
      <img
        src={`${src}.png`}
        className="w-[60%] h- drop-shadow-md shadow-black bottom-2 right-[10%] absolute"
        alt=""
      />
    </div>
  );
}

export default Ad;
