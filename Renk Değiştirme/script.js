document.querySelector("#btnswitch").addEventListener("click", generateRandomColor)

function generateRandomColor(){
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor
    // console.log(bodyy);
    // console.log(randomColor);
};