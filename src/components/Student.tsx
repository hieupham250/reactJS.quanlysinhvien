import React from "react";

interface StudentProps {
  student: {
    id: string;
    name: string;
    dayOfBirth: string;
    email: string;
    status: boolean;
  };
  stt: number;
  onBlock: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function Student({
  student,
  stt,
  onBlock,
  onDelete,
}: StudentProps) {
  const handleBlockClick = () => {
    onBlock(student.id); // Gọi hàm onBlock khi nút "Chặn" được click và truyền id của sinh viên
  };
  const handleDeleteStudent = () => {
    onDelete(student.id); // Gọi hàm onBlock khi nút "Chặn" được click và truyền id của sinh viên
  };
  return (
    <>
      <tr>
        <td>{stt + 1}</td>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.dayOfBirth}</td>
        <td>{student.email}</td>
        <td>
          {student.status ? (
            <span
              style={{
                border: "1px solid green",
                padding: "5px",
                backgroundColor: "#ebfbde",
              }}
            >
              Đang hoạt động
            </span>
          ) : (
            <span
              style={{
                border: "1px solid red",
                padding: "5px",
                backgroundColor: "#feeeee",
              }}
            >
              Ngừng hoạt động
            </span>
          )}
        </td>
        <td style={{ display: "flex", gap: "5px" }}>
          <span
            style={{
              cursor: "pointer",
              backgroundColor: "#f9f0ff",
              padding: "3px",
              border: "2px solid #f3e7fd",
            }}
            onClick={handleBlockClick}
          >
            {student.status ? "Chặn" : "Hủy chặn"}
          </span>
          <span
            style={{
              cursor: "pointer",
              backgroundColor: "#fff7e6",
              padding: "3px",
              border: "2px solid #ffeed2",
            }}
          >
            Sửa
          </span>
          <span
            style={{
              cursor: "pointer",
              backgroundColor: "#fff1f0",
              padding: "3px",
              border: "2px solid #ffe5e3",
            }}
            onClick={handleDeleteStudent}
          >
            Xóa
          </span>
        </td>
      </tr>
    </>
  );
}
