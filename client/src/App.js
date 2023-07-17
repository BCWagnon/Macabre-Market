import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main';
import Update from './components/UpdateForm';
import Form from './views/Form';
import Navbar from './components/Navbar';
import './styles.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route element={<Main/>} path="/" default /> 
            <Route element={<Form/>} path="/create"/>
            <Route element={<Update/>} path="/listing/edit/:id"/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;