for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
  function countFizzbuzz(arr) {
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzbuzzCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "Fizz") {
        fizzCount++;
      } else if (arr[i] === "Buzz") {
        buzzCount++;
      } else if (arr[i] === "Fizzbuzz") {
        fizzbuzzCount++;
      }
    }
  
    const tally = {
      Fizz: fizzCount,
      Buzz: buzzCount,
      Fizzbuzz: fizzbuzzCount,
    };
  
    return tally;
  }
  
  // Assuming you have an array generated from the FizzBuzz loop
  const fizzbuzzArray = [
    // ... the array generated from the FizzBuzz program ...
  ];
  
  const result = countFizzbuzz(fizzbuzzArray);
  console.log(result);
  