const Capital = require('./capitalize.js');

describe('Capital', () => {
    
  test('Single Word', () => {
    const result = Capital('javascript');
    expect(result).toBe('Javascript');
  });

  test('All Lowercase Letters', () => {
    const result = Capital('sasa hapo');
    expect(result).toBe('Sasa Hapo');
  });

  test('Mixed Case Letters', () => {
    const result = Capital('hello World');
    expect(result).toBe('Hello World');
  });

  test('Empty String', () => {
    const result = Capital('');
    expect(result).toBe('');
  });

  test('Leading and Trailing Spaces', () => {
    const result = Capital(' hello world' );
    expect(result).toBe('Hello World');
  });
});



