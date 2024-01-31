import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoApp from './modules/todo/TodoApp';
import AppNavbar from './modules/AppNavbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <AppNavbar/>
      <Routes>
        <Route path='/todo' element={<TodoApp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
