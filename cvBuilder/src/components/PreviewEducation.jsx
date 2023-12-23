import PreviewCard from "./PreviewCard";

const PreviewEducation = () => {
  // ? Education section in the Preview
  return (
    <div id="Education">
      <h2>Education</h2>
          {/* create a new component that insets a div with the name of the institute, Degree, start and end date  */}
      <div>
        <PreviewCard
          institute={"GPC"}
          degree={"Computer Engineering"}
          StartEnd={"2021-2024"}
        />

        <PreviewCard
          institute={"GPC"}
          degree={"Computer Engineering"}
          StartEnd={"2021-2024"}
        />
      </div>
    </div>
  );
};

export default PreviewEducation;
