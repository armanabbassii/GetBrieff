import QuestionBox from "./components/QuestionBox";
import { QuizProvider } from "./context/QuizContext";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Use HashRouter
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import BriefPage from "./components/BriefPage"; // Ensure correct case

function App() {
  return (
    <QuizProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Route for Home Page */}
          <Route path="/GetBrieff/" element={<HomePage />} />{" "}
          {/* Route for Quiz Page */}
          <Route
            path="/GetBrieff/PlaywrightQuiz"
            element={
              <QuizProvider>
                <QuestionBox />
              </QuizProvider>
            }
          />
          {/* Route for Brief Page */}
          <Route path="/GetBrieff/BriefPage" element={<BriefPage />} />
          {/* Fallback for undefined routes */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
