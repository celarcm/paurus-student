import { TestBed } from '@angular/core/testing';

import { generateUniqueId } from './idGenerator';

describe('StudentService', () => {
  let generateUniqueIdFunction: Function;
  let uniqueId: number

  beforeEach(() => {
    TestBed.configureTestingModule({});
    generateUniqueIdFunction = TestBed.inject(generateUniqueId);
    uniqueId = generateUniqueIdFunction();
  });

  it('should be created', () => {
    expect(uniqueId).toBeLessThan(1000000000);
    const stringNum = uniqueId + '';
    const firstPart = stringNum.slice(0, 2);
    const secondPart = stringNum.slice(2, 5);
    const thirdPart = stringNum.slice(5, 8);
    const diff = Number(firstPart) - Number(secondPart);
    expect(diff).toEqual(Number(thirdPart));
  });
});
