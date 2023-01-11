//The function takes an array as its input and returns the minimum plane for any given index in the input array (the first index would return 0)

function minimumPlanes(arr) {
    let n = arr.length;
    // create memoization table
    let table = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

    table[1] = 0;
    //iterates through each element in an array and checking if that value is greater than or equal to i-j
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (arr[j - 1] >= i - j) {
                //if its greater then returns below value as the minimum plane for that iteration
                table[i] = Math.min(table[i], table[j] + 1);
            }
        }
    }
    // If there are no planes at all, it will return -1
    if (table[n] === Number.MAX_SAFE_INTEGER) {
        return -1;
    }
    return table[n];
}

let arr = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanes(arr)); // Output: 3