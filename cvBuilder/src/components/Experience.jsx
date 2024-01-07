import { useState } from "react";
import "../styles/Experience.css";
import Buttons from "./Buttons";
// ! The form component
import ExperienceForm from "./ExperienceForm";

const Experience = (props) => {
  // ? displayForm array stores forms to load
  let propsValue = props.props;
  // console.log(propsValue);
  let propsOne = [
    propsValue.locationOne,
    propsValue.positionOne,
    propsValue.emailOne,
    propsValue.coNameOne,
  ];

  let propsSetOne = [
    propsValue.setEmailOne,
    propsValue.setCoNameOne,
    propsValue.setLocationOne,
    propsValue.setPositionOne,
  ];
  
  let propsTwo = [
    propsValue.locationTwo,
    propsValue.positionTwo,
    propsValue.emailTwo,
    propsValue.coNameTwo,
  ];
  
  let propsSetTwo = [
    propsValue.setEmailTwo,
    propsValue.setCoNameTwo,
    propsValue.setLocationTwo,
    propsValue.setPositionTwo,
  ];
  // console.log(propsOne);
  // console.log(propsTwo);
  // console.log(propsSetOne);
  // console.log(propsSetTwo);
  console.log(propsSetTwo[0]);

  // const [displayForm, setVal] = useState([]);

  // ? This function is used to display the components in displayForm array
  // function loadForm() {
  //   return props.array.displayForm.map((form, index) => (
  //     <div key={index}>{form}</div>
  //   ));
  // }

  // ? To load a new form it is added to the displayForm array using addForm() function
  // let index = 0;
  // function addForm() {
  //   props.array.setVal((prevForms) => [
  //     ...prevForms,
  //     <ExperienceForm key={index} />,
  //   ]);
  //   index++;
  //   console.log(props.array.displayForm);
  // }

  return (
    <div className="experienceFormContainer">
      <h1>Work Experience</h1>
      {/* When the button is clicked a new form is add in the display form array */}
      {/* <Buttons clickFunction={() => addForm()} text={"Add Work Experience"} /> */}
      <ExperienceForm
        // props={propsValue}
        props={propsValue.locationOne}
      />
      <ExperienceForm />
      {/* loads all the forms from the displayFrom array */}
      {/* {loadForm()} */}
    </div>
  );
};

export default Experience;
