


const tickets = [
    ['PIT', 'ORD'],
    ['XNA', 'CID'],
    ['SFO', 'BHM'],
    ['FLG', 'XNA'],
    [null, 'LAX'],
    ['LAX', 'SFO'],
    ['CID', 'SLC'],
    ['ORD', null],
    ['SLC', 'PIT'],
    ['BHM', 'FLG'],
];
// so my first working solution had horrible time complexity
// I was looping back over the array over and over

// and then I thought, why not use an object?


const reconstructTrip = (mess) => {
    const messStore = {};
    mess.forEach((item) => {
        messStore[item[0]] = item[1];
    })
    const orderedTrip = [];
    let currentOrigin = messStore[null];
    for (let i = 0; i < mess.length; i++) {
        if (currentOrigin) {
            orderedTrip.push(currentOrigin);
        }
        currentOrigin = messStore[currentOrigin];
    }
    return orderedTrip;
};


console.log(reconstructTrip(tickets));

// const reconstructTrip = (mess) => {
//   const orderedTrip = [];
//   let startFound = false;
//   let endFound = false;
//   let currentOrigin;
//   while (true) {
//       if (!startFound) {
//           for (let i = 0; i < mess.length; i++) {
//               if (mess[i][0] === null) {
//                   currentOrigin = mess[i][1];
//                   orderedTrip.push(currentOrigin);
//                   startFound = true;
//               }
//           }
//       }
//       if (!endFound) {
//           for (let i = 0; i < mess.length; i++) {
//               if (mess[i][0] === currentOrigin && mess[i][1] !== null) {
//                   orderedTrip.push(mess[i][1]);
//                   currentOrigin = mess[i][1];
//               } else if (mess[i][0] === currentOrigin && mess[i][1] === null) {
//                   return orderedTrip;
//               }
//           }
//       }
//   }
// }

// console.log(reconstructTrip(tickets));

// returns ['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD']
