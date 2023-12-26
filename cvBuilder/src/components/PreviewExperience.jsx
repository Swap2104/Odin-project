import PreviewCard from "./PreviewCard";

const PreviewExperience = (props) => {
  // ? Work experience section in the Preview
  console.log(props.array.length);

  // ? This function is used to display the components in displayForm array
  function loadForm() {
    return props.array.map((form, index) => (
      <PreviewCard
        institute={"GPC"}
        degree={"Computer Engineering"}
        StartEnd={"2021-2024"}
      />
    ));
  }

  return (
    <div id="Experience">
      <h2>Work Experience</h2>
      <div>{loadForm()}</div>
    </div>
  );
};

export default PreviewExperience;
