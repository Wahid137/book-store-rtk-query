import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import "../src/style/style.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    return (
        <Router>
            <Navbar onFilterChange={handleFilterChange} />
            <Routes>
                <Route path="/" element={<Home filter={filter} />} />
                <Route path="/books/add" element={<Add />} />
                <Route path="/books/edit/:bookId" element={<Edit />} />
            </Routes>

        </Router>
    );
}

export default App;
