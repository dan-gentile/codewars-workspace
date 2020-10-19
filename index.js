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