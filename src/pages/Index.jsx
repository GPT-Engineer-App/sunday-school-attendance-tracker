import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Sunday School Attendance System</h1>
        <p className="text-center">
          Welcome to the Sunday School Attendance System. Please navigate using the links below.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="/login" className="text-blue-500">Login</Link>
          <Link to="/teacher-dashboard" className="text-blue-500">Teacher Dashboard</Link>
          <Link to="/admin-dashboard" className="text-blue-500">Admin Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;