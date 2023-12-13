import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vision from "./pages/Vision";
import Status from "./pages/status";
import Fahrzeuge from "./pages/Fahrzeuge";
import Infra from "./pages/infra";
import Aboutme from "./pages/Aboutme";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Vision" element={<Vision />} />
        <Route path="/pages/Status" element={<Status />} />
        <Route path="/pages/Fahrzeuge" element={<Fahrzeuge />} />
        <Route path="/pages/Infra" element={<Infra />} />
        <Route path="/pages/Aboutme" element={<Aboutme />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
