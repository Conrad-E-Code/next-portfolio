"use client";
import {useState, useEffect} from 'react'
import Project from '/components/Project'
import { Context } from "/context/Context";
import { useContext } from "react";
import SearchBar from '../../components/SearchBar';

const Projects = () => {
  const { projects, setProjects } = useContext(Context);
  const [readyState, setReadyState] = useState("Fetching Projects...")
  const [search, setSearch] = useState('')
  function filterProjects() {
    return projects.filter((project) => {
      return project.name.toLowerCase().includes(search)
    })
  }
  useEffect(() => {
    getProjects()
  }, [])
  const projClass = "py-3 bg-fixed bg-cover overflow-y-scroll"
  function getProjects() {
    // console.log("get projects", process.env.GET_PROJECTS_PATH)
  fetch(`/api/get-projects`)
  .then( r => r.json())
  .then( data => {
    console.log(data, "MY DATA");
    setProjects(data);
    setReadyState("ready")
  })
  .catch( err => {
    console.log(err, "fetch error page.js")
    setReadyState("Couldn't fetch projects")
  })
  }
  return (
    <div className='pt-16 bg-fixed bg-cover custom-img h-screen overflow-y-scroll overflow-x-hidden'>
      <SearchBar setSearch={setSearch} />
      {projects && !search ? projects.reverse().map((proj, pIdx) => {
      return (
        <div key={proj._id} className={projClass}>
          <Project
            idx={pIdx}
            name={proj.name}
            description={proj.description}
            points={proj.points}
            ytId={proj.ytId}
            tech={proj.tech}
            github={proj.github}
            live={proj.live}
            image={proj.image}
            id={proj._id}
          />
        </div>
      );
    }): null}
    {projects && search ? filterProjects().map((proj, pIdx)=> {      return (
        <div key={proj._id} className={projClass}>
          <Project
            idx={pIdx}
            name={proj.name}
            description={proj.description}
            points={proj.points}
            ytId={proj.ytId}
            tech={proj.tech}
            github={proj.github}
            live={proj.live}
            image={proj.image}
            id={proj._id}
          />
        </div>
      );}) : null}
    {readyState !== "ready" ? <div className="text-textColorLight text-5xl font-semibold ">{readyState}</div> : null}
    
    </div>
  )
}

export default Projects