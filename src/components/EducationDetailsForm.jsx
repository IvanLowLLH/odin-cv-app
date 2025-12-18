function EducationDetailsForm({ resumeInfo, setResumeInfo }) {
  const handleEducationChange = (propertyName) => (e) => {
    setResumeInfo({
      ...resumeInfo,
      education: {
        ...resumeInfo.education,
        [propertyName]: e.target.value,
      },
    });
  };

  return (
    <div class="form-blocks">
      <h1>Education Details</h1>
      <form className="user-form">
        <label for="education-school">School:</label>
        <input
          type="text"
          id="education-school"
          name="education-school"
          value={resumeInfo.education.school}
          onChange={handleEducationChange("school")}
        />
        <label for="education-degree">Degree:</label>
        <input
          type="text"
          id="education-degree"
          name="education-degree"
          value={resumeInfo.education.degree}
          onChange={handleEducationChange("degree")}
        />
        <div className="start-end-dates">
          <div className="start-date">
            <label for="education-start">Start date:</label>
            <input
              type="date"
              id="education-start"
              name="education-start"
              onChange={handleEducationChange("start-date")}
            />
          </div>
          <div className="end-date">
            <label for="education-end">End date:</label>
            <input
              type="date"
              id="education-end"
              name="education-end"
              onChange={handleEducationChange("end-date")}
            />
          </div>
        </div>
        <label for="education-location">Location:</label>
        <input
          type="text"
          id="education-location"
          name="education-location"
          value={resumeInfo.education.location}
          onChange={handleEducationChange("degree")}
        />
      </form>
    </div>
  );
}

export default EducationDetailsForm;
