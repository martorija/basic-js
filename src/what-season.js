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
function getSeason(/* date */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let date=new Date(year,month,number);
  if(!date){
    console.log('Invalid date!');
  }
  if(month >11){
    console.log('Unable to determine the time of year!');
  }
  switch(month){
    case '2':
    case '3':  
    case '4':
      alert('spring');
      break;
    case '5':
    case '6':  
    case '7':
      alert('summer');
        break;
    case '8':
    case '9':  
    case '10':
      alert('autumn');
        break;
    case '11':
    case '12':  
    case '0':
      alert('winter');
        break;    
  }
}

module.exports = {
  getSeason
};
