const numField = document.querySelector("#number-field")
const guessButton = document.querySelector("#guess-button")
const hintButton = document.querySelector("#hint-button")
const resetButton = document.querySelector("#reset-button")
const guessList = document.querySelector("ul");

const guessesArr =[]
const livesStart =3
let guessCount = 0
const correctAnswer = Math.floor(Math.random() * 101);
console.log(correctAnswer)

    guessButton.addEventListener("click", function(){
        const currentGuess = numField.value;
        console.log(currentGuess)
        while(guessCount >= livesStart){
            if (guessCount==livesStart)
            {
                alert("Game over")
            }
            else if (currentGuess == correctAnswer){
                alert("WINNER, WINNER, CHICKEN DINNER!!!!!!!")
            }
        } 
        guessCount++
        const passGuesses= document.createElement("li")
        passGuesses.textContent = currentGuess
        guessList.appendChild(passGuesses)
        guessesArr.push(currentGuess)

        console.log(`You have "${livesStart-guessCount}" More Tries!`)
        console.log("Tries You Made-"+ guessCount)
        console.log(guessesArr)
       
})

hintButton.addEventListener("click", function(){
    console.log("You Suck!!!!!!!!!!!!!!!")
})
resetButton.addEventListener("click", function(){
    guessCount = 0
    browser.menus.refresh()
})

