import "../styles/Buttons.css";

//? Buttons component takes
// ? text inside the button
// ? and the onclick function
// ? example of the onclick function --> clickFunction={() => addForm()}
const Buttons = (props) => {
  return (
    <button className="btn" onClick={props.clickFunction}>
      {props.text}
    </button>
  );
};

export default Buttons;
