import { useState } from "react";
import "./App.css";
import PersonalDetailsForm from "./components/PersonalDetails";

function App() {
  return (
    <>
      <div className="form-column">
        <PersonalDetailsForm />
      </div>
      <div className="cv-preview"></div>
    </>
  );
}

export default App;
