import { useState } from "react";
import "../styles/Experience.css";
import Buttons from "./Buttons";

const Experience = () => {
  const [displayForm, setVal] = useState([form()]);

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

  function addForm() {
    setVal((prevForms) => [...prevForms, form()]);
  }

  return (
    <div className="experienceFormContainer">
      <h1>Work Experience</h1>
      <Buttons clickFunction={() => addForm()} text={"Add Work Experience"} />

      {displayForm.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
    </div>
  );
};

export default Experience;
