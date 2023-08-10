
import SpinCounter from "./SpinCounter";


function ImageCard({ name, spinIdx, projectName}) {

function handleStopPropagate(e){
  e.stopPropagation()
}
  return (
      <div onClick={handleStopPropagate} className="flex flex-col bg-secondaryColor/50 h-full w-full p-5 justify-center items-center gap-2 rounded-lg shadow-lg">
          {/* {renderIcons()} */}
          <SpinCounter projectName={projectName} name={name} spinIdx={spinIdx}/>
      </div>
  );
}
export default ImageCard;
