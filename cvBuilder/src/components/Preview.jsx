import "../styles/Preview.css";
import SidePenal from "./SidePanel";
import PreviewMain from "./PreviewMain";

const PreviewSection = () => {
  return (
    <div className="preview">
      <SidePenal />
      <PreviewMain />
    </div>
  );
};

export default PreviewSection;
