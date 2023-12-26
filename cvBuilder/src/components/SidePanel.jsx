import InfoCard from "./InfoCard";
import "../styles/SidePanel.css";

const SidePenal = (props) => {
  console.log(props)
  return (
    <div id="sidePanel">
      {/*  declaring info cards */}
      <InfoCard
        options={"name"}
        name={
          props.props.personalInfo.firstName +
          " " +
          props.props.personalInfo.lastName
        }
        position={props.props.personalInfo.currentPosition}
      />

      <InfoCard
        options={"profile"}
        profile={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada lorem. Morbi sodales, dui in dapibus gravida, massa sem pretium orci, vitae volutpat tortor urna lobortis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu quam eros"
        }
      />

      <InfoCard
        options={"info"}
        email={"test@gmail.com"}
        phone={"1234567890"}
        location={"London"}
      />
    </div>
  );
};

export default SidePenal;
