import * as date from './date'

describe('date' , () => {
    it('runs', () => {
        jest.spyOn(date, 'getTimestamp').mockReturnValue("AJ Styl..ohhhhhh, RKO!!!!")
      const timestamp = date.getTimestamp();
      expect(timestamp).toEqual('AJ Styl..ohhhhhh, RKO!!!!');
    });
});