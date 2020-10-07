import React, { createContext } from "react";
import MainLayout from "./components/MainLayout";


const widthInitVal = 360;
function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export const widthContext = createContext(widthInitVal);
export default App;
