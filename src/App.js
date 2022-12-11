import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@Layout/Layout/Layout";

import Home from "@Screens/Home/Home";
import ContactUs from "@Screens/ContactUs/ContactUs";
import CompanyTimeline from "@Screens/CompanyTimeline/CompanyTimeline";
import StudentTimeline from "@Screens/StudentTimeline/StudentTimeline";
import NotFound from "@Screens/NotFound/NotFound";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/contact-us"} element={<ContactUs />} />
                  <Route path={"/company-timeline"} element={<CompanyTimeline />} />
                  <Route path={"/student-timeline"} element={<StudentTimeline />} />
                  <Route path={"*"} element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
