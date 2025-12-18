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

  const handleEducationChange = (id, propertyName) => (e) => {
    const updatedEducation = resumeInfo.education.map((item) => {
      if (item.id === id) {
        return { ...item, [propertyName]: e.target.value };
      }
      return item;
    });
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
        <form key={edu.id} className="user-form">
          <label for="education-school">School:</label>
          <input
            type="text"
            id="education-school"
            name="education-school"
            value={edu.school}
            onChange={handleEducationChange(edu.id, "school")}
          />
          <label for="education-degree">Degree:</label>
          <input
            type="text"
            id="education-degree"
            name="education-degree"
            value={edu.degree}
            onChange={handleEducationChange(edu.id, "degree")}
          />
          <div className="start-end-dates">
            <div className="start-date">
              <label for="education-start">Start date:</label>
              <input
                type="date"
                id="education-start"
                name="education-start"
                value={edu.startDate}
                onChange={handleEducationChange(edu.id, "startDate")}
              />
            </div>
            <div className="end-date">
              <label for="education-end">End date:</label>
              <input
                type="date"
                id="education-end"
                name="education-end"
                value={edu.endDate}
                onChange={handleEducationChange(edu.id, "endDate")}
              />
            </div>
          </div>
          <label for="education-location">Location:</label>
          <input
            type="text"
            id="education-location"
            name="education-location"
            value={edu.location}
            onChange={handleEducationChange(edu.id, "location")}
          />
          <div className="card-buttons">
            <button onClick={() => deleteEducation(edu.id)}>Delete</button>
            <button>Edit</button>
            <button>Save</button>
          </div>
        </form>
      ))}
      <button onClick={addEducation}>+ Add Education</button>
    </div>
  );
}

export default EducationDetailsForm;
