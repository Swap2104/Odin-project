const InfoCard = (props) => {
//   console.log(props);

  if (props.options == "name") {
    return (
      <div className="infoCard">
        <h1>{props.name}</h1>
        <hr />
        <h2>{props.position}</h2>
      </div>
    );
  };

  if (props.options == "profile") {
    return (
      <div className="infoCard">
        <h1>Profile</h1>
        <p>{props.profile}</p>
      </div>
    );
  };

  if (props.options == "Contact") {
    return (
        //? take contact into in props and display each item in a lost item tag
        // ? also add icons if possible
      <div className="infoCard">
        <h1>{props.name}</h1>
        <h2>{props.position}</h2>
      </div>
    );
  };
};

export default InfoCard;
