import "../styles/PreviewMain.css";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

const PreviewMain = (props) => {
  // console.log(props.props)
  // ? the main part of the preview sections
  // ? contains the work and education section
  return (
    <div id="previewMain">
      <PreviewExperience array={props.props}/>
      <PreviewEducation />
    </div>
  );
};

export default PreviewMain;
