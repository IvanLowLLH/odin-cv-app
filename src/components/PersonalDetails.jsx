import { useState } from "react";

function PersonalDetailsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNum(event.target.value);
  };

  return (
    <form className="user-form">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label for="phoneNum">Phone Number:</label>
      <input
        type="number"
        id="phoneNum"
        name="phoneNum"
        value={phoneNum}
        onChange={handlePhoneChange}
      />
    </form>
  );
}

export default PersonalDetailsForm;
