import Buttons from "./Buttons";
import "../styles/InputSection.css";
import PersonalInfo from "./PersonalInfo";
import EducationDetails from "./EducationDetails";
import Experience from "./Experience";
import { useState } from "react";

const InputSection = () => {
  const form = [<PersonalInfo />, <EducationDetails />, <Experience />];
  const [Index, setIndex] = useState(0);
  console.log(Index)
  return (
    <div className="InputSection">
      <div className="formContainer">
        {/* Create three components for the three section */}
        {/* Increment/decrement a value using the back and next */}
        {/* Based on the value change the component */}

        {/* <PersonalInfo /> */}
        {/* <EducationDetails /> */}
        {/* <Experience /> */}

        {form[Index]}
      </div>
      <div>
        {/* This div contains the buttons. Pass the clickFunction */}
        <Buttons
          clickFunction={() => {
            // setIndex(Index < 3 && Index >=0 ? Index - 1 : null);
            setIndex(Index - 1);
            console.log(Index);
          }}
          text={"Back"}
        />

        <Buttons
          clickFunction={() => {
            setIndex(Index + 1);
            // setIndex(Index < 3 && Index >=0 ? Index - 1 : null);
            console.log(Index);
          }}
          text={"Next"}
        />
      </div>
    </div>
  );
};

export default InputSection;
