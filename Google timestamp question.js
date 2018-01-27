var arr = [[1517015309738, 1001], [1517015310738, 1002], [1517015311738, 1001], [1517015312738, 1003], [1517015313738, 1003], [1517015314738, 1004], [1517015315738, 1002], [1517015316738, 1001], [1517015317738, 1003], [1517015318738, 1003], [1517015319738, 1001]]

var timestamp = 1517015316748;

var googleTimestamp = function (arr, timestamp) {
  
  if (arr === undefined || arr.length === 0 || timestamp === undefined) {
    return null
  }
  
  var voteDict = {};
  var highest = 0;
  var winners = [];
  
  for (let i=0; i<arr.length; i++) {
    if (arr[i][0] <= timestamp) {
      if(arr[i][1] in voteDict) {
        voteDict[arr[i][1]]++;
      }
      else {
        voteDict[arr[i][1]] = 1;
      }
    }
    else {
      break;
    }
  }
  
  for (let key in voteDict) {
    if (voteDict[key] > highest) {
      highest = voteDict[key];
    }
  }
  
  for (let key in voteDict) {
    if (voteDict[key] === highest) {
      winners.push(key)
    }
  }
  
  if (winners.length > 1) {
    return winners
  }
  
  return winners[0]
}

console.log(googleTimestamp(arr, timestamp))
console.log(googleTimestamp([], 12))

