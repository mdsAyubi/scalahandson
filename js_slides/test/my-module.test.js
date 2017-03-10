import * as MyModule from './my-module';

//Dependencies
import * as DataHelper from './data-helper';

describe('MyModule Spec', () => {

  describe('MyModule.getKeys Spec', () => {
    it('is a function', () => expect(typeof MyModule.getKeys).toBe('function'));
    it('returns [] by default', () => {
      const result = MyModule.getKeys();
      expect(result).toEqual([]);
    });
    it('returns the keys of a map', () => {
      const map = {
        1: 'StartShip Enterprise',
        2: 'USS Discovery One',
        3: 'Endurance'
      };
      const result = MyModule.getKeys(map);
      expect(result).toEqual(['1','2','3']);
    });
    it('returns the keys of a map--always use mocked', () => {
      const map = {
        1: 'StartShip Enterprise',
        2: 'USS Discovery One',
        3: 'Endurance'
      };
      DataHelper.keysFromMap = jest.fn().mockReturnValueOnce(['1','2','3','4','5'])
      const result = MyModule.getKeys(map);
      expect(result).toEqual(['1','2','3','4','5']);
    });

  });

  describe('MyModule.sum Spec', () => {
    it('is a function', () => expect(typeof MyModule.sum).toBe('function'));
    it('returns 0 if a, b is 0', () => {
      const result = MyModule.sum();
      expect(result).toBe(0);
    });
    it('returns a if b is falsy', () => {
      const result = MyModule.sum(3, false);
      expect(result).toBe(3);
    });
    it('returns b if a is falsy', () => {
      const result = MyModule.sum('', 6);
      expect(result).toBe(6);
    });
    it('returns a+b if a and b are not falsy', () => {
      const result = MyModule.sum(3, 6);
      expect(result).toBe(9);
    });

  });

});
