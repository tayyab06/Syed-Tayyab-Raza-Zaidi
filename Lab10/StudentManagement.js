import React, { useState, useEffect } from 'react';

function StudentListing() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  useEffect(() => {
    async function fetchStudents() {
      const response = await fetch('/api/students');
      const data = await response.json();
      setStudents(data);
    }
    fetchStudents();
  }, []);

  function handleRowClick(id) {
    setSelectedStudentId(id);
  }

  return (
    <div className="student-listing">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} onClick={() => handleRowClick(student.id)}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStudentId && (
        <StudentProfile id={selectedStudentId} />
      )}
    </div>
  );
}

function StudentProfile({ id }) {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchStudent() {
      const response = await fetch(`/api/students/${id}`);
      const data = await response.json();
      setStudent(data);
    }
    fetchStudent();
  }, [id]);

  if (!student) {
    return null;
  }

  return (
    <div className="student-profile">
      <h2>{student.name}</h2>
      <p>ID: {student.id}</p>
      <p>Email: {student.email}</p>
      <p>Date of Birth: {student.dob}</p>
      <p>Phone: {student.phone}</p>
      <p>Address: {student.address}</p>
    </div>
  );
}

export default StudentListing;
