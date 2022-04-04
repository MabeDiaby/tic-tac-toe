/*
[x] making divs using HTML 
[x] using js 
[] Build out a 3x3 grid with clickable squares.
[] When a user clicks on a square, mark the square with the current user's token (alternating with each click). You can add an X or an O or some other marker that corresponds to the current player.

[] Once a square has been marked, a user should not be able to click it again to change it.

[] Have a message somewhere in your UI to show who the current player is (i.e. [] Player 1 turn or Player 2 turn)

[] Below your 3x3 grid, you should have a 'reset' button that will reset the game.
*/

const box = document.querySelectorAll(".box")

const box0 = document.querySelector("#box0")
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const box6 = document.querySelector("#box6")
const box7 = document.querySelector("#box7")
const box8 = document.querySelector("#box8")

const boxArray = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

let counter = 0
       
box.forEach((element, i) => {
    element.addEventListener("click", () => {
        if(counter % 2 == 0){
            let h4X = document.createElement("h4")
            h4X.setAttribute("class", "x")
            boxArray[i].appendChild(h4X)
            h4X.innerText = "X"
            console.log(document.querySelector(".x"))
            counter++
        }
        else {
            let h4O = document.createElement("h4")
            h4O.setAttribute("class", "o")
            boxArray[i].appendChild(h4O)
            h4O.innerText = "O"
            console.log(document.querySelector(".o"))
            counter++
        }
        // Player 1 wins
        if (box0.innerText == "X" && box1.innerText == "X" && box2.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box3.innerText == "X" && box4.innerText == "X" && box5.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box6.innerText == "X" && box7.innerText == "X" && box8.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box0.innerText == "X" && box3.innerText == "X" && box6.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box0.innerText == "X" && box4.innerText == "X" && box8.innerText == "X"){
            console.log("Player 1 Wins!");
        }
        if (box2.innerText == "X" && box4.innerText == "X" && box6.innerText == "X"){
            console.log("Player 1 Wins!");
        }
    
        // Player 2 wins
        if (box0.innerText == "O" && box1.innerText == "O" && box2.innerText == "O"){
            console.log("Player 2 Wins!");
        }
        if (box3.innerText == "O" && box4.innerText == "O" && box5.innerText == "O"){
            console.log("Player 2 Wins!");
        }
        if (box6.innerText == "O" && box7.innerText == "O" && box8.innerText == "O"){
            console.log("Player 2 Wins!");
        }
        if (box0.innerText == "O" && box3.innerText == "O" && box6.innerText == "X"){
            console.log("Player 2 Wins!");
        }
        if (box1.innerText == "O" && box4.innerText == "O" && box7.innerText == "O"){
            console.log("Player 2 Wins!");
        }
        if (box2.innerText == "O" && box5.innerText == "O" && box8.innerText == "O"){
            console.log("Player 2 Wins!");
        }
        if (box0.innerText == "O" && box4.innerText == "O" && box8.innerText == "O"){
            console.log("Player 2 Wins!");
        }
        if (box2.innerText == "O" && box4.innerText == "O" && box6.innerText == "O"){
            console.log("Player 2 Wins!");
        }
    })
})

