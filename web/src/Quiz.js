import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  const questions = [
    { question: "Who is the genius billionaire playboy philanthropist in the Avengers?", options: ["Thor", "Iron Man", "Hulk", "Captain America"], answer: "Iron Man" },
    { question: "Which Avenger is known as the God of Thunder?", options: ["Iron Man", "Thor", "Hulk", "Black Widow"], answer: "Thor" },
    { question: "Who is the super-soldier and the first Avenger?", options: ["Captain America", "Iron Man", "Hulk", "Black Widow"], answer: "Captain America" },
    { question: "Which Avenger is a master spy and assassin?", options: ["Black Widow", "Hawkeye", "Hulk", "Thor"], answer: "Black Widow" },
    { question: "Who is the strongest Avenger?", options: ["Iron Man", "Thor", "Hulk", "Captain America"], answer: "Hulk" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(""));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        {!showResults ? (
          <>
            <div className="question-header">
              <h2 className="question-text">Question {currentQuestion + 1}</h2>
              <span className="question-count">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
            </div>
            <p className="question-text">{questions[currentQuestion].question}</p>
            <div className="options-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedOptions[currentQuestion] === option ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="navigation-buttons">
              <button className="nav-button prev" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>Previous</button>
              {currentQuestion < questions.length - 1 && (
                <button className="nav-button next" onClick={handleNextQuestion}>Next</button>
              )}
              {currentQuestion === questions.length - 1 && (
                <button className="nav-button submit" onClick={handleSubmit}>Submit</button>
              )}
              <button className="nav-button back" onClick={() => navigate("/")}>Back to Home</button>
            </div>
          </>
        ) : (
          <div className="results-section">
            <div className="results-header">
              <span className="trophy">🏆</span>
              <h2>Your Score: {score} / {questions.length}</h2>
              <p className="results-message">{score >= questions.length / 2 ? "Great job!" : "Better luck next time!"}</p>
            </div>
            <div className="answers-section">
              {questions.map((question, index) => (
                <div key={index} className={`answer-card ${selectedOptions[index] === question.answer ? "correct" : "incorrect"}`}>
                  <div className="answer-content">
                    <span className={`status-icon ${selectedOptions[index] === question.answer ? "correct" : "incorrect"}`}>{selectedOptions[index] === question.answer ? "✔" : "✖"}</span>
                    <div>
                      <p><strong>Question {index + 1}:</strong> {question.question}</p>
                      <p className="user-answer"><strong>Your Answer:</strong> {selectedOptions[index] || "Not answered"}</p>
                      <p className="correct-answer"><strong>Correct Answer:</strong> {question.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="try-again-button" onClick={() => window.location.reload()}>Try Again</button>
            <button className="nav-button back" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
