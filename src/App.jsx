import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";
import ResumePreview from "./components/ResumePreview";

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
      <div className="cv-preview">
        <ResumePreview resumeInfo={resumeInfo} />
      </div>
    </>
  );
}

export default App;
