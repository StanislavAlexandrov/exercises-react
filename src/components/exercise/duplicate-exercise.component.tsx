import React, { useEffect, useState, memo } from 'react';
import { dataArray } from '../../data/exercises-react-sentences';
import {StepDataType} from "./duplicate-exercise.model";


type DuplicateExerciseProps = {};

// type MyDuplicateExerciseProps = DuplicateExerciseProps & {
//     a: 1
// }
//
// let b: MyDuplicateExerciseProps = {a: 1}

// #2
// interface BaseModel {
//     baseProp: string;
// }
//
// interface MyBaseModel extends BaseModel{
//     myProp: string;
// }

type ComplexStateType = {
    prop?: ComplexStateType;
    obj?: Record<string, ComplexStateType>;
};

const DuplicateExercise = memo<DuplicateExerciseProps>(() => {
    const [complexState, setComplexState] = useState<ComplexStateType>({});
    const [currentStep, setCurrentStep] = useState(0);
    const [errorNumber, setErrorNumber] = useState(0);
    const [currentStepData, setCurrentStepData] = useState<StepDataType>(dataArray[0]);

    const onAnswerClick = (answer: string) => {
        if (answer === currentStepData.answer) {
            setCurrentStep(i => {
                const newStepNumber = ++i;
                const stepsLength = dataArray.length - 1;
                return newStepNumber > stepsLength ? 0 : newStepNumber;
            });
        } else {
            setErrorNumber(i => ++i);
            setCurrentStepData(data => ({ ...data, error: answer }));
        }
    };

    useEffect(() => {
        setCurrentStepData(dataArray[currentStep]);
    }, [currentStep]);

    return (
        <>
            <h2>Current step: {currentStep}</h2>
            <h2>Errors: {errorNumber}</h2>
            <h4>Question:</h4>
            <h3>{dataArray[currentStep].sentence}</h3>
            <h4>Answers:</h4>

            {currentStepData.allAnswers.map(answer => {
                const styleClass = currentStepData.error === answer ? 'button _error' : 'button';
                return (
                    <button
                        onClick={() => onAnswerClick(answer)}
                        key={currentStepData.allAnswers.indexOf(answer)}
                        className={styleClass}
                    >
                        {answer}
                    </button>
                );
            })}
        </>
    );
});

export default DuplicateExercise;
