const update_amount= document.querySelector('.amount');

const progress= document.querySelector('.progress_done');
console.log(progress)
const input= document.querySelector('.input_box');

const btn= document.querySelector('.give');

const leftAmount= document.querySelector('#amount');
const donors= document.querySelector('#donors');


let map={percentageMax:100, widthMax:300, maxInput:500};
let currentWidth=0;
let currentAmount=0;
let currentDonnor=0;
//creating our function to dynamically change our progress bar width

function calculatePercentage(){
    return (inputvalue / map.maxInput) * map.percentageMax;
}

function calculateWidth(percentage){
   return (map.widthMax * percentage) / map.percentageMax;
}

function updateState(diff){

    leftAmount.innerHTML = diff;

    progress.style.width = `${currentWidth}px`;
    
    currentDonnor++;
    donors.innerHTML=currentDonnor;
}

function updateCurrentWidth(width){
    currentWidth += width;
    if(currentWidth >= map.widthMax){
        currentWidth = map.widthMax;
    }
}

function handleDonation(){
    let percentage = calculatePercentage(); //percenta
    let width =  calculateWidth(percentage);
    let diff=0;

    let localCurrentAmount = currentAmount + inputvalue;
    

    diff = map.maxInput - localCurrentAmount;
    
    if(diff <0){
        diff=0;
        alert('amount exceeded ');
        return;
    }
    currentAmount =  localCurrentAmount;
    
    updateCurrentWidth(width);
 
    updateState(diff);

  // 100-90
 }
// Now we are selecting our input
input.addEventListener('keyup', function() {
    inputvalue= parseInt(input.value,10);
})

btn.addEventListener('click', function(){
   handleDonation();
})