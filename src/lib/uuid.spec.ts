import { uuidv4 } from './uuid';

describe('uuid', () => {
  test('generates random uuid correctly', () => {
    const uuid1 = uuidv4();
    const uuid2 = uuidv4();
    expect(uuid1).toBeDefined();
    expect(uuid1).not.toEqual(uuid2);
    expect(uuid1.length).toBe(36);
  });
});
