import { useState } from "react";
import "../styles/Experience.css";
import Buttons from "./Buttons";
// ! The form component
import ExperienceForm from "./ExperienceForm";

const Experience = () => {
  // ? displayForm array stores forms to load
  const [displayForm, setVal] = useState([]);

  // ? This function is used to display the components in displayForm array
  function loadForm() {
    return displayForm.map((form, index) => <div key={index}>{form}</div>);
  }

  // ? To load a new form it is added to the displayForm array using addForm() function
  function addForm() {
    setVal((prevForms) => [...prevForms, <ExperienceForm />]);
    console.log(displayForm);
  }

  return (
    <div className="experienceFormContainer">
      <h1>Work Experience</h1>
      {/* When the button is clicked a new form is add in the display form array */}
      <Buttons clickFunction={() => addForm()} text={"Add Work Experience"} />

      {/* loads all the forms from the displayFrom array */}
      {loadForm()}
    </div>
  );
};

export default Experience;
