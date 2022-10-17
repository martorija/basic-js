const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason() {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let date = new Date();
  // let year = d.getFullYear();
  let month = date.getMonth()+1;
  // let day = d.getDate();
  if(month){
    console.error('Invalid date!');
   }
  if(isNAN(month)){
   conole.error('Invalid date!');
  }
  // if(month > 12 || month < 1){
  //    console.error('Unable to determine the time of year!');
  //  }
  if(month >2 && month <6 || month == 4){
      return 'spring';
  }
  if(month >5 && month <9 || month == 7){
    return 'summer';
  }
   if(month >8 && month <12 || month == 10){
    return 'autumn';
  }
  if(month ==12 || month == 11|| month == 1){
    return 'winter';
  }
  console.error('Unable to determine the time of year!');
  }
module.exports = {
  getSeason
};
