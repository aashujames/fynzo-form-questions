import React, { useState } from "react";
import data from "../data.json";
import Question from "../Question/Question";

const Questions = () => {
    const [questions, setQuestions] = useState(data.questions);
    const [selectedQues, setSelectedQues] = useState(questions[0]);
    // const [selectedChoices, setSelectedChoices] = useState([
    //     {
    //         question_id: "",
    //         choice_id: ""
    //     }
    // ]);

    return (
        <div>
            <Question
                selectedQues={selectedQues}
                setSelectedQues={setSelectedQues}
            />
        </div>
    );
};

export default Questions;
