// Input: 
let data = [
    {skill: 'css', user: 'Dipesh'},
    {skill: 'javascript', user: 'John'},
    {skill: 'javascript', user: 'Dipesh'},
    {skill: 'css', user: 'Sravani'},
    {skill: 'javascript', user: 'Sravani'},
    {skill: 'html', user: 'John'},
  ]
  
  // Output: [ { skill: 'css', user: [ 'Dipesh', 'Sravani' ], count: 2 },
  //   { skill: 'html', user: [ 'John' ], count: 1 },
  //   { skill: 'javascript',
  //     user: [ 'John', 'Dipesh', 'Sravani' ],
  //     count: 3 } ]
  
  
  function dip(input){
    // loop through Data
  
    // create output as an Array
    // loop through output array??
    // each time new skill - make new object in the array and then add the name and Count
    // if already there then increase count and add user
  
    output = []
  
    for (i=0;i<input.length;i++){
      let newItem = true
      for (j=0;j<output.length;j++){
        if (input[i]['skill'] == output[j]['skill']){
          newItem = false
          break
        }
      }
      if (newItem) {
        output.push({'skill' : input[i]['skill'], 'user': [input[i]['user']], 'count': 1})
      }
      else {
        output[j]['count'] += 1;
        output[j]['user'].push(input[i]['user'])
      }
      
    }
  
    return output
  }
  
  function dip_better(input){
  
    output = []
    let existingObjects = {}
  
    for (i=0;i<input.length;i++){
  
      if (input[i]['skill'] in existingObjects) {
        output[existingObjects[input[i]['skill']]]['count'] += 1;
        output[existingObjects[input[i]['skill']]]['user'].push(input[i]['user'])
      }
      else {
        existingObjects[input[i]['skill']] = output.length
        output.push({'skill' : input[i]['skill'], 'user': [input[i]['user']], 'count': 1})
      }
      
    }
  
    return output
  }
  
  console.log(dip_better(data))