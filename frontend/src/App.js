import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import TaskList from './pages/TaskList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<TaskList/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
