// StudentForm.jsx
import React, { useState } from 'react';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

const StudentForm = ({ user }) => {
  const [student, setStudent] = useState({
    name: '',
    enrollment: '',
    mobile: '',
    department: '',
    year: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'students', user.email), student);
      alert('Student data saved!');
      setStudent({ name: '', enrollment: '', mobile: '', department: '', year: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2 max-w-md mx-auto">
      {['name', 'enrollment', 'mobile', 'department', 'year'].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          value={student[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="p-2 border rounded"
        />
      ))}
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Save Student Data
      </button>
    </form>
  );
};

export default StudentForm;
