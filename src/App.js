import React from 'react';
import Navbar from './atom/Navbar';
import Dashboard from './pages/Dashboard';
import CreateAdds from './component/CreateAdds';
import { Routes , Route } from 'react-router-dom';
import CreateText from './pages/CreateText';
import CreateMedia from './pages/CreateMedia';
function App() {
  return (
    <Routes>
    
      <Route path='/'  element={<Dashboard/>} />
      <Route path='/createads' element={<CreateAdds/>} /> 
      <Route path='/creattext' element={<CreateText/>} /> 
      <Route path='/creatmedia' element={<CreateMedia/>} /> 
      
    </Routes>
  );
}

export default App;
