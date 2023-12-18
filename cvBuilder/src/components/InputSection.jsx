import Buttons from "./Buttons";
import "../styles/InputSection.css";
import PersonalInfo from "./PersonalInfo";
import EducationDetails from "./EducationDetails";
import { useState } from "react";

const InputSection = () => {
  const form = [<PersonalInfo />, <EducationDetails />];
  const [Index, setIndex] = useState(0);
  return (
    <div className="InputSection">
      <div className="formContainer">
        {/* Create three components for the three section */}
        {/* Increment/decrement a value using the back and next */}
        {/* Based on the value change the component */}

        {/* <PersonalInfo /> */}
        {/* <EducationDetails /> */}
        {form[Index]}
      </div>
      <div>
        {/* This div contains the buttons. Pass the clickFunction */}
        <Buttons
          clickFunction={() => {
            setIndex(Index - 1);
          }}

          text={"Back"}
        />

        <Buttons
          clickFunction={() => {
            setIndex(Index + 1);
          }}

          text={"Next"}
        />
      </div>
    </div>
  );
};

export default InputSection;
