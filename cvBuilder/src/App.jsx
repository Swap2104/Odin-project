import "../src/styles/App.css";
import PreviewSection from "./components/Preview.jsx";
import InputSection from "./components/InputSection.jsx";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("Thor");
  const [lastName, setLastName] = useState("Lore");
  const [currentPosition, setCurrentPosition] = useState("Programmer");
  const [location, setLocation] = useState("London");
  const [email, setEmail] = useState("TohrLore@gmail.com");
  const [phone, setPhone] = useState("1234567890");
  const [profile, setProfile] = useState("This is a test profile  ");
  //? exp
  const [displayForm, setVal] = useState([]);

  const [locationOne, setLocationOne] = useState(["London"]);
  const [positionOne, setPositionOne] = useState(["Developer"]);
  const [emailOne, setEmailOne] = useState(["Test@gmail.com"]);
  const [coNameOne, setCoNameOne] = useState(["Test company"]);

  const [locationTwo, setLocationTwo] = useState(["US"]);
  const [positionTwo, setPositionTwo] = useState(["Programmer"]);
  const [emailTwo, setEmailTwo] = useState(["Email@gmail.com"]);
  const [coNameTwo, setCoNameTwo] = useState(["Rust company"]);

  // const [experienceFromOneData, setExpFromOneData] = useState([
  //   {
  //     location: "london",
  //     position: "developer",
  //     coName: "test Company",
  //     coEmail: "email@gmail.com",
  //   },
  // ]);
  // const [experienceFromTwoData, setExpFromTwoData] = useState([
  //   {
  //     location: "US",
  //     position: "programmer",
  //     coName: "rust Company",
  //     coEmail: "Company@gmail.com",
  //   },
  // ]);

  return (
    <div className="app">
      <InputSection
        personalInfo={{
          firstName,
          lastName,
          currentPosition,
          location,
          email,
          phone,
          profile,
        }}
        personalInfoSet={{
          setFirstName,
          setLastName,
          setCurrentPosition,
          setLocation,
          setEmail,
          setPhone,
          setProfile,
        }}
        
        Experience={{
          displayForm,
          setVal,

          locationOne,
          positionOne,
          emailOne,
          coNameOne,

          setLocationOne,
          setPositionOne,
          setEmailOne,
          setCoNameOne,
          
          locationTwo,
          positionTwo,
          emailTwo,
          coNameTwo,

          setLocationTwo,
          setPositionTwo,
          setEmailTwo,
          setCoNameTwo,
        }}
      />

      <PreviewSection
        personalInfo={{
          firstName,
          lastName,
          currentPosition,
          location,
          email,
          phone,
          profile,
        }}
        Experience={{ displayForm }}
      />
    </div>
  );
}

export default App;
