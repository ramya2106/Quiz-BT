import {useContext} from 'react';
import {StudentContext} from '../context/StudentContext';

const Header = () => {
    const {students} = useContext(StudentContext);
    const presentCount = students.filter((student)=>student.present).length;
    const absentCount = students.length - presentCount;
    return(
        <header>
            <h1>Student Attendance</h1>
            <div className='stats'>
                <span>
                    Total: {students.length}
                </span>
                <span>
                    Present: {presentCount}
                </span>
                <span>
                    Absent: {absentCount}
                </span>
            </div>
        </header>
    )
}

export default Header