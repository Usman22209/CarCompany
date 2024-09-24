import React from "react";

const Footer = () => {
  return (
    <footer className="text-[#232A47] py-10 *:pl-6 sm:pl-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="logo.png" className="w-[200px]  mx-auto" alt="" />
          <p className="mt-4 text-gray-500">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">About</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business Relation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Community</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Socials</h3>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-4 h-[1px] bg-gray-300"></div>
      <div className="container pb-4 font-bold mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2024 RENTRUSH. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy & Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
