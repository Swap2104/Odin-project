import { useState } from "react";
import "../styles/EducationDetails.css";
import Buttons from "./Buttons";

// ? displayForm array stores forms to load
const EducationDetails = () => {
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

  return (
    <div className="educationFormContainer">
      <h1>Education Details</h1>
      {form()}
      {form()}
    </div>
  );
};

export default EducationDetails;
