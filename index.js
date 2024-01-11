var randomnumber1  =  Math.floor((Math.random() * 6 )+ 1 );
var randomnumberimage = "dice"+ randomnumber1 +".png";
var randomimagesource = "images/"+randomnumberimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor((Math.random() * 6) + 1);
var randomdice = "dice"+ randomnumber2 +".png";
var dicesrc = "images/" + randomdice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",dicesrc);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 is the winner";
}
else if(randomnumber2 > randomnumber1)
{
document.querySelector("h1").innerHTML = "Player 2 is the winner";
}
else{
    document.querySelector("h1").innerHTML = "Drawwwwww!"
}