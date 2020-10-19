function songDecorder(song) {
    let songReplace = song.replace(/WUB/g, " ").trim();
    let result = songReplace.replace(/ +(?= )/g, '');

    console.log(result)
}



function filter_list(list) {
    // if string = remove
    // if integer = keep
    let listArr = list;
    const result = listArr.filter(word => typeof word === "number");
    console.log(result)

}

function isSquare(n) {
    // if square return value 
    // if not square return false 
    // check square by looking at the square root
    let sqrt = Math.sqrt(n) % 1 == 0;
    console.log(sqrt)
}


function sumTwoSmallestNumbers(numbers) {
    const sortNumArr = numbers.sort(function(a, b) { return a - b; });
    return sortNumArr[0] + sortNumArr[1];

}



function printError(string) {
    // a-m
    // anything greater than m should return an error, 
    // an array a -> m if find the value return true else return false
    // total up the number of false vs total 
    const testStr = "abcdefghijklm";
    const testArr = testStr.split("");

    const inputArr = string.toLowerCase().replace(/\s/g, '').trim().split("");
    const resArr = [];

    inputArr.forEach(element => {
        let response = testArr.includes(element);
        resArr.push(response);
    });

    const falseRes = resArr.filter(res => res === false);

    console.log(`${falseRes.length}/${resArr.length}`);
}

function findShort(s) {
    // sort all words by a-b
    const inputArr = s.split(" ");
    const sorted = inputArr.sort(function(a, b) { return a.length - b.length });
    return sorted[0].length;

}

// not solved
function digitalRoot(n) {
    // "16" => "1" + "6"
    // "127" => "1"+ "2" + "3"
    // take numbers in, convert to string, split, then make integer, then add them, return sum
    const numArr = n.toString().split("");
    const newNumArr = [];

    numArr.forEach(element => {
        newNumArr.push(parseInt(element))
    })

    console.log(newNumArr.length)

    function add(newNumArr) {
        if (newNumArr.length === 1) {
            return newNumArr[0];
        } else if (newNumArr.length === 2) {
            return newNumArr[0] + add(newNumArr.slice(1));
        } else {
            console.log(add(newNumArr.slice(1)))
        }

    }
    console.log(add(newNumArr.slice(1)))
}

// ********************************************
//  NOT SOLVED
// ********************************************
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(nums) {
    // input is an array or single number
    // sort the array 
    // then tally the number of times a number appears 
    // find which number is odd 
    // if only one number appears return that number 

    if (nums.length === 1) {
        console.log(nums[0]);
    } else {
        const sortedNums = nums.sort();
        console.log(sortedNums)

        for (let i = 0; i < sortedNums.length; i++) {
            let count = 0;
            if (sortedNums[i] === sortedNums[i + 1]) {
                count++
            }
            console.log(count)
        }

    }




}


// ********************************************
// SOLVED
// ********************************************
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//  Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(int) {
    // takes an array 
    // check if all values are even
    const evenArr = [];
    const oddArr = [];
    int.forEach(num => {
        if (num % 2 === 0) {
            evenArr.push(num);
        } else {
            oddArr.push(num);
        };
    });

    if (evenArr.length === 1) {
        return evenArr[0];
    } else {
        return oddArr[0];
    };

}

// ********************************************
// NOT SOLVED
// ********************************************
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x) {
    // assign all letters of the alphabet a value 
    const keysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabetArr = alphabet.split("");

    const map = new Map();

    for (let i = 0; i < keysArr.length; i++) {
        map.set(keysArr[i], alphabetArr[i])

    }
    console.log(map)
    const inputArr = x.split(" ");

    for (let i = 0; i < inputArr.length; i++) {
        // map(inputArr[i]);

    }

}

// ********************************************
// SOLVED
// ********************************************

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. 
// It must return the display text as shown in the examples:

function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length -2} others like this`;

    };
}

// ********************************************
// UN SOLVED
// ********************************************
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements 
// with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function(iterable) {
        if (Array.isArray(iterable) === true) {
            const sortedArr = iterable.sort()



            // console.log(sortedArr);
        } else {
            const inputArr = iterable.split("");
            const newSortedArr = inputArr.sort();
            for (let i = 0; i < newSortedArr.length; i++) {
                console.log(newSortedArr[i])
                console.log(newSortedArr[i + 1])
                    // if (sortedArr[i] === sortedArr[(i + 1)]) {
                    //     console.log(sortedArr[i])
                    // }
            }
        }


    }
    // uniqueInOrder(["h,2,2,2,1"])
    // uniqueInOrder("ahhhhhhhhh")
    // uniqueInOrder("hhhhahahahhs")


// ********************************************
// SOLVED
// ********************************************
// single unique value in an array, return that value

function findUniq(arr) {
    const sortedArr = arr.sort(function(a, b) { return a - b });

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i + 1] && sortedArr[i] !== sortedArr[i - 1]) {
            console.log(sortedArr[i]);
        };
    };
};


// ********************************************
// UN SOLVED
// ********************************************
// convert a dash or underscore to Upper Camel Case