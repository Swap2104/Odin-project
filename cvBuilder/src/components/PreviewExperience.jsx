import PreviewCard from "./PreviewCard";

const PreviewExperience = () => {
  // ? Work experience section in the Preview
  return (
    <div id="Experience">
      <h2>Work Experience</h2>
      <div>
        <PreviewCard
          institute={"GPC"}
          degree={"Computer Engineering"}
          StartEnd={"2021-2024"}
        />
      </div>
    </div>
  );
};

export default PreviewExperience;
