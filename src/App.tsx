import "./App.css";
import React from "react";
import AddStudent from "./components/AddStudent";
import ListStudents from "./components/ListStudents";
import StudentPlacement from "./components/StudentPlacement";
import SearchStudent from "./components/SearchStudent";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    <>
      <AddStudent></AddStudent>
      <div style={{ display: "flex", justifyContent: "end", gap: "15px" }}>
        <StudentPlacement></StudentPlacement>
        <SearchStudent></SearchStudent>
      </div>
      <ListStudents></ListStudents>
      <Pagination></Pagination>
    </>
  );
}
