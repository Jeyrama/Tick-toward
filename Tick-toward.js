/*
Define a function that generates medial values between two coordinates 
and returns them in an array from start to target. 

For example, if the starting point is [1,1] and the target point is [3,2],
then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. 
The route should go only through integral coordinates.

Note: 
  You should move diagonally until the path from your current position 
  to the target can be represented as a fully horizontal/vertical line.

Examples:
  tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
  tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
  tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/


// Solution

function tickToward ([a, b], [x, y]) {

  let res = [[ a, b ]]; 

  if (a === x && b === y)
    return res;

  if (a < x) a++;
  if (a > x) a--;
  
  if (b < y) b++;
  if (b > y) b--;

  return res.concat(tickToward([a, b], [x, y]))
}

// or

function tickToward([a, b], [x, y]) {
  let res = [[ a, b ]];
  if (a == x && b == y) return res;
  
  const [dx, dy] = [x-a, y-b].map(Math.sign);
  if (a != x) a += dx;
  if (b != y) b += dy;
  return [...res, ...tickToward([a, b], [x, y])];
}