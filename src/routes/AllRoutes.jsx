// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../components/mainPage/MainPage';
import ChatPdf from '../components/chatPDF/ChatPdf';
import Presentation from '../components/presentationPage/Presentation';
import Graph from "../components/graph/Graph";
import Git from "../components/githubRepo/Git";
function AllRoutes() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/pdf" element={<ChatPdf/>} />
        <Route path="/video" element={<Presentation/>} />
        <Route path="/graph" element={<Graph/>} />
        <Route path="/git" element={<Git/>} />
        </Routes>
    </Router>
  );
}

export default AllRoutes;
