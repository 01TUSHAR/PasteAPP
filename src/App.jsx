import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Paste from "./components/Paste";
import About from "./components/About";
import ViewPaste from "./components/ViewPaste";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<Home />} />
        <Route path="paste">
          <Route index element={<Paste/>} />
          <Route path=":id" element={<ViewPaste/>} />
        </Route>
        <Route path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
