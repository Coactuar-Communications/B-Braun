import Menu from "./component/Menu/Menu.component";

import Volume from "./component/Menu/Volume.component";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Videoplay from "./component/videoplay/Videoplay.component";
import Rate from "./component/Menu/Rate.component";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Videoplay />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/rate" element={<Rate />} />
      <Route path="/volume" element={<Volume />} />
    </Routes>
  );
}
export default App;
