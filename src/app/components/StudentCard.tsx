"use client";
import React from 'react';
type Student = {
  name: string;
  rollNumber: number;
  className: string;
  city: string;
  time: string;
};

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>Roll Number: {student.rollNumber}</p>
      <p>Class: {student.className}</p>
      <p>City: {student.city}</p>
      <p>Time: {student.time}</p>
    </div>
  );
};

export default StudentCard;
