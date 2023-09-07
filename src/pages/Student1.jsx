import React, { useState } from 'react';

const Student1 = () => {
  const [grades, setGrades] = useState([]);
  const [newGrade, setNewGrade] = useState({
    subCode: '',
    subject: '',
    grade: '',
    passFail: '',
    year: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setNewGrade((prevGrade) => ({
      ...prevGrade,
      [id]: value,
    }));
  };

 const handleAddRow = () => {
  if (newGrade.subCode && newGrade.subject && newGrade.grade && newGrade.passFail && newGrade.year) {
    setGrades((prevGrades) => [...prevGrades, newGrade]);
    setNewGrade({
      subCode: '',
      subject: '',
      grade: '',
      passFail: '',
      year: '',
    });
  }
};

  return (
    <div>
      <h3>Dynamic Grade Table:</h3>
      <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th>Sub Code</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Pass/Fail</th>
            <th>Year of Passing</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.subCode}</td>
              <td>{grade.subject}</td>
              <td>{grade.grade}</td>
              <td>{grade.passFail}</td>
              <td>{grade.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h4>Add New Row:</h4>
        <input
          type="text"
          id="subCode"
          placeholder="Sub Code"
          value={newGrade.subCode}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          value={newGrade.subject}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="grade"
          placeholder="Grade"
          value={newGrade.grade}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="passFail"
          placeholder="Pass/Fail"
          value={newGrade.passFail}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="year"
          placeholder="Year of Passing"
          value={newGrade.year}
          onChange={handleInputChange}
        />
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    </div>
  );
};

export default Student1;
