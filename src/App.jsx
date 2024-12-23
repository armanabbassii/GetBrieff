import QuestionBox from "./components/questionBox";
import { QuizProvider } from "./context/QuizContext";

import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter

import HomePage from "./components/HomePage";

import Navbar from "./components/Navbar";

import BriefPage from "./components/BriefPage"; // Ensure correct case
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <QuizProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Route for Quiz Page */}
          <Route
            path="/PlaywrightQuiz"
            element={
              <QuizProvider>
                <QuestionBox />
              </QuizProvider>
            }
          />

          {/* Route for Brief Page */}
          <Route path="/BriefPage" element={<BriefPage />} />

          {/* Fallback for undefined routes */}
          {/* <Route path="*" element={<div>Page not found</div>} /> */}
          <Route path="*" element={<NotFoundPage />} />
          {/* Use NotFoundPage here */}
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
