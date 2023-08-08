"use client";
import {useState, useEffect} from 'react'
import Project from '/components/Project'
const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getProjects()
  }, [])
  const projClass = "pt-16 bg-fixed bg-cover custom-img h-screen overflow-y-scroll overflow-x-hidden"
  function getProjects() {
    // console.log("get projects", process.env.GET_PROJECTS_PATH)
  fetch(`http://localhost:3001/api/projects`)
  .then( r => r.json())
  .then( data => {
    console.log(data, "MY DATA");
    setProjects(data);
  })
  .catch( err => console.log(err, "fetch error page.js"))
  }
  return (
    <div className='pt-16 bg-fixed bg-cover custom-img h-screen overflow-y-scroll overflow-x-hidden'>
      {projects ? projects.map((proj) => {
      return (
        <div key={proj._id} className={projClass}>
          <Project
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
    {projects[0] === undefined ? <div className="">Loading...</div> : null}
      
    </div>
  )
}

export default Projects