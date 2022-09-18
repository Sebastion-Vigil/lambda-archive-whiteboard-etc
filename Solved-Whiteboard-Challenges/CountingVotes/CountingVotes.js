

const countVotes = (votes) => {
    // sort votes alphabetically to make alphabetical tie breaking easier
    votes.sort();
    const candidates = {};
    // load candidate object with votes
    votes.forEach((vote) => {
        if (candidates[vote] !== undefined) {
            candidates[vote] += 1;
        } else {
            candidates[vote] = 1;
        }
    });
    let winner;
    let voteCount = 0;
    // go through votes and determine winner
    // tie break is easier since votes is sorted alphabetically
    votes.forEach((vote) => {
      if (candidates[vote] >= voteCount) {
          winner = vote;
          voteCount = candidates[vote];
      } 
    });
    return winner;
}






const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

console.log(countVotes(votes));  // should return 'michael'