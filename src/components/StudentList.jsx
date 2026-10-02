import {useContext,useState} from 'react';
import {StudentContext} from '../context/StudentContext';

const StudentList = () =>{
    const {students,markAttendance,deleteStudent} = useContext(StudentContext);

    const [search,setSearch] = useState('');

    const filteredStudents= students.filter((student)=>student.name.toLowerCase().includes(search.toLowerCase()))
    return(
        <div>
            <input type="text" placeholder="Search student..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {filteredStudents.map((student)=>(
                <div className="student">
                    <h3>{student.name}</h3>
                    <p>
                        Status:{""}
                        {student.present ? "Present" : "Absent"}
                    </p>
                    <button onClick={()=>markAttendance(student.id)}>{student.present ? "Mark Absent" : "Mark Present"}</button>
                    <button onClick={()=>deleteStudent(student.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default StudentList