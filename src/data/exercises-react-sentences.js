export const dataArray = [
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

export default testArray;
