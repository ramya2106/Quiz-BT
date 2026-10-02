import {createContext, useEffect, useState} from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({children}) => {
    const [students, setStudents] = useState(()=>{
        const savedStudents = localStorage.getItem('students');

        return savedStudents ? JSON.parse(savedStudents) : []
    })

    useEffect(()=>{
       localStorage.setItem('students',JSON.stringify(students)); 
    },[students])

    const addStudent = (name) =>{
        const newStudent = {
            id: Date.now(),
            name,
            present: false
        }
        setStudents([...students,newStudent])
    }

    const markAttendance = (id)=>{
        setStudents(
            students.map((student)=>student.id === id ? {...student,present: !student.present}:student)
        )
    }

    const deleteStudent =(id) => {
        setStudents(students.filter((student) => student.id !== id))
    }

    return(
        <StudentContext.Provider value={{
            students,
            addStudent,
            markAttendance,
            deleteStudent
        }}>
            {children}
        </StudentContext.Provider>
    )

}