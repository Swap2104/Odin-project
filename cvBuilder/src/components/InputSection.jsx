import Buttons from "./Buttons";
import "../styles/InputSection.css";
import PersonalInfo from "./PersonalInfo";

const InputSection = () => {
  return (
    <div className="InputSection">
      <div>
        {/* Create three components for the three section */}
        {/* Increment/decrement a value using the back and next */}
        {/* Based on the value change the component */}
        <PersonalInfo />
      </div>
      <div>
      {/* This div contains the buttons. Pass the clickFunction */}
        <Buttons text={"Next"} />
        <Buttons text={"Back"} />
      </div>
    </div>
  );
};

export default InputSection;
