import { useState } from "react";

function EducationEntry({ edu, onSave, onDelete }) {
  const [tempEdu, setTempEdu] = useState(edu);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (propertyName) => (event) => {
    setTempEdu({ ...tempEdu, [propertyName]: event.target.value });
  };

  const handleSave = () => {
    onSave(tempEdu);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="info-summary">
        <div className="edu-info-summary">
          <h3>{edu.school}</h3>
          <p>{edu.degree}</p>
        </div>
        <div className="summary-buttons">
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              onDelete(edu.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="user-form">
      <label for="education-school">School:</label>
      <input
        type="text"
        id="education-school"
        name="education-school"
        value={tempEdu.school}
        onChange={handleChange("school")}
      />
      <label for="education-degree">Degree:</label>
      <input
        type="text"
        id="education-degree"
        name="education-degree"
        value={tempEdu.degree}
        onChange={handleChange("degree")}
      />
      <div className="start-end-dates">
        <div className="start-date">
          <label for="education-start">Start date:</label>
          <input
            type="date"
            id="education-start"
            name="education-start"
            value={tempEdu.startDate}
            onChange={handleChange("startDate")}
          />
        </div>
        <div className="end-date">
          <label for="education-end">End date:</label>
          <input
            type="date"
            id="education-end"
            name="education-end"
            value={tempEdu.endDate}
            onChange={handleChange("endDate")}
          />
        </div>
      </div>
      <label for="education-location">Location:</label>
      <input
        type="text"
        id="education-location"
        name="education-location"
        value={tempEdu.location}
        onChange={handleChange("location")}
      />
      <div className="card-buttons">
        <button
          type="button"
          onClick={() => {
            onDelete(edu.id);
          }}
        >
          Delete
        </button>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </form>
  );
}

function EducationDetailsForm({ resumeInfo, setResumeInfo }) {
  const addEducation = () => {
    setResumeInfo({
      ...resumeInfo,
      education: [
        ...resumeInfo.education,
        {
          id: Date.now(),
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      ],
    });
  };

  const saveEducation = (updatedItem) => {
    const updatedEducation = resumeInfo.education.map((item) =>
      item.id === updatedItem.id ? updatedItem : item,
    );
    setResumeInfo({ ...resumeInfo, education: updatedEducation });
  };

  const deleteEducation = (id) => {
    const updatedEducation = resumeInfo.education.filter(
      (item) => item.id !== id,
    );
    setResumeInfo({ ...resumeInfo, education: updatedEducation });
  };

  return (
    <div className="form-blocks">
      <h1>Education Details</h1>
      {resumeInfo.education.map((edu) => (
        <EducationEntry
          key={edu.id}
          edu={edu}
          onDelete={deleteEducation}
          onSave={saveEducation}
        />
      ))}
      <button onClick={addEducation}>+ Add Education</button>
    </div>
  );
}

export default EducationDetailsForm;
