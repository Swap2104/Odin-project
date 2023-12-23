import "../styles/PreviewCard.css"

const PreviewCard = (props) => {
  return (
    <div id="PreviewCard">
      <p>{props.institute}</p>
      <p>{props.degree}</p>
      <p>{props.StartEnd}</p>
      {/* <p>{props.end}</p> */}
    </div>
  );
};

export default PreviewCard;
