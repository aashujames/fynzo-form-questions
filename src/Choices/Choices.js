import React from "react";

const Choices = ({ selectedQues, setSelectedChoices }) => {
    const { question_type: type } = selectedQues;

    const handleChoice = (choiceId) => {
        setSelectedChoices((selectedChoices) => [
            ...selectedChoices,
            { questionId: selectedQues.id, choiceId }
        ]);
    };
    console.log(type);
    return (
        <div>
            {selectedQues.choices.map((item) => (
                <div key={item.id} onClick={() => handleChoice(item.id)}>
                    {item.choice_text}
                </div>
            ))}
        </div>
    );
};

export default Choices;
