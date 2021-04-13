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
    {
        id: 5,
        sentence:
            'About a year ago, just as ... pandemic was hitting New York City, St. John Frizell and his two partners were readying for ... grand reopening of Gage & Tollner, ... newly renovated, 140-year-old restaurant in Downtown Brooklyn.',
        answer: 'the / the / a',
        allAnswers: [
            '- / the / -',
            'a / the / -',
            'the / the / a',
            'a / the / a',
            '- / - / -',
            'the / the / the',
        ],
    },
    {
        id: 6,
        sentence:
            'One day before ... March 15 opening — for which ... three partners had spent almost a year and a half preparing — they made ... difficult decision not to open.',
        answer: 'the / the / the',
        allAnswers: [
            '- / the / -',
            'a / the / -',
            'the / the / a',
            'a / the / a',
            '- / - / -',
            'the / the / the',
        ],
    },
    {
        id: 7,
        sentence:
            '“I posted something about it in ... local Red Hook group on ... Facebook and got ... big response,” he said. “I thought, OK, I can set this up for all of us.”',
        answer: 'a / - / a',
        allAnswers: [
            '- / the / -',
            'a / the / -',
            'the / the / a',
            'a / the / a',
            '- / - / -',
            'a / - / a',
        ],
    },
];

export default dataArray;
