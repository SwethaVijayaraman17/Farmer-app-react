import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import React,{ useState } from 'react';
import Description from './Description';


function App() {

  const [json,setjson] = useState()
  const [name,setname] = useState()
  const [obj,setobj] = useState()
  const [path,setpath] = useState()

  return (
    <Routes>
      <Route path='/' element={<Home setjson={setjson} setname={setname} setpath={setpath} />} />
      <Route path='/:id' element={<Categories json={json} path={path} name={name}  setobj={setobj} />} />
      <Route path='/:id/:id' element={<Description path={path} obj={obj} />} />
    </Routes>
  );
}

export default App;
