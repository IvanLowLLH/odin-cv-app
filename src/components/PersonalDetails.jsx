function PersonalDetailsForm({ resumeInfo, setResumeInfo }) {
  const handleInputChange = (property) => (e) => {
    setResumeInfo({ ...resumeInfo, [property]: e.target.value });
  };

  return (
    <div class="form-blocks">
      <h1>Personal Details</h1>
      <form className="user-form">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={resumeInfo.name}
          onChange={handleInputChange("name")}
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={resumeInfo.email}
          onChange={handleInputChange("email")}
        />
        <label for="phoneNum">Phone Number:</label>
        <input
          type="text"
          id="phoneNum"
          name="phoneNum"
          value={resumeInfo.phoneNum}
          onChange={handleInputChange("phoneNum")}
        />
      </form>
    </div>
  );
}

export default PersonalDetailsForm;
