import './App.css'
import AddTodo from "./Components/AddTodo"
import ListTodo from './Components/ListTodo'

const App = () => {
  return (
    <div className='App'>
    <AddTodo/>
    <ListTodo/>
    </div>
  )
}
export default App