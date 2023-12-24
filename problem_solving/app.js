//find largest number in an array 

function findLargestNumber(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return undefined; // or any other value that makes sense for your use case
    }

    // Initialize max with the first element of the array
    let max = numbers[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {
        // Update max if the current element is greater
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Example usage:
const numbersArray = [10, 5, 8, 20, 15];
const largestNumber = findLargestNumber(numbersArray);
console.log(`The largest number is: ${largestNumber}`);

//return words with only characters

function returnOnlyCharacters(words) {
    // Check if the array is empty or character is not provided
    if (words.length === 0) {
        return [];
    }

    // Use filter to create a new array with words that have specific characters
    const filteredWords = words.filter(word => word.includes("$") || word.includes("!"));

    return filteredWords;
}

// Example usage:
const wordsArray = ["$hello!", "%%^%%", "test!"];
const wordsWithCharacters = returnOnlyCharacters(wordsArray);
console.log(`Words with '$' or '!': ${wordsWithCharacters}`);

// are the numbers divisble 
function isDivisible(num1, num2) {
    if (num1 % num2 === 0){
        console.log("is divisible");
    } else {
        console.log("is not divisible");
    }
}

isDivisible(12,3) 



