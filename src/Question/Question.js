import React from "react";
import Choices from "../Choices/Choices";
import "../styles/Question.css";

const Question = ({
    questions,
    selectedQues,
    setSelectedQues,
    selectedChoices,
    setSelectedChoices
}) => {
    const { question_text, question_type } = selectedQues;

    const handleNext = () => {
        setSelectedQues(questions[question_type - 1 + 1]);
    };

    const handlePrevious = () => {
        setSelectedQues(questions[question_type - 1 - 1]);
    };

    return (
        <div className="container">
            <div>
                <div className="question-text">Question {question_type}</div>
                {selectedQues.choices ? (
                    <div className="question-text">MCQ - {question_text}</div>
                ) : (
                    <div className="question-text">{question_text}</div>
                )}
            </div>
            <div className="choices">
                <Choices
                    selectedQues={selectedQues}
                    setSelectedChoices={setSelectedChoices}
                    selectedChoices={selectedChoices}
                />
            </div>
            <div>
                {question_type === 1 ? (
                    <></>
                ) : (
                    <button onClick={handlePrevious}>Previous</button>
                )}
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Question;
