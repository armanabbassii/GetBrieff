import QuestionBox from "./components/QuestionBox";
import { QuizProvider } from "./context/QuizContext";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="flex mx-auto w-full items-center justify-center my-20 max-w-2xl">
          <Routes>
            {/* Route for Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Route for Quiz Page */}
            <Route path="/PlaywrightQuiz" element={<QuestionBox />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;
