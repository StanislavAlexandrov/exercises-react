const exercisesReactSentences = {
    1: {
        sentence: 'I ... a student',
        answer: 'am',
        false1: 'where',
        false2: 'haha',
    },
    2: {
        sentence: 'Second sentence',
        answer: 'second',
        false1: 'where',
        false2: 'haha',
    },
    3: {
        sentence: 'Third sentence',
        answer: 'third',
        false1: 'where',
        false2: 'haha',
    },
    4: {
        sentence: 'sentence 4',
        answer: 'fourth',
        false1: 'where',
        false2: 'haha',
    },
    5: {
        sentence: 'sentence 5',
        answer: 'fifth',
        false1: 'where',
        false2: 'haha',
    },
    6: {
        sentence: 'sentence 6',
        answer: 'sth',
        false1: 'where',
        false2: 'haha',
    },
    7: {
        sentence: 'sentence 7',
        answer: 'seventh',
        false1: 'where',
        false2: 'haha',
    },
};

export const testArray = [
    {
        id: 1,
        sentence: 'This is ... tree. ...tree is green.',
        answer: 'a / the ',
        allAnswers: [
            'a / the ',
            'a / a ',
            'the / the',
            'the / a',
            '- / the',
            'a / -',
        ],
    },
    {
        id: 2,
        sentence: 'My friend has no ... bicycle.',
        answer: '-',
        allAnswers: ['-', 'a', 'the'],
    },
    {
        id: 3,
        sentence:
            '... weather is fine today. ...sky is blue. ...sun is shining brightly.',
        answer: 'the / the / the',
        allAnswers: [
            'the / the / the',
            'a / the / the',
            'the / a / the',
            'the / the / a',
            'a / a / a',
            '- / the / the',
        ],
    },
    {
        id: 4,
        sentence: 'He likes his ... cat. He gives ... cat ... milk every day.',
        answer: '- / the / -',
        allAnswers: [
            '- / the / -',
            'a / the / -',
            'the / the / -',
            'a / the / a',
            '- / - / -',
            'the / the / the',
        ],
    },
];

export default exercisesReactSentences;
