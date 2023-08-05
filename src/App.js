import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePage from './pages/CreatePage/CreatePage'
import Header from "./components/Header/Header";
import DetailPage from './pages/DetailPage/DetailPage'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
        <Route path="/" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
