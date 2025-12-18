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
    </>
  );
}

export default ResumePreview;
