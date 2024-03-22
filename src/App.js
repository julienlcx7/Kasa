import './App.scss';
import Main from './pages/main.js';
import About from './pages/About.js';
import Layout from './Components/Layout/Layout.js';
import Error from './_utils/Error.js';
import { Logement } from './pages/Logement.js';
import { BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Main/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='logement/:id_url' element={<Logement/>}/> 
            <Route path='*' element={<Error/>}/> 
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

