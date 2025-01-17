import React from "react";
import { useContext } from "react";
import { counterContextObj } from "./CounterContext";

function Home() {
  const { counter, setCounter } = useContext(counterContextObj);

  return (
    <div className="text-center">
      <h2 className="text-center mt-4 text-primary">Home</h2>
      <img
        src="https://getwallpapers.com/wallpaper/full/5/2/3/785495-welcome-wallpapers-1920x1080-for-tablet.jpg"
        width="400px"
        className="mt-3 ms-5 mb-5"
        alt=""
      />
      <p className="lead mt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic maxime
        voluptatibus facilis laudantium quis culpa eos minus! Aut, adipisci a
        magni recusandae neque blanditiis quis! Quae a illo, incidunt distinctio
        eaque dignissimos error cumque asperiores recusandae itaque id inventore
        ducimus, enim fugiat aspernatur quidem corrupti excepturi. Odit ullam
        soluta nulla?
      </p>
    </div>
  );
}

export default Home;
