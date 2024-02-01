import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoApp from './modules/todo/TodoApp';
import AppNavbar from './modules/AppNavbar';
import Cart from './modules/cart/Cart';

function App() {

  return (
    <>
    <BrowserRouter>
    <AppNavbar/>
    <div style={{border:"1px solid grey", margin:"3%"}}>
      <Routes>
        <Route path='/todo' element={<TodoApp/>}/>
        <Route path='/cart-app' element={<Cart/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
