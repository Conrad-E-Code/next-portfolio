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
  id,
  idx,
}) => {
  const { textClr, projects, setProjects } = useContext(Context);
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  function renderDetails(name) {
    const techList = tech.map((t, index) => {
      return (
        <div
          key={t}
          style={{ color: Colors[textClr] }}
          className="text-xl font-semibold transform-gpu hover:scale-110 transition-transform  duration-300"
        >
          <ImageCard projectName={name} name={t} spinIdx={index} />
        </div>
      );
    });
    const pointsList = points.map((p) => {
      return (
        <li>
          <div
            key={p}
            style={{ color: Colors[textClr] }}
            className="text-xl font-semibold"
          >
            {p}
          </div>
        </li>
      );
    });

    function handleDelete() {
      function stateHelper() {
        const newProjects = projects
          .slice(0, idx)
          .concat(projects.slice(idx + 1));
        setProjects(newProjects);
      }
      stateHelper();                                         //dummy mode enabled, doesn't send fetch request to server removes from DOM
      // fetch(`http://localhost:3000/api/get-projects/`, {
      //   method: "POST",
      //   body: JSON.stringify({ id: id }),
      // })
      //   .then((r) => r.json())
      //   .then((data) => {
      //     console.log(data, "MY DATA");
      //     stateHelper();
      //   })
      //   .catch((err) => console.log(err, "DELETE ERROR"));
    }

    if (showDetails) {
      console.log(techList.length, "MY TECH LIST");
      return (
        <div className="">
          <ul className="w-4/5 lg:w-2/3 max-sm:w-[95%] mx-auto space-y-4 bg-secondaryColor/40">{pointsList}</ul>
          <div
            className={`grid grid-cols-2 sm:grid sm:grid-cols-3 h-full gap-4 justify-center items-center p-10`}
          >
            {techList}
            <button onClick={handleDelete}>DELETE</button>
          </div>
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
        className="bg-primaryColor/60 sm:w-[85vw] w-[95vw] flex flex-col items-center gap-4 pb-10 pt-5 rounded-lg shadow-lg hover:bg-primaryColor/80 transition ease-in-out duration-700"
      >
        <div className="bg-accentColorB flex justify-center w-[45vw] mt-5 rounded text-xl font-semibold">
          {name}
        </div>
        Click to see details.
        <div className="w-4/5 lg:w-2/3 max-sm:w-[95%]">
          <MyVideo
            videoUrl={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0`}
          />
        </div>
        {renderDetails(name)}
      </div>
    </div>
  );
};

export default Project;
