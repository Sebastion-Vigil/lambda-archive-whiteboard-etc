// def coin_flip(n):
//     rounds = 0
//     heads = 0
//     remaining_coins = n
//     do:
//         for i in range(remaining_coins):
//             heads += randint(0, 1)
//         rounds += 1
//         heads = 0
//     while 
// Math.round(Math.random())


function coinFlip(n) {
    let rounds = 0;
    let heads = 0;
    let remainingCoins = n;
    do {
        for (let i = 0; i < remainingCoins.length; i++) {
          heads += Math.round(Math.random());
        }
        rounds += 1;
        heads = 0;
    while (heads);
}