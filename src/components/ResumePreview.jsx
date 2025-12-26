function ResumePreview({ resumeInfo }) {
  return (
    <>
      <div className="resume-name-header">
        <h1>{resumeInfo.name}</h1>
      </div>
      <div className="resume-contact-info">
        <p>Email: {resumeInfo.email}</p>
        <p>Phone Number: {resumeInfo.phoneNum}</p>
      </div>
      <div className="resume-education-info-contain">
        <h1>Education</h1>
        {resumeInfo.education.map((edu) => (
          <div className="edu-info" key={edu.id}>
            <h2>{edu.school}</h2>
            <p>{edu.degree}</p>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.location}</p>
          </div>
        ))}
      </div>
      <div className="resume-career-info-contain">
        <h1>Experiences</h1>
        {resumeInfo.career.map((career) => (
          <div className="career-info" key={career.id}>
            <h2>{career.companyName}</h2>
            <p>{career.positionTitle}</p>
            <p>
              {career.startDate} - {career.endDate}
            </p>
            <ul className="experience-list">
              {Array.isArray(career.experience) &&
                career.experience.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResumePreview;
