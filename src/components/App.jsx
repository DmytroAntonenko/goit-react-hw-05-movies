import { Route, Routes } from "react-router-dom";

import AppBar from  './AppBar/AppBar';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route index element={<Home />} />
        
      </Routes>
      {/* React homework template */}
    </div>
  );
};
