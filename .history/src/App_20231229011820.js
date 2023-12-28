import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import "../src/style/style.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/add" element={<Add />} />
                <Route path="/videos/edit/:videoId" element={<Edit />} />
            </Routes>

        </Router>
    );
}

export default App;
