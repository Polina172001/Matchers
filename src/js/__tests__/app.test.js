import matches from '../app';

const result = [{
  name: 'мечник',
  health: 10,
},
{
  name: 'маг',
  health: 100,
},
{
  name: 'лучник',
  health: 80,
},
];

result.sort(matches);

test('should sort arr', () => {
  expect(result).toEqual([{
    name: 'маг',
    health: 100,
  },
  {
    name: 'лучник',
    health: 80,
  },
  {
    name: 'мечник',
    health: 10,
  },
  ]);
});

test('should sort arr toBe', () => {
  expect(result).not.toBe([{
    name: 'маг',
    health: 100,
  },
  {
    name: 'лучник',
    health: 80,
  },
  {
    name: 'мечник',
    health: 10,
  },
  ]);
});
