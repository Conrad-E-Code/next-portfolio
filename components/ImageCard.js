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

function ImageCard({ name }) {
  function renderIcons() {
    const imgWidth = 75;
    const imgHeight = 75;
    const imgClass = "hover:"
    switch (name) {
      case "React":
        return (
          <Image src={reactIcon} alt="react icon" width={75} height={75} />
        );
      case "JavaScript":
        return (
          <Image
            src={jsIcon}
            alt="javascript icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "HTML":
        return (
          <Image
            src={htmlIcon}
            alt="html icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "Next.js":
        return (
          <Image
            src={nextIcon}
            alt="next icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "Tailwind":
        return (
          <Image
            src={tailwindIcon}
            alt="tailwind icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "Ruby":
        return (
          <Image
            src={rubyIcon}
            alt="ruby icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "Rails":
        return (
          <Image
            src={railsLogo}
            alt="rails icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "MongoDB":
        return (
          <Image
            src={mongoLogo}
            alt="mongoDB icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "CSS":
        return (
          <Image
            src={cssLogo}
            alt="css icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "API":
        return (
          <Image
            src={apiIcon}
            alt="api icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "PostgreSQL":
        return (
          <Image
            src={elephant}
            alt="elephant icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      case "React Native":
        return (
          <Image
            src={reactIcon}
            alt="react icon"
            width={imgWidth}
            height={imgHeight}
          />
        );
      default:
        return (
          <Image
            className=""
            src={reactIcon}
            alt="react icon"
            width={imgWidth}
            height={imgHeight}
          />
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
