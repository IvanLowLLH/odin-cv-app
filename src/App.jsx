import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";

function App() {
  const [resumeInfo, setResumeInfo] = useState({
    name: "",
    email: "",
    phoneNum: "",
  });
  return (
    <>
      <div className="form-column">
        <PersonalDetailsForm
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
      </div>
      <div className="cv-preview"></div>
    </>
  );
}

export default App;
