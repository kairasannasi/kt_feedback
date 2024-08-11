import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StickyHeader from "./components/header";
import FeedbackForm from "./components/form";

function App() {
  return (
    <div className="App">
      <StickyHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
