// fix the bugs

console.log('--- loading: magic number');

function magicNumberHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const faveNumber = prompt(`What's your favorite number?`);
  const birthDate = prompt('On which date were you born?');

  // before moving on ... type check!
  if (typeof faveNumber !== 'string') { throw new TypeError(); }
  if (typeof birthDate !== 'string') { throw new TypeError(); }

  // perform core logic
  const magicNumber = Number(faveNumber - birthDate);
  const message = 'your magic number is:' + magicNumber ;

  // alert result for the user
  alert(message);

  // log action for the developer
  console.log('\n--- magic number ---');
  console.log('magicNumber:', typeof magicNumber, '\n', magicNumber);
  console.log('faveNumber:', typeof faveNumber, '\n', faveNumber);
 // console.log('input2:', typeof input2, '\n', input2);
  console.log('birthDate:', typeof birthDate, '\n', birthDate);
  console.log('message:', typeof message, '\n', message);

}
