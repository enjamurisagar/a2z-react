import React, { useState } from "react";
import "../css/home.css";

const Home = () => {
  const [circles, setCircles] = useState([
    {
      id: 1,
      bg: "yellow",
      count: 0,
    },
  ]);

  const increment = (circleId) => {
    //random color
    const set = "ABCEDF0123456789";
    var randColor = "#";
    for (var i = 0; i < 6; i++) {
      randColor += set[Math.floor(Math.random() * 16)];
    }
    setCircles((prevCircles) =>
      prevCircles.map((circle) => {
        if (circle.id === circleId) {
          return {
            ...circle,
            count: circle.count + 1,
            bg: randColor,
          };
        }
        return circle;
      })
    );
  };
  console.log(Date.now());

  const duplicate = () => {
    if (circles.length === 10) return;
    setCircles((prevCircles) => {
      const oldCircles = [...prevCircles];
      //random color
      const set = "ABCEDF0123456789";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += set[Math.floor(Math.random() * 16)];
      }
      const newCirlce = {
        id: Date.now(),
        count: 0,
        bg: color,
      };
      oldCircles.push(newCirlce);
      return oldCircles;
    });
  };

  return (
    <div className="w-full h-full grid grid-cols-2 my-10">
      {circles.map((circle, i) => (
        <div className="grid m-5" key={i}>
          <div className="circle flex justify-center">
            <div
              className="circle-div p-[10%] rounded-full"
              style={{ backgroundColor: circle.bg }}
            ></div>
          </div>
          <div className="data p-3 grid justify-center">
            <div className="counter">
              <span>Count: {circle.count}</span>
            </div>
            <div className=" bg-green-200 p-2 my-2 rounded-md border-2 border-black">
              <button onClick={() => increment(circle.id)}>Increment</button>
            </div>
            <div className=" bg-green-200 p-2 my-2 rounded-md border-2 border-black">
              <button onClick={() => duplicate()}>Duplicate</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
