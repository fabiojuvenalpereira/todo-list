import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/register';
import TaskList from './pages/TaskList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/tasks' element={<TaskList/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
