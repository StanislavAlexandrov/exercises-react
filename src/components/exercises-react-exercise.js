import React, { useState, useEffect } from 'react';
import exercisesReactSentences from '../data/exercises-react-sentences';
import { testArray } from '../data/exercises-react-sentences';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const ExercisesReactExerciseComponent = () => {
    const [sentenceNumber, updateSentenceNumber] = useState(1);
    const [errorNumber, updateErrorNumber] = useState(0);
    const extractArray = Object.values(testArray)[sentenceNumber - 1]
        .allAnswers;
    shuffleArray(extractArray);

    function handleSubmit(e) {
        e.preventDefault();

        if (sentenceNumber + 1 in exercisesReactSentences) {
            if (
                e.target.value ===
                exercisesReactSentences[sentenceNumber].answer
            ) {
                updateSentenceNumber((i) => ++i);
            }

            if (
                e.target.innerHTML ===
                exercisesReactSentences[sentenceNumber].answer
            ) {
                updateSentenceNumber((i) => ++i);
            }
        } else {
            updateSentenceNumber(1);
        }
    }

    function handleSubmitAlternative(e) {
        e.preventDefault();

        if (sentenceNumber < testArray.length) {
            if (e.target.innerHTML === testArray[sentenceNumber - 1].answer) {
                updateSentenceNumber((i) => ++i);
                shuffleArray(extractArray);
            } else {
                e.target.style.backgroundColor = 'red';
                setTimeout(() => {
                    e.target.style.removeProperty('background');
                }, 200);
                updateErrorNumber((i) => ++i);
            }
        } else {
            updateSentenceNumber(1);
        }
    }

    return (
        <>
            <li className="todo stack-small">
                <select onChange={handleSubmit}>
                    <option value="grapefruit">Grapefruit</option>

                    <option value="am">
                        {exercisesReactSentences[sentenceNumber].answer}
                    </option>
                </select>
            </li>
            <button onClick={handleSubmit}>
                {exercisesReactSentences[sentenceNumber].false1}
            </button>
            <button onClick={handleSubmit}>
                {exercisesReactSentences[sentenceNumber].answer}
            </button>
            <button onClick={handleSubmit}>
                {exercisesReactSentences[sentenceNumber].false2}
            </button>
            <h1>{exercisesReactSentences[sentenceNumber].sentence}</h1>
            <h1>Errors: {errorNumber} </h1>
            <h1>{testArray[sentenceNumber - 1].sentence}</h1>

            {extractArray.map((object, i) => (
                <>
                    <button
                        className="button"
                        onClick={handleSubmitAlternative}
                        key={i}
                    >
                        {object}
                    </button>
                </>
            ))}
        </>
    );
};

export default ExercisesReactExerciseComponent;
