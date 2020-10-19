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