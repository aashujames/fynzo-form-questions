import React, { useState } from "react";
import "../styles/Choices.css";

const Choices = ({ selectedQues, setSelectedChoices, selectedChoices }) => {
    const [textInput, setTextInput] = useState("");
    const [fileInput, setFileInput] = useState("");
    const { id, question_type: type } = selectedQues;

    const handleChoice = (choiceId) => {
        setSelectedChoices((selectedChoices) => [
            ...selectedChoices,
            { questionId: selectedQues.id, choiceId }
        ]);
    };

    const searchChoice = () => {
        if (selectedChoices.length > 0) {
            const choice = selectedChoices.find((ele) => ele.questionId === id);
            return choice?.choiceId;
        }
    };

    if (type === 1) {
        return (
            <div className="main1">
                {selectedQues.choices.map((item) => (
                    <div key={item.id} className="container-radio">
                        <label className="label-radio" htmlFor={item.id}>
                            {item.choice_text}
                        </label>
                        <input
                            className="input-radio"
                            id={item.id}
                            defaultChecked={searchChoice() === item.id}
                            type="radio"
                            onChange={() => handleChoice(item.id)}
                        />
                    </div>
                ))}
            </div>
        );
    }

    if (type === 2) {
        return (
            <div className="main2">
                <select
                    className="select"
                    onChange={(e) => handleChoice(e.target.value)}
                    defaultValue={selectedQues.choices.some(
                        (item) => item.id === searchChoice()
                    )}
                >
                    <option disabled>Choose choice</option>
                    {selectedQues.choices.map((item) => (
                        <option value={item.id} key={item.id}>
                            {item.choice_text}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    if (type === 3) {
        return (
            <div className="main1">
                {selectedQues.choices.map((item) => (
                    <div key={item.id} className="container-radio">
                        <label className="label-radio" htmlFor={item.id}>
                            {item.choice_text}
                        </label>
                        <input
                            className="input-checkbox"
                            id={item.id}
                            defaultChecked={searchChoice() === item.id}
                            type="checkbox"
                            onChange={() => handleChoice(item.id)}
                        />
                    </div>
                ))}
            </div>
        );
    }
    if (type === 4) {
        return (
            <div>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
            </div>
        );
    }

    if (type === 5) {
        return (
            <div>
                <input
                    type="file"
                    value={fileInput}
                    onChange={(e) => setFileInput(e.target.value)}
                />
            </div>
        );
    }
};

export default Choices;
