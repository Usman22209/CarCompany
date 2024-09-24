import React, { useState } from "react";

const Pick = ({ purpose }) => {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput(true);
  };
  const [showInput2, setShowInput2] = useState(false);


  const handleClick2 = () => {
    setShowInput2(true);
  };
  return (
    <div className="bg-white rounded-lg shadow-lg w-full md:w-[45%] flex-col p-4 flex space-x-8">
      <div className="flex items-center space-x-2">
        <img src="mark.png" className="w-4" alt="" />
        <span className="font-semibold">{purpose}</span>
      </div>
      <div className="flex flex-row py-2 gap-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Locations</span>
          <div className="text-gray-400 text-sm flex items-center space-x-1">
            <select className="text-gray-400 text-sm flex items-center space-x-1 bg-white border border-gray-300 rounded p-1">
              <option>Select your city</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Miami</option>
            </select>
            <span></span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Date</span>
          <div className="text-gray-400 text-sm flex items-center space-x-1">
            <div>
              {!showInput ? (
                <button onClick={handleClick}>Select your date</button>
              ) : (
                <input type="date" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold">Time</span>
          <div className="text-gray-400 text-sm flex items-center space-x-1">
            <div>
              {!showInput2 ? (
                <button onClick={handleClick2}>Select your time</button>
              ) : (
                <input type="time" />
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Pick;
