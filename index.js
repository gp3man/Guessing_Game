const numField = document.querySelector("#number-field")
const guessButton = document.querySelector("#guess-button")
const hintButton = document.querySelector("#hint-button")
const resetButton = document.querySelector("#reset-button")
const guessList = document.querySelector("ul");
const h4 = document.querySelector("h4");

const guessesArr =[]
const livesStart =3
let guessCount = 0
const correctAnswer = Math.floor(Math.random() * 101);

//Code for random qoute
const qouteArr= ["You don't know when to quit, do ya Griswold?","It's all part of the act, Russ.","Have you ever swam with the dolphins? Them things are hard to catch","Yeah, where can I get some damn bait?"]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log(correctAnswer)

    guessButton.addEventListener("click", function(){
        let randomQoute = Math.floor(Math.random() * 4);
        const currentGuess = numField.value;
        console.log(currentGuess)
        if (guessCount < livesStart){
            if (currentGuess == correctAnswer) { 
                alert("WINNER, WINNER, CHICKEN DINNER!!!!!!!"); 
            }
            guessCount++;

        //     if (guessCount == livesStart) {alert("Game over")
        
            
        
        const passGuesses= document.createElement("li")
        passGuesses.textContent = currentGuess
        guessList.appendChild(passGuesses)
        guessesArr.push(currentGuess)
        h4.textContent = (qouteArr[randomQoute])
        } else {
            alert("I haven't seen a beatin' like that since somebody stuck a banana in my pants and turned a monkey loose.");
        }

        console.log(`You have "${livesStart - guessCount}" More Tries!`)
        console.log("Tries You Made- " + guessCount)
        console.log(guessesArr) 
});

hintButton.addEventListener("click", function(){
    console.log("You Suck!!!!!!!!!!!!!!!")
//Should help user get closer to the right number
})
resetButton.addEventListener("click", function(){
    guessCount = 0
    // browser.menus.refresh()
    document.location.reload()
})

