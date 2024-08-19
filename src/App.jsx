import QuestionBox from "./components/QuestionBox";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <QuizProvider>
      <div className="flex mx-auto w-full items-center justify-center my-20 max-w-2xl">
        <QuestionBox />
      </div>
    </QuizProvider>
  );
}

export default App;
