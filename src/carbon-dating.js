const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const k = 0.693/HALF_LIFE_PERIOD;
  let age = 0;
  let r =0;

  if(sampleActivity <= 0 || sampleActivity> 3000){
    return false;
  }
  if(Number.isInteger(sampleActivity)){
    r = (Math.LN2(MODERN_ACTIVITY/sampleActivity))/k;
    age = parseInt(r);
  }
  else{
    return false;
  }
  return age;
}

module.exports = {
  dateSample
};
