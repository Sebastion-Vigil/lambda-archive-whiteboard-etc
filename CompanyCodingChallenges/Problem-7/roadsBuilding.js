// Once upon a time, in a kingdom far, far away, there lived a King Byteasar II.
// There was nothing special about him or his kingdom. As a mediocre ruler, he preferred 
// hunting and feasting over doing anything about his kingdom's prosperity.

// Luckily, his adviser, the wise magician Bitlin, worked for the kingdom's welfare day and night.
// However, since there was no one to advise him, he completely forgot about one important thing: the roads!
// Over the years most of the two-w built by Byteasar's predecessors were forgotten and no longer traversable.
// Only a few roads can still be used.

// Bitlin wanted each pair of cities to be connected, but couldn't find a way to figure out which roads
// are missing. Desperate, he turned to his magic crystal ball for help. The crystal showed him a programmer 
// from the distant future: you! Now you're the only one who can save the kingdom. Given the existing roads 
// and the number of cities in the kingdom, you should use the most modern technologies and find out which roads
// should be built again to connect each pair of cities. Since the crystal ball is quite old and meticulous,
// it will only transfer the information if it is sorted properly.

// The roads to be built should be returned in an array sorted lexicographically,
// with each road stored as [cityi, cityj], where cityi < cityj.

const roadsBuilding = (cities, roads) => {
  const toBuild = [];
  const roadMap = [];
  for (let i = 0; i < cities; i++) {
    for (let j = i + 1; j < cities; j++) {
        roadMap.push([i, j]);
    }
  }
}


