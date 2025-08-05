import { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyễn Văn A', age: 20 },
    { id: 2, name: 'Trần Thị B', age: 21 }
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return;

    if (editId) {
      setStudents(
        students.map((s) =>
          s.id === editId ? { ...s, name, age: parseInt(age) } : s
        )
      );
      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        age: parseInt(age)
      };
      setStudents([...students, newStudent]);
    }

    setName('');
    setAge('');
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
    if (editId === id) {
      setEditId(null);
      setName('');
      setAge('');
    }
  };

  const handleEdit = (student) => {
    setEditId(student.id);
    setName(student.name);
    setAge(student.age.toString());
  };

  return (
    <div className="container">
      <h1>Quản lý Sinh Viên</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên sinh viên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tuổi"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">{editId ? 'Cập nhật' : 'Thêm'}</button>
      </form>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.age} tuổi
            <button onClick={() => handleEdit(s)}>Sửa</button>
            <button onClick={() => handleDelete(s.id)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
