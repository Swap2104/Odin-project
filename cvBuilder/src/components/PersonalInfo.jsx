import "../styles/PersonalInfo.css";

// ? personal information form
const PersonalInfo = () => {
  return (
    <div className="infoFormContainer">
      <h1>Personal Information</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="lastName">Last Name</label>

        <input type="text" name="firstName" placeholder="FirstName" />
        <input type="text" name="lastName" placeholder="LastName" />

        <label htmlFor="currentPosition">Current Position</label>
        <label htmlFor="location">Location</label>

        <input
          type="text"
          name="currentPosition"
          placeholder="Current Position"
        />
        <input type="text" name="location" placeholder="Location" />

        <label htmlFor="phone">Phone</label>
        <label htmlFor="email">Email</label>

        <input type="number" name="phone" placeholder="Phone" />
        <input type="email" name="email" placeholder="Email" />

        <label htmlFor="profile">Profile</label>
        <textarea name="profile" id="profile" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default PersonalInfo;
