import React, { useState } from "react";

interface Student {
  id: string;
  name: string;
  dayOfBirth: string;
  email: string;
  status: boolean;
}

export default function AddStudent() {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("Students") || "[]")
  );
  const [student, setStudent] = useState<Student>({
    id: "",
    name: "",
    dayOfBirth: "",
    email: "",
    status: true,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };
  const handleClick = () => {
    if (
      student.id.trim() === "" ||
      student.name.trim() === "" ||
      student.dayOfBirth.trim() === "" ||
      student.email.trim() === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    const updatedStudents = [...students, student]; // Thêm đối tượng student vào mảng students
    setStudents(updatedStudents); // Cập nhật state của students
    localStorage.setItem("Students", JSON.stringify(updatedStudents)); // Lưu mảng students lên localStorage
    setStudent({
      id: "",
      name: "",
      dayOfBirth: "",
      email: "",
      status: true,
    });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Quản lý sinh viên</h3>
        <div className="add-student">
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Thêm sinh viên
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Thêm mới sinh viên
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form action="">
                    <label htmlFor="">Mã Sinh viên</label>
                    <input
                      name="id"
                      value={student.id}
                      onChange={handleChange}
                      type="text"
                    />
                    <label htmlFor="">Tên sinh viên</label>
                    <input
                      name="name"
                      value={student.name}
                      onChange={handleChange}
                      type="text"
                    />
                    <label htmlFor="">Ngày sinh</label>
                    <input
                      name="dayOfBirth"
                      value={student.dayOfBirth}
                      onChange={handleChange}
                      type="date"
                    />
                    <label htmlFor="">Email</label>
                    <input
                      name="email"
                      value={student.email}
                      onChange={handleChange}
                      type="email"
                    />
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Hủy
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleClick}
                    data-bs-dismiss="modal"
                  >
                    Thêm mới
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
