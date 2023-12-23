import "../styles/PreviewMain.css";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

const PreviewMain = () => {
  // ? the main part of the preview sections
  // ? contains the work and education section
  return (
    <div id="previewMain">
      <PreviewExperience />
      <PreviewEducation />
    </div>
  );
};

export default PreviewMain;
