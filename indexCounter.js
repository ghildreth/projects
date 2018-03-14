function countLetters(string) {
  var ourCoolObject = {};
  var brokenWord = string.split('');
  var noSpaces = brokenWord.filter(brokenWord => brokenWord !== " ");

    noSpaces.forEach(function (eachLetter, index, array) {

      if (!ourCoolObject[eachLetter]) {
        ourCoolObject[eachLetter] = [];
      }
         ourCoolObject[eachLetter].push(index);
     });
    return ourCoolObject;
}
console.log(countLetters("Lighthouse in the house"));
