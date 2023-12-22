import "../styles/Preview.css";
import SidePenal from "./SidePanel";
import PreviewMain from "./PreviewMain";

const PreviewSection = () => {
  return (
    <div className="preview">
      <SidePenal />
      <PreviewMain /> 
      {/* <h1>This is the preview section</h1> */}
    </div>
  );
};

export default PreviewSection;
