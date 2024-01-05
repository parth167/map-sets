//q1
//new Set([1, 1, 2, 2, 3, 4])
//{1,2,3,4}

//q2
[...new Set('referee')].join('');
//"ref"

//q3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//Map(2) {Array(3) => true, Array(3) => false}

//q4
// hasDuplicate([1, 3, 2, 1]); // true
// hasDuplicate([1, 5, -1, 4]); // false

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//q5
// vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt'); // Map { 'o' => 1 }

function vowel(char) {
  return 'aeiou'.includes(char);
}
function vowelCount(string) {
  const vowelMap = new Map();
  for (let char of string) {
    if (vowel(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}
