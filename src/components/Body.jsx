import React from "react";
import Ad from "./Ad";
import Pick from "./Pick";
import Card from "./Card";

function Body() {
  return (
    <main>
      <div
        id="firstSection"
        className="w-full flex sm:flex-row flex-col justify-around"
      >
        <Ad
          text="The Best Platform for Car Rental"
          sub="Ease of doing a car rental safely and reliably. Of course at a low price."
          src="car1"
        />
        <Ad
          text="Easy way to rent a car at a low price"
          sub="Providing cheap car rental services and safe and comfortable facilities."
          src="car2"
        />
      </div>
      <div
        id="secondSection"
        className="w-full mt-5 flex md:flex-row justify-around items-center flex-col"
      >
        <Pick purpose={"Pick-up"} />
        <button className="p-2 shadow hover:shadow-lg shadow-orange-300 rounded h-fit bg-[#C17D3C]">
          <img src="swap.png" className="" alt="" />
        </button>
        <Pick purpose={"Drop-off"} />
      </div>
      <img src="logo.png" className="w-[200px] mx-auto my-4" alt="" />
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <Card
          carName="Nissan GT-R"
          rating={5
          }
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />{" "}
        <Card
          carName="Nissan GT-R"
          rating={3.8}
          reviewers="440+"
          subtotal={80.0}
          tax={5.0}
          totalPrice={85.0}
        />
      </div>
      <center>
        <button className="bg-[#C17D3C] text-white px-3 py-1 rounded-sm my-3 mx-auto">
          Show more car
        </button>
      </center>
    </main>
  );
}

export default Body;
