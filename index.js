const scoreBoard = document.getElementById('rating-btn')
const submitButton = document.getElementById('submit-btn')
let rateNum = 0


function changeColor(id){
    document.getElementById(id).classList.toggle('grey-color')
    rateNum = id
    
}

for(let i = 1; i < 6; i++){
    scoreBoard.innerHTML += `<div onclick='changeColor(${i})' class="round-form rating" id="${i}">${i}</div>`
}



submitButton.addEventListener('click', () => {
   document.getElementById('score-card').innerHTML = 
   `    <div class='end-message'>
            <img src="images/illustration-thank-you.svg" />
            <p class='score-selection'>You selected ${rateNum} out of 5</p>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
        </div>
    `
})