
const progress= document.querySelector('.progress_done');

const input= document.querySelector('.input_box');

const btn= document.querySelector('.give');

const amountLeft= document.querySelector('#amount');
const donors= document.querySelector('#donors');
const question= document.querySelector('#question');

let map={
    percentageMax :100, 
    widthMax :300, 
    maxInput :500
};

//our initial variables
let currentWidth=0;
let currentAmount=0;
let currentDonnor=0;

// Calculate the percentage by input amount
function calculatePercentage(){
    return (inputvalue / map.maxInput) * map.percentageMax;
}

//calculate the width based on the percentage 
function calculateWidth(percentage){
   return (map.widthMax * percentage) / map.percentageMax;
}

// Function to increase and update our width 
function updateCurrentWidth(width){
    currentWidth += width;
    if(currentWidth >= map.widthMax){
        currentWidth = map.widthMax;
    }
}

function updateState(diff){
//update the amount left to be donated
    amountLeft.innerHTML = diff;

    //update our progress bar
    progress.style.width = `${currentWidth}px`;
    
    // update the number of donnors
    currentDonnor++;
    donors.innerHTML=currentDonnor;
}
function handleDonation(){
    let percentage = calculatePercentage(); 
    let width =  calculateWidth(percentage);
    let diff=0;

    // our current amount entered by the user
    let localCurrentAmount = currentAmount + inputvalue;
    
//calculate the amount left after each donation
    diff = map.maxInput - localCurrentAmount;

   // check to see if the amount entered exceed the maximum amount for donation
    if(diff <0){
        diff=0;
        alert('amount exceeded ');
        return;
    }
    //update the current amount
    currentAmount =  localCurrentAmount;
    console.log(currentAmount);
    updateCurrentWidth(width);
 
    updateState(diff);
 }
// Now we are selecting our input
input.addEventListener('input', function(e) {
    inputvalue= parseInt(e.target.value);
    minValue= parseInt(input.min);
    
    if(isNaN(inputvalue)){
        question.textContent= minValue;
    } else {
        question.textContent = inputvalue;
    }
    
   
   
})

btn.addEventListener('click', function(){
   handleDonation();
})