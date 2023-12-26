import "../styles/Experience.css";

const ExperienceForm = () => {
  return (
    <form action="" className="experienceForm">
      <label htmlFor="position">Job Position</label>
      <label htmlFor="coName">Company Name</label>

      <input type="text" name="position" placeholder="Job Position" />
      <input type="text" name="coName" placeholder="Company Name" />

      <label htmlFor="location">Location</label>
      <label htmlFor="coEmail">Company Email</label>

      <input type="text" name="location" placeholder="Location" />
      <input type="text" name="coEmail" placeholder="Company Email" />
    </form>
  );
};

export default ExperienceForm;
