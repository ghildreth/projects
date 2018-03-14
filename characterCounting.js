function countLetters(string) {
  var ourCoolObject = {};
  var brokenWord = string.split('');

    brokenWord.forEach(function (eachLetter) {
      y = 1;

      if (ourCoolObject[eachLetter] === y){
        y++
      }
      if (eachLetter !==  " ") {
         ourCoolObject[eachLetter] = y;
         // console.log(eachLetter);
      }
    });
    return ourCoolObject;
}
console.log(countLetters("Lighthouse in the house"));

// var obj = {
//   a: 1
// }

// obj.b = 2;
// obj['c'] = 3;

// var key = 'd';

// obj.key = 4;
// obj[key] = 5;

// {
//   a: 1,
//   b: 2,
//   c: 3,
//   key: 4,
//   d: 5
// }