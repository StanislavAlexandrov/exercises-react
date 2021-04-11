import React, { useState } from 'react';
import { dataArray } from '../../data/exercises-react-sentences';

export default function DuplicateExercise() {
    const [currentStep, setCurrentStep] = useState(0);
    const [errorNumber, setErrorNumber] = useState(0);

    const [currentStepData, setCurrentStepData] = useState(dataArray[0]);

    const onAnswerClick = (answer) => {
        if (answer === currentStepData.answer) {
            const newCurrentStep =
                currentStep < dataArray.length
                    ? setCurrentStep((i) => ++i)
                    : setCurrentStep(0);
            setCurrentStepData(dataArray[currentStep]);
            console.log(newCurrentStep);
        } else {
            setErrorNumber((i) => ++i);
            console.log(answer);
        }
    };

    return (
        <>
            <h2>Current step: {currentStep}</h2>
            <h2>Errors: {errorNumber}</h2>

            {currentStepData.allAnswers.map((answer) => {
                return (
                    <button onClick={() => onAnswerClick(answer)}>
                        {answer}
                    </button>
                );
            })}
        </>
    );
}
