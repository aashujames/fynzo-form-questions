import React from "react";

const Choices = ({ selectedQues, setSelectedChoices }) => {
    const { question_type: type } = selectedQues;

    const handleChoice = (choiceId) => {
        console.log(choiceId);
        setSelectedChoices((selectedChoices) => [
            ...selectedChoices,
            { questionId: selectedQues.id, choiceId }
        ]);
    };

    if (type === 1) {
        return (
            <div>
                {selectedQues.choices.map((item) => (
                    <div key={item.id}>
                        <label>
                            <input
                                type="radio"
                                onChange={() => handleChoice(item.id)}
                            />
                            {item.choice_text}
                        </label>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 2) {
        return (
            <div>
                <select onChange={(e) => handleChoice(e.target.value)}>
                    <option>Choose choice</option>
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
            <div>
                {selectedQues.choices.map((item) => (
                    <div key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleChoice(item.id)}
                            />
                            {item.choice_text}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
};

export default Choices;
