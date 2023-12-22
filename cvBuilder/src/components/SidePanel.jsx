import InfoCard from "./InfoCard";
import "../styles/SidePanel.css"

const SidePenal = () => {
  return (
    <div id="sidePanel">

      <InfoCard
        options={"name"}
        name={"Swapnil Naik"}
        position={"Rust developer"}
      />

      <InfoCard
        options={"profile"}
        profile={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in malesuada lorem. Morbi sodales, dui in dapibus gravida, massa sem pretium orci, vitae volutpat tortor urna lobortis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu quam eros"
        }
      />

    </div>
  );
};

export default SidePenal;
