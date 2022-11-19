

//User function Template for Java


class Compute {
    
    public static int missingNumber(int A[], int N)
    {
	    
	     let missing = [];

             for ( let i = 1; i <= N; i++ ) {

	       if (A.indexOf(i) == -1) {

		missing.push(i);

	    }

      }

return missing;
	    
         
         }
    }
