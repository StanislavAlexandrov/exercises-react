import React, { useEffect, useMemo, useState } from 'react';
import { dataArray } from '../../data/exercises-react-sentences.js';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const Exercise = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [errorNumber, setErrorNumber] = useState(0);

    //why do we need a self invoke anon function here?

    const [currentStepData, setCurrentStepData] = useState(() => dataArray[0]);
    console.log(currentStepData);

    const onAnswerClick = (answer) => {
        if (answer === currentStepData.answer) {
            setCurrentStep((i) => {
                const newStepNumber = ++i;
                const stepsLength = dataArray.length - 1;

                return newStepNumber > stepsLength ? 0 : stepsLength;
            });
        } else {
            setCurrentStepData((data) => ({ ...data, error: answer }));
            setErrorNumber((i) => ++i);
        }
    };

    useEffect(() => {
        setCurrentStepData(dataArray[currentStep]);
    }, [currentStep]);

    return (
        <>
            <h2>Current step: {currentStep}</h2>
            <h2>Errors: {errorNumber} </h2>

            <h4>Question:</h4>
            <div>{currentStepData.sentence}</div>

            <h4>Answers:</h4>
            {currentStepData.allAnswers.map((answer) => {
                const styleClass =
                    currentStepData.error === answer
                        ? 'button _error'
                        : 'button';

                return (
                    <>
                        <button
                            className={styleClass}
                            onClick={() => onAnswerClick(answer)}
                            key={answer.id}
                        >
                            {answer}
                        </button>
                    </>
                );
            })}
        </>
    );
};

export default Exercise;
