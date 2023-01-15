import React from "react";

const Question = ({ selectedQues, setSelectedQues }) => {
    const { id, question_text, question_type } = selectedQues;

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
                {question_type === 1 ? <></> : <button>Previous</button>}
                <button>Next</button>
            </div>
        </>
    );
};

export default Question;
