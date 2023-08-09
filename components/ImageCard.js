import apiIcon from "../public/api-icon.png";
import elephant from "../public/elephant.png";
import htmlIcon from "../public/html_icon.png";
import jsIcon from "../public/Unofficial_JavaScript_logo_2.svg.png";
import nextIcon from "../public/Nextjs-logo.svg.png";
import railsLogo from "../public/rails-logo.png";
import reactIcon from "../public/React-icon.svg.png";
import rubyIcon from "../public/ruby.png";
import tailwindIcon from "../public/Tailwind_CSS_Logo.svg.png";
import mongoLogo from "../public/mongo_logo_lime.png";
import cssLogo from "../public/CSS3_logo.png";
import Image from "next/image";
import gitHubIcon from "../public/github-mark-white.png"
import SpinCounter from "./SpinCounter";


function ImageCard({ name }) {
  function renderIcons() {
    const imgClass = "h-[75px] w-[75px] hover:rotate-45 transition-transform duration-300 transform-origin-center hover:scale-110"
    switch (name) {
      case "React":
        return (
          <SpinCounter name={name} spinIdx={0} spinIcon={reactIcon} imgClass={imgClass} />
        );
      case "JavaScript":
        return (
<SpinCounter name={name} spinIdx={1} spinIcon={jsIcon} imgClass={imgClass} />
        );
      case "HTML":
        return (
<SpinCounter name={name} spinIdx={2} spinIcon={htmlIcon} imgClass={imgClass} />
        );
      case "Next.js":
        return (
          <Image
            src={nextIcon}
            alt="next icon"
            className={`${imgClass}`}
          />
        );
      case "Tailwind":
        return (
          <SpinCounter name={name} spinIdx={3} spinIcon={tailwindIcon} imgClass={imgClass} />
        );
      case "Ruby":
        return (
          <SpinCounter name={name} spinIdx={4} spinIcon={rubyIcon} imgClass={imgClass} />
        );
      case "Rails":
        return (
          <SpinCounter name={name} spinIdx={5} spinIcon={railsLogo} imgClass={imgClass} />
        );
      case "MongoDB":
        return (
          <SpinCounter name={name} spinIdx={6} spinIcon={mongoLogo} imgClass={imgClass} />
        );
      case "CSS":
        return (
          <SpinCounter name={name} spinIdx={7} spinIcon={cssLogo} imgClass={imgClass} />
        );
      case "API":
        return (
          <SpinCounter name={name} spinIdx={8} spinIcon={apiIcon} imgClass={imgClass} />
        );
      case "PostgreSQL":
        return (
          <SpinCounter name={name} spinIdx={9} spinIcon={elephant} imgClass={imgClass} />
        );
      case "React Native":
        return (
          <SpinCounter name={name} spinIdx={10} spinIcon={reactIcon} imgClass={imgClass} />
        );
      case "GitHub":
        return (
          <SpinCounter name={name} spinIdx={11} spinIcon={gitHubIcon} imgClass={imgClass} />
        );
      default:
        return (
          <SpinCounter name={name} spinIdx={11} spinIcon={Icon} imgClass={imgClass} />
        );
    }
  }

  return (
      <div className="flex flex-col bg-secondaryColor/50 h-full w-full p-5 justify-center items-center gap-2 rounded-lg shadow-lg">
          {renderIcons()}
          <p>{name}</p>
      </div>
  );
}
export default ImageCard;
