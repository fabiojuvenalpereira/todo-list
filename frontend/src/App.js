import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/auth/AuthProvider';
import RequireAuth from './contexts/auth/RequireAuth';

import Login from './pages/Login';
import Register from './pages/register';
import TaskList from './pages/TaskList';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />}/>
          <Route path='/tasks' element={<RequireAuth><TaskList/></RequireAuth>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
