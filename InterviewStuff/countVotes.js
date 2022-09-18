
const myVotes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];


const countVotes = (votes) => {
    votes.sort(function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
    const canditates = {}
    for (let i = 0; i < votes.length; i++) {
        if (canditates[votes[i]] === undefined) {
            canditates[votes[i]] = 0;
        } else {
            canditates[votes[i]] += 1;
        }
    }
    let winner = '';
    let maxVotes = 0;
    for (let i = 0; i < votes.length; i++) {
        if (canditates[votes[i]] >= maxVotes) {
            maxVotes = canditates[votes[i]];
            winner = votes[i];
        }
    }
    return winner;
}



console.log(countVotes(myVotes));