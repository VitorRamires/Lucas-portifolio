import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Experiences } from "./components/experiecias";
import { Volunteer } from "./components/voluntario";
import { HomePage } from "./components/homePage/HomePage";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
