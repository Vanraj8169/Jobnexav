import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Jobs from "./components/Jobs";
import HomePage from "./pages/HomePage";
import Form from "./components/forms/Form";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
