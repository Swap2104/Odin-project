import InfoCard from "./InfoCard";
import "../styles/SidePanel.css";

const SidePenal = (props) => {
  // console.log(props)
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
        profile={props.props.personalInfo.profile}
      />

      <InfoCard
        options={"info"}
        email={props.props.personalInfo.email}
        phone={props.props.personalInfo.phone}
        location={props.props.personalInfo.location}
      />
    </div>
  );
};

export default SidePenal;
