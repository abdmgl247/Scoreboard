let scoreA = document.getElementById ("score1");
let scoreB = document.getElementById ("score2");
let countA = 0
let countB = 0

function addOne() {
    countA+=1
    scoreA.innerText = countA
}

function addTwo() {
    countA+=2
    scoreA.innerText = countA
}

function addThree() {
    countA+=3
    scoreA.innerText = countA
}

function addFour() {
    countB+=1
    scoreB.innerText = countB
}
function addFive() {
    countB+=2
    scoreB.innerText = countB
}
function addSix() {
    countB+=3
    scoreB.innerText = countB
}