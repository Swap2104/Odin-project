import "../styles/PersonalInfo.css";

const PersonalInfo = () => {
  return (
     <>
      <h1>Work Experience</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="lastName">Last Name</label>

        <input type="text" name="firstName" placeholder="FirstName" />
        <input type="text" name="lastName" placeholder="LastName" />

        <label htmlFor="phone">Phone</label>
        <label htmlFor="email">Email</label>

        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="email" placeholder="Email" />
      </form>
    </>
  );
};

export default PersonalInfo;
