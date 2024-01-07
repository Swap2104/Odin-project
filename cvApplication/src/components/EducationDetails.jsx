import { useState } from "react";
import "../styles/FormStyle.css";
import Buttons from "./Buttons";

const EducationDetails = () => {
  // ? Function to construct form
  function form() {
    return (
      <form action="" className="educationDetails">
        <label htmlFor="Institute">Institute</label>
        <label htmlFor="Degree">Degree</label>

        <input type="text" name="Institute" placeholder="Institute" />
        <input type="text" name="Degree" placeholder="Degree" />

        <label htmlFor="StartDate">Start Date</label>
        <label htmlFor="EndDate">End Date</label>

        <input type="date" name="StartDate" placeholder="Start Date" />
        <input type="date" name="EndDate" placeholder="End Date" />
      </form>
    );
  }

  return (
    <div className="educationFormContainer">
      <h1>Education Details</h1>
      {form()}
      {form()}
      {form()}
    </div>
  );
};

export default EducationDetails;
