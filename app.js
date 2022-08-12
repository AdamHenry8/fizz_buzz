console.log("Let's Begin!");

function executeFizzBuzz() {
    for(i=1; i <= 100; i++) {
    
        let num3 = i/3;
        let num5 = i/5;
        
        if(Number.isInteger(num3) && Number.isInteger(num5)) {
            let wordToPrint = "FizzBuzz"
            addToList(wordToPrint);
        }
        else if(Number.isInteger(num3)) {
            let wordToPrint = "Fizz"
            addToList(wordToPrint);
        } 
        else if(Number.isInteger(num5)) {
            let wordToPrint = "Buzz"
            addToList(wordToPrint);
        } 
        
        else {
            let wordToPrint = i;
            addToList(wordToPrint);
        }
     
    }

}

function addToList(word) {
    const ul = document.getElementById("main_list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(word));
    ul.appendChild(li);
}




