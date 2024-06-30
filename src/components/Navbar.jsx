import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/teacher-dashboard" className="mr-4">Teacher Dashboard</Link>
          <Link to="/admin-dashboard" className="mr-4">Admin Dashboard</Link>
          <Link to="/student-form" className="mr-4">Student Form</Link>
          <Link to="/calendar" className="mr-4">Calendar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;