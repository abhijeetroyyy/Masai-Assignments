
import './App.css'
import CustomHandeling from './components/CustomHandeling'
import DynamicForm from './components/DynamicForm'
import RealTimeInputValidation from './components/RealTimeInputValidation'

function App() {

  return (
    <>
    <h1>Dynamic Form with useRef</h1>
    <h2>Dynamic form input focus</h2>
    <DynamicForm/>
    <h1>real-time input validation</h1>
    <RealTimeInputValidation/>
    <h1>custom form submission handelling</h1>
    <CustomHandeling/>   
    </>
  )
}

export default App              
