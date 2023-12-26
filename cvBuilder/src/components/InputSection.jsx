import Buttons from "./Buttons";
import "../styles/InputSection.css";
import PersonalInfo from "./PersonalInfo";
import EducationDetails from "./EducationDetails";
import Experience from "./Experience";
import { useState } from "react";

const InputSection = (props) => {
  // console.log(props);

  //? form array store the components;
  //! Temporarily changing the order -> final order =  <PersonalInfo />, [<EducationDetails />, <Experience />];
  const form = [<Experience array={props.Experience}/>, <PersonalInfo props={props}/>, <EducationDetails />,];

  // ? the index of the component to load;
  const [Index, setIndex] = useState(0);

  //! console.log("Index: " + Index);

  return (
    <div className="InputSection">
      {/* Create three components for the three section */}
      {/* Increment/decrement a value using the back and next */}
      {/* Based on the value change the component */}

      {form[Index]}
      <div className="btnContainer">
        {/* The index is begin updated when the buttons are clicked */}
        {/* Based on the Value of the index components are loaded */}
        <Buttons
          clickFunction={() => {
            setIndex(Index < 3 && Index > 0 ? Index - 1 : Index);
            // console.log(Index);
          }}
          text={"Back"}
        />

        <Buttons
          clickFunction={() => {
            setIndex(Index < 2 && Index >= 0 ? Index + 1 : Index);
            // console.log(Index);
          }}
          text={"Next"}
        />
      </div>
    </div>
  );
};

export default InputSection;
