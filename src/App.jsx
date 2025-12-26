import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import EducationDetailsForm from "./components/EducationDetailsForm";
import CareerDetailsForm from "./components/CareerDetailsForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [resumeInfo, setResumeInfo] = useState({
    name: "",
    email: "",
    phoneNum: "",
    education: [],
    career: [],
  });
  return (
    <>
      <div className="form-column">
        <PersonalDetailsForm
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
        <EducationDetailsForm
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
        <CareerDetailsForm
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
