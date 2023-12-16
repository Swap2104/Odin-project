const Buttons = ({text, link}) => {
  return (
    <a href={link}>
      <button className="btn">{text}</button>
    </a>
  );
};

export default Buttons;
