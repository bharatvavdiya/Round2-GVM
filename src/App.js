import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Dashboard/Layout";
import Main from "./components/Dashboard/Main";
import AddData from "./components/AddData";
import EditData from "./components/EditData";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={< Main />} />
        <Route path="/add" element={< AddData />} />
        <Route path="/edit/:id" element={< EditData />} />
      </Route>
    </Routes>
  );
}

export default App;
