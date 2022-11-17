//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.searchInSorted(arr, n, k));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/


const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
    const mid = Math.floor((start + end) / 2);

      if (val === arr[mid]) {
           return 1;
         }

        if (start >= end) {
              return -1;
           }

          return val < arr[mid]? binarySearch(arr, val, start, mid - 1): binarySearch(arr, val, mid + 1, end);
}


class Solution {
    
    
    searchInSorted(arr, N, K)
    {
       // return (arr.includes(K)?1:-1);
      return binarySearch(arr,K,0,N)
       
    }
}