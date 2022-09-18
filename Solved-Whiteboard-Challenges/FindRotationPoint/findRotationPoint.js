const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',    // <-- rotation happens here
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ];

const findRotationPoint = (wrds) => {
  // assuming wrds has at least one item in it
  if (wrds.length < 2) return 0;
  // store value of first item in wrds for comparison
  const first = wrds[0];
  // i starts at 1 since we've already observed the first item
  for (let i = 1; i < wrds.length; i++) {
    if (wrds[i] < first) return i;
  }
  return 0;
}

console.log(findRotationPoint(words));