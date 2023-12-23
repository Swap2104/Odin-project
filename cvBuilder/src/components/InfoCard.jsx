import "../styles/SidePanel.css"

const InfoCard = (props) => {
  if (props.options == "name") {
    return (
      <div className="infoCard">
        <h1>{props.name}</h1>
        <hr />
        <h2>{props.position}</h2>
      </div>
    );
  }

  if (props.options == "profile") {
    return (
      <div className="infoCard">
        <h2>Profile</h2>
        <p>{props.profile}</p>
      </div>
    );
  }

  if (props.options == "contact") {
    return (
      //? take contact into in props and display each item in a lost item tag
      // ? also add icons if possible
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
