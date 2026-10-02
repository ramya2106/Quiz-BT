import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import CountReducer from './CountReducer'
import TodoReducer from './TodoReducer'
import './App.css'
function App(){
  return(
    <div className="app">
      <Header/>
      <StudentForm/>
      <StudentList/>
      <CountReducer/>
      <TodoReducer/>
    </div>
  )
}

export default App