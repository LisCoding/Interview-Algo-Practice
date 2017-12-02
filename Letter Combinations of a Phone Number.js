var letterCombinations = function(digits, index = 0, result = [], temp = []) {
    
    if (digits === "") {
      console.log("hi")
        return [];
    }
    var dict = {
      "0" : "",
      "1" : "",
      "2" : "abc",
      "3" : "def",
      "4" : "ghi",
      "5" : "jkl",
      "6" : "mno",
      "7" : "pqrs",
      "8" : "tuv",
      "9" : "wxyz"
    }
    
    if(temp.length === digits.length) {
        result.push(temp.join(""));
        return
    }
    
    for (let x in dict[digits[index]]) {
        console.log("for1", temp)
        temp.push(dict[digits[index]][x]);
        console.log("for2", temp)
        letterCombinations(digits, index + 1, result, temp);
        console.log("for3", temp)
        temp.pop();
        console.log("for4", temp)
    }
    
    return result;
};

console.log(letterCombinations("48"))