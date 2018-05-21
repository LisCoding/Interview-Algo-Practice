var lengthOfLongestSubstring = function(s) {
    let mydict = {};
    let max = 0;
    let count = 0;
    let clean = 0;

    for (i=0; i<s.length;i++){
      if (s[i] in mydict) {
        max = max < count ? count : max;
        clean = mydict[s[i]] < clean ? clean : mydict[s[i]];
        count = i - clean;
      }
      else {
        count ++;
      }
      mydict[s[i]] = i;
    }
    return max < count ? count : max;
};

a = "abcabcdbb"
b = "pwwkew"
c = "bbbbbb"
d = "zwnigfunjwz"
e = "abba"
f = "tmmzuxt"
console.log(lengthOfLongestSubstring(a))
console.log(lengthOfLongestSubstring(b))
console.log(lengthOfLongestSubstring(c))
console.log(lengthOfLongestSubstring(d))
console.log(lengthOfLongestSubstring(e))
console.log(lengthOfLongestSubstring(f))