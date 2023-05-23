import Menu from "./component/Menu/Menu.component";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Videoplay from "./component/videoplay/Videoplay.component";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Videoplay />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
export default App;
