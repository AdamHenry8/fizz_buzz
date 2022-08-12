console.log("Let's Begin!");

for(i=1; i <= 100; i++) {
    
    let num3 = i/3;
    let num5 = i/5;
    
    if(Number.isInteger(num3) && Number.isInteger(num5)) {
        console.log('FizzBuzz')
    }
    else if(Number.isInteger(num3)) {
        console.log('Fizz')
    } 
    else if(Number.isInteger(num5)) {
        console.log('Buzz')
    } 
    
    else {
        console.log(i)
    }
 
}



