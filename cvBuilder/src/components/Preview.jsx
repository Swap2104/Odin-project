import "../styles/Preview.css";
import SidePenal from "./SidePanel";
import PreviewMain from "./PreviewMain";

//? Preview section component
const PreviewSection = () => {
  return (
    <div className="preview">
      <SidePenal /> 
      <PreviewMain />
    </div>
  );
};

export default PreviewSection;