import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Dashboard/Layout";
import Main from "./components/Dashboard/Main";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={< Main />} />
      </Route>
    </Routes>
  );
}

export default App;
