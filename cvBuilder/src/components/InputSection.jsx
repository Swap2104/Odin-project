import Buttons from "./Buttons";
import "../styles/InputSection.css";
import PersonalInfo from "./PersonalInfo";
import EducationDetails from "./EducationDetails";
import Experience from "./Experience";
import { useState } from "react";

const InputSection = () => {
  const form = [<PersonalInfo />, <EducationDetails />, <Experience />];
  const [Index, setIndex] = useState(0);
  console.log("Index: "+Index);
  return (
    <div className="InputSection">
      <div className="formContainer">
        {/* Create three components for the three section */}
        {/* Increment/decrement a value using the back and next */}
        {/* Based on the value change the component */}

        {form[Index]}
      </div>
      <div>
        <Buttons
          clickFunction={() => {
            setIndex(Index < 3 && Index > 0 ? Index - 1 : Index);
            console.log(Index);
          }}
          text={"Back"}
        />

        <Buttons
          clickFunction={() => {
            setIndex(Index < 2 && Index >= 0 ? Index + 1 : Index);
            console.log(Index);
          }}
          text={"Next"}
        />
      </div>
    </div>
  );
};

export default InputSection;
