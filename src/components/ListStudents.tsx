import React, { useState } from "react";
import Student from "./Student";
interface Student {
  id: string;
  name: string;
  dayOfBirth: string;
  email: string;
  status: boolean;
}

export default function ListStudents() {
  const [students, setStudents] = useState<Student[]>(
    JSON.parse(localStorage.getItem("Students") || "[]")
  );
  const handleBlockStudent = (id: string) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, status: !student.status };
      }
      return student;
    });
    setStudents(updatedStudents);
    localStorage.setItem("Students", JSON.stringify(updatedStudents));
  };
  const handleDeleteStudent = (id: string) => {
    const updatedStudents = students.filter((student) => {
      return student.id != id;
    });
    setStudents(updatedStudents);
    localStorage.setItem("Students", JSON.stringify(updatedStudents));
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Tên sinh viên</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: Student, index: number) => {
            return (
              <Student
                key={student.id}
                student={student}
                stt={index}
                onBlock={handleBlockStudent}
                onDelete={handleDeleteStudent}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
