import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import apiIcon from "../../public/api-icon.png";
import elephant from "../../public/elephant.png";
import htmlIcon from "../../public/html_icon.png";
import jsIcon from "../../public/Unofficial_JavaScript_logo_2.svg.png";
import nextIcon from "../../public/Nextjs-logo.svg.png";
import railsLogo from "../../public/rails-logo.png";
import reactIcon from "../../public/React-icon.svg.png";
import rubyIcon from "../../public/ruby.png";
import tailwindIcon from "../../public/Tailwind_CSS_Logo.svg.png";
import mongoLogo from "../../public/mongo_logo_lime.png";
import cssLogo from "../../public/CSS3_logo.png";
import gitHubIcon from "../../public/github-mark-white.png"
import { set } from 'mongoose';




const SpinCounter = ({spinIdx, name, projectName}) => {
function renderIcon(name){
  switch (name) {
    case "React":
      return (
        reactIcon
      );
    case "JavaScript":
      return (
        jsIcon
      );
    case "HTML":
      return (
        htmlIcon
      );
    case "Next.js":
      return (
        nextIcon
      );
    case "Tailwind":
      return (
        tailwindIcon
      );
    case "Ruby":
      return (
        rubyIcon
      );
    case "Rails":
      return (
        railsLogo
      );
    case "MongoDB":
      return (
        mongoLogo
      );
    case "CSS":
      return (
        cssLogo
      );
    case "GitHub":
      return (
        gitHubIcon
      );
    case "PostgreSQL":
      return (
        elephant
      );
    default:
      return (
        apiIcon
      );
  }

}


    const [spinCount, setSpinCount] = useState(0);
    const [globalSpinCount, setGlobalSpinCount] = useState(0);
    const imgClass = `h-[75px] w-[75px] hover:rotate-45 transition-transform duration-300 transform-origin-center hover:scale-110 ${globalSpinCount > 0 && "hidden"}`

    useEffect(() => {
        const spinningElement = document.querySelector(`#${projectName}-spin-${spinIdx}`);
        let isSpinning = false;
    
        const handleTransitionEnd = () => {
          if (isSpinning) {
            setSpinCount(prevCount => prevCount + 1);
            if (spinCount + 2 > 10 && globalSpinCount === 0) {
              setGlobalSpinCount(1);
              fetch('/api/spins', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: spinCount + 1, skill: name })
              }
              )
                .then(response => response.json())
                .then(data => {
                  console.log("success:", data)
                setGlobalSpinCount(data.amount);
                  // Handle the response if needed
                })
                .catch(error => {
                  // Handle errors
                });
            }
          }
          isSpinning = !isSpinning;
        };
    
        spinningElement.addEventListener('transitionend', handleTransitionEnd);
    
        return () => {
          spinningElement.removeEventListener('transitionend', handleTransitionEnd);
        };
      }, [spinCount, globalSpinCount]);

  return (
<>
<Image id={`${projectName}-spin-${spinIdx}`} src={renderIcon(name)} alt="spinning icon" className={imgClass} />
{spinCount > 0 && spinCount < 3 && globalSpinCount < 1 && <div className="text-xl font-semibold">Spin Count:{spinCount}</div>}
{spinCount >=3 && spinCount <= 5 && globalSpinCount < 1 && <div className="text-xl font-semibold">Keep Spinning!{spinCount}</div>}
{spinCount > 5 && spinCount <= 7 && globalSpinCount < 1 && <div className="text-xl font-semibold">Great Job!{spinCount}</div>}
{spinCount > 7 && globalSpinCount < 1 && <div className="text-xl font-semibold">Almost There! {spinCount}</div>}
{globalSpinCount > 0 && <div className="text-xl font-semibold">Global {name} Spins:{globalSpinCount}</div>}
{globalSpinCount > 0 && <div className="font-semibold hidden sm:block">Sent! Keep exploring!</div>}
{spinCount === 0 &&<p>{name}</p>}
{globalSpinCount === 1 &&  <div className="text-xl font-semibold">🕵️‍♂️: Delving into the MongoDB vault </div>}
{globalSpinCount >= 1 && <Image src={renderIcon(name)} alt="spinning icon" className={`h-[75px] w-[75px] animate-spin duration-300 transform-origin-center`} />}
</>
  )
}

export default SpinCounter