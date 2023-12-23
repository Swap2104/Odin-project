import { useState } from "react";
import "../styles/EducationDetails.css";
import Buttons from "./Buttons";

// ? displayForm array stores forms to load
const EducationDetails = () => {
  const [displayForm, setVal] = useState([form()]);

  // ? Function to construct form
  function form() {
    return (
      <form action="" className="educationDetails">
        <label htmlFor="Institute">Institute</label>
        <label htmlFor="Degree">Degree</label>

        <input type="text" name="Institute" placeholder="Institute" />
        <input type="text" name="Degree" placeholder="Degree" />

        <label htmlFor="phone">Start Date</label>
        <label htmlFor="email">End Date</label>

        <input type="text" name="phone" placeholder="Start Date" />
        <input type="text" name="email" placeholder="End Date" />
      </form>
    );
  }

  // ? To load a new form it is added to the displayForm array using addForm() function
  function addForm() {
    setVal((prevForms) => [...prevForms, form()]);
  }

  return (
    <div className="educationFormContainer">
      <h1>Education Details</h1>
      <Buttons clickFunction={() => addForm()} text={"Add Education"} />

      {/* loads all the forms from the displayFrom array */}
      {displayForm.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
    </div>
  );
};

export default EducationDetails;
