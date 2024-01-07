import Buttons from "./Buttons";
import "../styles/InputSection.css";
import { useState } from "react";
// import PersonalInfo from "./PersonalInfo";
// import EducationDetails from "./EducationDetails";
// import Experience from "./Experience";

const InputSection = (props) => {
  //? form array store the components;
  //! Temporarily changing the order -> final order =  <PersonalInfo />, [<EducationDetails />, <Experience />];
  // const form = [
  //   <Experience />,
  //   <PersonalInfo props={props} />,
  //   <EducationDetails />,
  // ];

  // ? the index of the component to load;
  const [Index, setIndex] = useState(0);

  //! console.log("Index: " + Index);

  return (
    <div className="InputSection">
      {/* Create three components for the three section. Increment/decrement a value using the back and next Based on the value, change the component */}
      <div></div>
      <div className="btnContainer">
        {/* The index is begin updated when the buttons are clicked */}
        {/* Based on the Value of the index components are loaded */}
        <Buttons
          clickFunction={() => {
            setIndex(Index < 3 && Index > 0 ? Index - 1 : Index);
          }}
          text={"Back"}
        />

        <Buttons
          clickFunction={() => {
            setIndex(Index < 2 && Index >= 0 ? Index + 1 : Index);
          }}
          text={"Next"}
        />
      </div>
    </div>
  );
};

export default InputSection;
