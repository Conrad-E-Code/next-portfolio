import React from "react";
import Image from "next/image";
import MyVideo from "./video/MyVideo";
import { useState } from "react";
import Colors from "/constants/colors";
import { useContext } from "react";
import { Context } from "/context/Context";
import ImageCard from "./ImageCard";
const Project = ({
  name,
  description,
  tech,
  github,
  live,
  image,
  points,
  ytId,
  id
}) => {
  const { textClr } = useContext(Context);
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  function renderDetails() {
    const techList = tech.map((t) => {
      return (
        <div
          key={t}
          style={{ color: Colors[textClr] }}
          className="text-xl font-semibold"
        >
          <ImageCard name={t} />
        </div>
      );
    });
    const pointsList = points.map((p) => {
      return (
        <div
          key={p}
          style={{ color: Colors[textClr] }}
          className="text-xl font-semibold"
        >
          {p}
        </div>
      );
    });

    function handleDelete() {
      fetch(`http://localhost:3000/api/get-projects/`, {
        method: "DELETE",
        body: JSON.stringify({id: id}),
        
      }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data, "MY DATA");
        })
      .catch((err) => console.log(err, "DELETE ERROR"));
    }

    if (showDetails) {
      console.log(techList.length, "MY TECH LIST");
      return (
        <div
          className={`grid grid-cols-3 h-full gap-4 justify-center items-center p-10`}
        >
          {/* {pointsList} */}
          {techList}
          <button onClick={handleDelete}>DELETE</button>
        </div>
      );
    }
  }

  return (
    <div
      style={{ color: Colors[textClr] }}
      className="flex flex-col items-center"
    >
      <div
        onClick={handleShowDetails}
        className="bg-primaryColor/60 w-[85vw] flex flex-col items-center gap-4 pb-10 pt-5 rounded-lg shadow-lg hover:bg-primaryColor/80 transition ease-in-out duration-700"
      >
        <div className="bg-accentColorB flex justify-center w-[45vw] mt-5 rounded text-xl font-semibold">
          {name}
        </div>
        Click to see details.
        <div className="w-4/5 lg:w-2/3 max-sm:w-[95%]">
          <MyVideo
            videoUrl={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&mute=1&loop=1&rel=0`}
          />
        </div>
        {renderDetails()}
      </div>
    </div>
  );
};

export default Project;
