import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Home from "./pages/Home";
import LiveMonitoring from "./components/LiveMonitoring";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/live" element={<LiveMonitoring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
