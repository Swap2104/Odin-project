import { useState } from "react";
import "../styles/PersonalInfo.css";

// ? personal information form
const PersonalInfo = (props) => {

  return (
    <div className="infoFormContainer">
      <h1>Personal Information</h1>
      <form action="" className="PersonalInfo">
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="lastName">Last Name</label>

        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={props.props.personalInfo.firstName}
          onChange={(e) => {
            props.props.personalInfoSet.setFirstName(e.target.value);
            console.log(props);
          }}
        />

        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          value={props.props.personalInfo.lastName}
          onChange={(e) =>
            props.props.personalInfoSet.setLastName(e.target.value)
          }
        />

        <label htmlFor="currentPosition">Current Position</label>
        <label htmlFor="location">Location</label>

        <input
          type="text"
          name="currentPosition"
          placeholder="Current Position"
          value={props.props.personalInfo.currentPosition}
          onChange={(e) =>
            props.props.personalInfoSet.setCurrentPosition(e.target.value)
          }
        />
        <input
          type="text"
          name="location"
          value={props.props.personalInfo.location}
          onChange={(e) =>
            props.props.personalInfoSet.setLocation(e.target.value)
          }
        />

        <label htmlFor="phone">Phone</label>
        <label htmlFor="email">Email</label>

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={props.props.personalInfo.phone}
          onChange={(e) => props.props.personalInfoSet.setPhone(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={props.props.personalInfo.email}
          onChange={(e) => props.props.personalInfoSet.setEmail(e.target.value)}
        />

        <label htmlFor="profile">Profile</label>
        <textarea
          name="profile"
          id="profile"
          cols="30"
          rows="10"
          value={props.props.personalInfo.profile}
          onChange={(e) =>
            props.props.personalInfoSet.setProfile(e.target.value)
          }
        ></textarea>
      </form>
    </div>
  );
};

export default PersonalInfo;
