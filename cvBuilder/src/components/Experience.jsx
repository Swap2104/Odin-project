import "../styles/PersonalInfo.css";

const Experience = () => {
  return (
    <>
      <h1>Work Experience</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="firstName">Job Position</label>
        <label htmlFor="lastName">Company Name</label>

        <input type="text" name="firstName" placeholder="Job Position" />
        <input type="text" name="lastName" placeholder="Company Name" />

        <label htmlFor="phone">Location</label>
        <label htmlFor="email">Company Email</label>

        <input type="text" name="phone" placeholder="Location" />
        <input type="text" name="email" placeholder="Company Email" />
      </form>
    </>
  );
};

export default Experience;
