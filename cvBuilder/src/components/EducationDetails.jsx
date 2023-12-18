import "../styles/PersonalInfo.css";

const EducationDetails = () => {
  return (
    <>
      <h1>Education Details</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="firstName">Collage</label>
        <label htmlFor="lastName">Degree</label>

        <input type="text" name="firstName" placeholder="Collage" />
        <input type="text" name="lastName" placeholder="Degree" />

        <label htmlFor="phone">Start Date</label>
        <label htmlFor="email">End Date</label>

        <input type="text" name="phone" placeholder="Start Date" />
        <input type="text" name="email" placeholder="End Date" />
      </form>
    </>
  );
};

export default EducationDetails;
