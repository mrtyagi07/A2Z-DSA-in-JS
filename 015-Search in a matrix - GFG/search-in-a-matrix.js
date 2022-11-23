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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let N = parseInt(input_line[0]);
        let M = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let matrix = new Array(N);
        for(let i=0;i<N;i++)
        {
            let a = new Array(M);
            for(let j=0;j<M;j++)
            {
                a[j] =parseInt(input_line[i*M+j]);
            }
            matrix[i] = a;
        }
        let X = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.matSearch(matrix, N, M, X);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[][]} matrix
 * @param {number} N
 * @param {number} M
 * @param {number} X
 * @returns {number}
*/
class Solution {
    
    matSearch(matrix, N, M, X){
        
        //n^2
    //   for(let i=0;i<N;i++){
    //       for(let j=0;j<M;j++){
    //           if(matrix[i][j]===X)
    //           return 1;
    //       }
    //   }
    //   return 0;
    
    let rows = N,cols = M,row = 0, col = cols-1;
			
        while (row < rows && col > -1) {
            let cur = matrix[row][col];
            if (cur === X) return 1;
            if (X > cur) row++;
            else col--;
        }
        
        return 0;
    
    
    }
}