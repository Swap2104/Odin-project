import "../styles/SidePanel.css";

const InfoCard = (props) => {
  //? There are 3 options for the cards
  //? name --> name and position
  //? profile --> Profile para
  //? info --> email , phone and location

  //? name
  if (props.options == "name") {
    return (
      <div className="infoCard">
        <h1>{props.name}</h1>
        <hr />
        <h2>{props.position}</h2>
      </div>
    );
  }

  //? profile
  if (props.options == "profile") {
    return (
      <div className="infoCard">
        <h2>Profile</h2>
        <p>{props.profile}</p>
      </div>
    );
  }

  //? Info
  if (props.options == "info") {
    return (
      <div className="infoCard">
        <h2>Other Information</h2>
        {/* <ul> */}
        <p>{" " + props.email}</p>
        <p>{" " + props.phone}</p>
        <p>{" " + props.location}</p>
        {/* </ul> */}
      </div>
    );
  }
};

export default InfoCard;
