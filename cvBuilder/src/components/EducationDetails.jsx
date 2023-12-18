import "../styles/PersonalInfo.css";

const EducationDetails = () => {
  return (
    <>
      <h1>Education Details</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="Institute">Institute</label>
        <label htmlFor="Degree">Degree</label>

        <input type="text" name="Institute" placeholder="Institute" />
        <input type="text" name="Degree" placeholder="Degree" />

        <label htmlFor="phone">Start Date</label>
        <label htmlFor="email">End Date</label>

        <input type="text" name="phone" placeholder="Start Date" />
        <input type="text" name="email" placeholder="End Date" />
      </form>
    </>
  );
};

export default EducationDetails;
