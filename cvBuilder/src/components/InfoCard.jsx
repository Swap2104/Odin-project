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
      <div className="infoCard contact">
        <h2>Other Information</h2>
        <ul>
          <h3>{" " + props.email}</h3>
          <h3>{" " + props.phone}</h3>
          <h3>{" " + props.location}</h3>
        </ul>
      </div>
    );
  }
};

export default InfoCard;
