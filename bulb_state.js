// The following problem states that, thr are n bulbs in a room, the first person who comes in flips all the switches, the second person flips every second switch, the third person flips every third switch. Note: Flip a switch is changing from x to o or, o to x. 

// Provided the bulb's number and the person's number, find the state of the number in constant time complexity. 

// X    1  2  3  4  5  6  7  8 . . n
// P1  x  x  x   x  x  x  x  x     
// P2  x  o  x  o  x  o  x  o
// P3  x  o  o  o  x  x  x  o
// .
// .
// Pn


// If b=3 and p3, the state is o

function find_bulb(bulbs_number, persons_number){
  let bulb_state = false
  for (let i=0;i<persons_number;i++) {
    if(!(bulbs_number%(i+1))){
      bulb_state = !bulb_state
    }
  }
  return bulb_state ? 'x' : 'o'
}

// a = 12
// b = 24
// n = 0
  
// for i in range(1, min(a, b)+1): 
//     if a%i==b%i==0: 
//         n+=1
      
// print(n) 

function bulb_state_finder(bulbs_number, persons_number){
  bulb_state = false
  min = bulbs_number < persons_number ? bulbs_number : persons_number
  for (i=1;i<min+1;i++){
    if (bulbs_number%i==0 && persons_number%i==0){
      console.log(i)
      bulb_state = !bulb_state
    }
  }
  return(bulb_state)
}

// bulb_state_finder(4,3)

function better_find_bulb(bulbs_number, persons_number){
    factors = calculate(bulbs_number)
    bulb_state = false

    x = 0 
    while(factors[x] <= persons_number){
      bulb_state = !bulb_state;
      console.log(x, bulb_state)
      x++;
    }

    return bulb_state
}

function integrated(bulbs_number, persons_number) {

    var half = Math.floor(bulbs_number / 2), // Ensures a whole number <= num.
    arr = [1], // 1 will be a part of every solution.
    i, j;

    // Determine our increment value for the loop and starting point.
    bulbs_number % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        bulbs_number % i === 0 ? arr.push(i) : false;
    }

    arr.push(bulbs_number); // Always include the original number.
    return(arr);
}

// integrated(4,4)


function calculate(num) {

    var half = Math.floor(num / 2), // Ensures a whole number <= num.
    arr = [1], // 1 will be a part of every solution.
    i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? arr.push(i) : false;
    }

    arr.push(num); // Always include the original number.
    return(arr);
}

// calculate(4);
// better_find_bulb(5,5)


// console.log(find_bulb(4,4))


function gcd(k, n) {
    return k ? gcd(n % k, k) : n;
}

// console.log(gcd(4, 4));

function findPrimeFactors (num) {

    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }
    
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}
console.log(findPrimeFactors(4));
