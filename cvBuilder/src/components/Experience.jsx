import "../styles/PersonalInfo.css";

const Experience = () => {
  return (
    <>
      <h1>Personal Information</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="firstName">Job Position</label>
        <label htmlFor="lastName">Company Name</label>

        <input type="text" name="firstName" placeholder="Job Position" />
        <input type="text" name="lastName" placeholder="Company Name" />

        <label htmlFor="phone">Location</label>
        <label htmlFor="email">Company Email</label>

        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="email" placeholder="Email" />
      </form>
    </>
  );
};

export default Experience;
