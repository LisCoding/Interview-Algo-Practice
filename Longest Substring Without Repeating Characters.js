var lengthOfLongestSubstring = function(s) {
    if (typeof(s) !== 'string') {
      return null
    }
    let dict = {};
    let temp = 0;
    let result = 0;
    
    for (let i=0; i<s.length; i++) {
      if (s[i] in dict) {
        temp = i - (dict[s[i]]+1);
        let hold = dict[s[i]]
        console.log(i, dict[s[i]], temp, s[i])
        dict[s[i]] = i;
        for (let key in dict) {
          if (dict[key] < hold) {
            delete dict[key]
          }
        }
      }
      temp++;
      if(temp > result) {
         result = temp;
      }
      dict[s[i]] = i;
    }
    return result;
};


console.log(lengthOfLongestSubstring("abcabcbb"))
