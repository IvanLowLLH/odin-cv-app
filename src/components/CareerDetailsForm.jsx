import { useState } from "react";

function CareerEntry({ career, onSave, onDelete }) {
  const [tempCareer, setTempCareer] = useState(career);

  const handleChange = (propertyName) => (event) => {
    setTempCareer({ ...tempCareer, [propertyName]: event.target.value });
  };

  const handleSave = () => {
    onSave(tempCareer);
  };

  return (
    <form className="user-form">
      <label for="career-company">Company:</label>
      <input
        type="text"
        id="career-company"
        name="career-company"
        value={tempCareer.companyName}
        onChange={handleChange("companyName")}
      />
      <label for="career-position">Position Title:</label>
      <input
        type="text"
        id="career-position"
        name="career-position"
        value={tempCareer.positionTitle}
        onChange={handleChange("positionTitle")}
      />
      <div className="start-end-dates">
        <div className="start-date">
          <label for="career-start">Start date:</label>
          <input
            type="date"
            id="career-start"
            name="career-start"
            value={tempCareer.startDate}
            onChange={handleChange("startDate")}
          />
        </div>
        <div className="end-date">
          <label for="career-end">End date:</label>
          <input
            type="date"
            id="career-end"
            name="career-end"
            value={tempCareer.endDate}
            onChange={handleChange("endDate")}
          />
        </div>
      </div>
      <div className="card-buttons">
        <button
          type="button"
          onClick={() => {
            onDelete(career.id);
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

function CareerDetailsForm({ resumeInfo, setResumeInfo }) {
  const addCareer = () => {
    console.log("Adding");
    setResumeInfo({
      ...resumeInfo,
      career: [
        ...resumeInfo.career,
        {
          id: Date.now(),
          companyName: "",
          positionTitle: "",
          startDate: "",
          endDate: "",
          experience: [],
        },
      ],
    });
  };

  const saveCareer = (updateItem) => {
    const updatedCareer = resumeInfo.career.map((item) =>
      item.id === updateItem.id ? updateItem : item,
    );
    setResumeInfo({ ...resumeInfo, career: updatedCareer });
  };

  const deleteCareer = (id) => {
    const updatedCareer = resumeInfo.career.filter((item) => item.id !== id);
    setResumeInfo({ ...resumeInfo, career: updatedCareer });
  };

  return (
    <div className="form-blocks">
      <h1>Career Details</h1>
      {resumeInfo.career.map((career) => (
        <CareerEntry
          key={career.id}
          career={career}
          onDelete={deleteCareer}
          onSave={saveCareer}
        />
      ))}
      <button onClick={addCareer}>+ Add Career</button>
    </div>
  );
}

export default CareerDetailsForm;
