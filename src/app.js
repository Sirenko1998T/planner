import React from "react";
import Days from "./components/days";
import './style.css'
import CalendarLayout from "./components/calanderLayout";
import EventPage from "./components/page/eventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
   return (<>
      <Router>
         <Routes>
            <Route path="/" element={<CalendarLayout />} />
            <Route path="/src/components/page/eventPage.js" element={<EventPage />} />
         </Routes>
      </Router>


   </>
   )
}
