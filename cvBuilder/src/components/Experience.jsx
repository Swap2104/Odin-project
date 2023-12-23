import { useState } from "react";
import "../styles/Experience.css";
import Buttons from "./Buttons";

// ? displayForm array stores forms to load
const Experience = () => {
  const [displayForm, setVal] = useState([form()]);

  // ? Function to construct form
  function form() {
    return (
      <form action="" className="experienceForm">
        <label htmlFor="position">Job Position</label>
        <label htmlFor="coName">Company Name</label>

        <input type="text" name="position" placeholder="Job Position" />
        <input type="text" name="coName" placeholder="Company Name" />

        <label htmlFor="location">Location</label>
        <label htmlFor="coEmail">Company Email</label>

        <input type="text" name="location" placeholder="Location" />
        <input type="text" name="coEmail" placeholder="Company Email" />
      </form>
    );
  }

  // ? To load a new form it is added to the displayForm array using addForm() function
  function addForm() {
    setVal((prevForms) => [...prevForms, form()]);
  }

  return (
    <div className="experienceFormContainer">
      <h1>Work Experience</h1>
      <Buttons clickFunction={() => addForm()} text={"Add Work Experience"} />

      {/* loads all the forms from the displayFrom array */}
      {displayForm.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
    </div>
  );
};

export default Experience;
