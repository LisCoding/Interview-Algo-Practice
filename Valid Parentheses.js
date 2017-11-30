var isValid = function(s) {
    var store = [];
    for (let i=0; i<s.length; i++) {
      if (s[i] === '[') {
        store.push('[');
      }
      else if (s[i] === ']') {
        if(store[store.length-1] !== '[') {
          return false
        }
        store.pop();
      }
      else if (s[i] === '(') {
        store.push('(');
      }
      else if (s[i] === ')') {
        if(store[store.length-1] !== '(') {
          return false;
        }
        store.pop();
      }
      else if (s[i] === '{') {
        store.push('{');
      }
      else if (s[i] === '}') {
        if(store[store.length-1] !== '{') {
          return false;
        }
        store.pop();
      }
    }
    if(store.length) {
       return false;
    }
    return true;
};


console.log(isValid("([)]"))
console.log(isValid("([])"))





