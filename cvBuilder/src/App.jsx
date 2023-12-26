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
        Experience={{ displayForm, setVal }}
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
        Experience={{ displayForm}}
      />
    </div>
  );
}

export default App;
