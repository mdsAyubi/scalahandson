import * as DataHelper from './data-helper';
//DataHelper = require('./data-helper');


const getKeys = map => {
  return DataHelper.keysFromMap(map);
};

const sum = (a,b) => {
  return DataHelper.sum(a || 0,b || 0);
};

export {
  getKeys,
  sum
};
