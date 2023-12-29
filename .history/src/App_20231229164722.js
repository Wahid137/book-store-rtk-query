import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import "../src/style/style.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
    const [searchItem, setSearchItem] = useState("");

    const handleSearchItem = (e) => {
        setSearchItem(e.target.value)
    }

    return (
        <Router>
            <Navbar searchItem={searchItem} handleSearchItem={handleSearchItem} />
            <Routes>
                <Route path="/" element={<Home searchItem={searchItem} />} />
                <Route path="/books/add" element={<Add />} />
                <Route path="/books/edit/:bookId" element={<Edit />} />
            </Routes>

        </Router>
    );
}

export default App;
