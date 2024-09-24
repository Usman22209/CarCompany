import React from "react";

function Nav() {
  return (
    <nav className=" flex flex-row px-8 min-h-[80px] justify-between items-center bg-gray-50">
      <div className="flex flex-row items-center">
        <img
          src="logo.png"
          alt=""
          className="w-[147px] cursor-pointer object-cover"
        />
        <div
          id="input"
          className="border rounded-full flex flex-row items-center h-8 w-[30vw] relative justify-center"
        >
          <img src="search.png" className="w-4 absolute left-3" alt="" />
          <input
            type="text"
            className="focus:outline-none text-sm rounded-full px-1 bg-transparent focus:bg-white w-[75%]"
          />
          <img src="filter.png" className="cursor-pointer rounded-full hover:bg-gray-200 w-7 p-1 absolute right-3" alt="" />
        </div>
      </div>
      <ul className="flex flex-row gap-2 list-none">
        <li>
          <img
            className="w-9 cursor-pointer hover:brightness-[80%]"
            src="like.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-9 cursor-pointer hover:brightness-[80%]"
            src="notification.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-9 cursor-pointer hover:brightness-[80%]"
            src="settings.png"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-9 cursor-pointer hover:brightness-[90%]"
            src="profil.png"
            alt=""
          />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
