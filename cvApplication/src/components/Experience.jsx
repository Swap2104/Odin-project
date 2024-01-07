import { useState } from "react";
import "../styles/FormStyle.css";
import Buttons from "./Buttons";
// ! The form component

const Experience = (props) => {
  // ? Function to construct form
  function form() {
    return (
      <form action="" className="experienceForm">
        <label htmlFor="position">Job Position</label>
        <label htmlFor="coName">Company Name</label>

        <input
          type="text"
          name="position"
          placeholder="Job Position"
          // value={props.positionOne}
          // onChange={change()}
        />

        <input
          type="text"
          name="coName"
          placeholder="Company Name"
          // value={props.coNameOne}
        />

        <label htmlFor="location">Location</label>
        <label htmlFor="coEmail">Company Email</label>

        <input
          type="text"
          name="location"
          placeholder="Location"
          // value={props.locationOne}
        />
        <input
          type="text"
          name="coEmail"
          placeholder="Company Email"
          // value={props.emailOne}
        />
      </form>
    );
  }

  return (
    <div className="experienceFormContainer">
      <h1>Work Experience</h1>
      {form()}
      {form()}
      {form()}
    </div>
  );
};

export default Experience;
