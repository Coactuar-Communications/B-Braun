import Menu from "./component/Menu/Menu.component";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Videoplay from "./component/videoplay/Videoplay.component";
import Login from "./component/Login.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    <Route path="/Video" element={<Videoplay />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
export default App;
