import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@Layout/Layout/Layout";
import Home from "@Screens/Home/Home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
