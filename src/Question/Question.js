import React from "react";
import Choices from "../Choices/Choices";

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
        <>
            <div>
                <div>Question {question_type}</div>
                {selectedQues.choices ? (
                    <div>MCQ - {question_text}</div>
                ) : (
                    <div>{question_text}</div>
                )}
            </div>
            <div>
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
        </>
    );
};

export default Question;
