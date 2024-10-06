"use client";
import React from "react";
import StudentCard from "./components/StudentCard"; // Adjust this path if necessary



const students = [
  {
    name: "Ali",
    rollNumber: 54121,
    className: "GIAIC",
    city: "Karachi",
    time: "02:00pm - 05:00pm",
  },
  {
    name: "Hassan",
    rollNumber: 22435,
    className: "GIAIC",
    city: "Karachi",
    time: "02:00pm - 05:00pm",
  },
  {
    name: "Usama",
    rollNumber: 55412,
    className: "GIAIC",
    city: "Karachi",
    time: "02:00pm - 05:00pm",
  },
];
export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-xl uppercase">
        Student ID Cards
      </h1>
      <div className="student-cards flex flex-row flex-wrap justify-center gap-6 mt-6">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
          
        ))}
      </div>
     
    </div>
  );
}
