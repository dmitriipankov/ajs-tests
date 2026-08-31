import healthIndication from '../app';

test('test', () => {
  const result = 4;
  expect(result).toBe(4);
});

test('healthy', () => {
  const mage = { name: 'Маг', health: 90 };
  const result = healthIndication(mage);
  expect(result).toBe('healthy');
});

test('critical', () => {
  const mage = { name: 'Маг', health: 10 };
  const result = healthIndication(mage);
  expect(result).toBe('critical');
});

test('wounded', () => {
  const mage = { name: 'Маг', health: 40 };
  const result = healthIndication(mage);
  expect(result).toBe('wounded');
});
