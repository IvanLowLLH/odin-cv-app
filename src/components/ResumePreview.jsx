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
    </>
  );
}

export default ResumePreview;
