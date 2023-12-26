import "../styles/Preview.css";
import SidePenal from "./SidePanel";
import PreviewMain from "./PreviewMain";

//? Preview section component
const PreviewSection = (props) => {
  // console.log(props.Experience.displayForm)
  //!  the props parameter name can be changed to something else
  return (
    <div className="preview">
      <SidePenal props={props} />
      <PreviewMain props={props.Experience.displayForm} />
    </div>
  );
};

export default PreviewSection;
