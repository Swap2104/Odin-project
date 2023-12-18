import { useState } from "react";
import "../styles/PersonalInfo.css";
import Buttons from "./Buttons";

const EducationDetails = () => {

  const[displayForm, setVal]=useState(false)

  function form() {
    return (
      <>
        <form action="" className="PersonalInfo">
          <label htmlFor="Institute">Institute</label>
          <label htmlFor="Degree">Degree</label>

          <input type="text" name="Institute" placeholder="Institute" />
          <input type="text" name="Degree" placeholder="Degree" />

          <label htmlFor="phone">Start Date</label>
          <label htmlFor="email">End Date</label>

          <input type="text" name="phone" placeholder="Start Date" />
          <input type="text" name="email" placeholder="End Date" />
        </form>
      </>
    );
  }


  return (
    <>
      <h1>Education Details</h1>
      <Buttons clickFunction={()=>setVal(true)} text={'Add Education'}/>
      {displayForm?form():null}
    </>
  );
};

export default EducationDetails;
