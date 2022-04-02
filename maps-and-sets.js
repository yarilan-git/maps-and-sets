
// Quick Question #1

// What does the following code return?

// new Set([1,1,2,2,3,4])

    The code returns 1,2,3,4

// Quick Question #2

// What does the following code return?

// [...new Set("referee")].join("")

    The code returns 'ref'

// Quick Questions #3

// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

    The code returns [1,2,3] => true

// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate (arr) {
    const mySet = new Set(arr);
    return (mySet.size != arr.length ? true : false);
}

// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // M

function vowelCount(str) {
    const lowerString = str.toLowerCase();
    const vowels = 'aeiou'; 
    const myMap = new Map();  
    for (let char of lowerString) {
        if (vowels.indexOf(char) > -1) {
            if (myMap.has(char)) {
                myMap.set(char, myMap.get(char) + 1);
            } else {
                myMap.set(char, 1);
            }
        }
    }    
    return myMap;
    
}