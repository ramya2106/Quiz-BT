import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css'
function App(){
  return(
    <div className="app">
      <Header/>
      <StudentForm/>
      <StudentList/>
    </div>
  )
}

export default App