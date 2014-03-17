/*
 *  Prime Number finder..
 *  author - alarson@universityprep.org
 */
 
 // global variables
 var primes = [];
 
 function reset() {
    primes = [];
 } 
 
 function find() {
    var n = parseInt(document.getElementById("find").value);
    if (isNaN(n)) { 
        display("invalid input","nthprime");
        return;
    }
   
    if (n>primes.length) {
        display("Didn't find the prime number "+fix(n),"nthprime");
    } else {
        display("The "+fix(n)+" prime number is "+primes[n-1],"nthprime");
    }
 }
 function fix(n) {
    if (n==1) {
        return n+"st";        
    } else if (n==2) {
        return n+"nd";
    } else if (n==3) {
        return n+"rd";
    } else {
        return n+"th";
    }
 }
 
 function show() {
    if (primes.length == 0) {
        display("No Primes Found","output");
    } else if (primes.length > 20) {
        firstfew = []
        for(i=0; i<20; i++) {
            firstfew.push(primes[i]);
        }
        display(firstfew.toString()+" ...","output");
    } else {
        display(primes.toString(),"output");
    }
    
 }
  
 // generate the first N primes - 
function generate() {
    var n = parseInt(document.getElementById("generate").value);
    if (isNaN(n)) { 
        alert("invalid input");
        return;
    }
    
    var max = 2*n;
    var maxcheck = Math.round(Math.sqrt(max));
    var inputs = [];
    for(i=2; i< max; i++) {
        inputs.push(i);
    }
    
    
    // Sieve Algorithm -
    // - generate numbers from 2 to N
    // - from 2 to maxcheck (sqrt(N)) - look through the numbers
    //   - if the first number is there, it's prime,
    //      - then mark all of it's 
    //   - if the first number is not there skip
    var check = 1;
    for(i=2; i<=maxcheck; i++) {
        
        index = i-2;
        while(index < inputs.length) {
            if (index==(i-2))  {
                if (inputs[index]==0) {
                    break;
                } else {
                    index=index+i;
                }
            } else {
                inputs[index]=0;
                index=index+i;
            }
        }
    }
    
    for (i=0; i<inputs.length; i++) {
        if (inputs[i]>0) {
            primes.push(inputs[i]);
        }
    }
    display("Found "+primes.length+" prime numbers","output")
 }
 
  // helper function to display messages
 function display(msg, id) {
    document.getElementById(id).textContent=msg;
 }
