import React, { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import { Student } from './models/Student';

const App: React.FC = ()=>{
  const [students, setStudents] = useState<Student[]>([]); // 빈 배열로 초기화

  // 학생 추가 후, 학생 목록 업데이트
  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]); // 새로운 학생을 목록에 추가
  };

  return (
    <div>
      <h1>학생 관리 시스템</h1>
      <AddStudentForm onAddStudent={handleAddStudent}/>
      <StudentList students={students}/>
    </div>
  )
}

export default App;