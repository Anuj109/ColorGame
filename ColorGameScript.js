// alert("connected");
numSquares=6;
var colors=[];
var pickedColor; 
var colorDisplay=document.getElementById("colorDisplay");
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
// hardBtn.classList.add("selected");


init();

function init(){
	
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?numSquares=3:numSquares=6;
			reset();
		})
		
	}
	for(var i=0; i<squares.length; i++){
	
		squares[i].addEventListener("click",function(){
			if(this.style.backgroundColor===pickedColor){
				messageDisplay.textContent="Correct!!"
				changeColors(pickedColor);
				h1.style.backgroundColor=pickedColor;
				resetButton.textContent="Play Again?";
			}
			else{
				messageDisplay.textContent="Try Again";
				this.style.backgroundColor="#232323";
			}
		})
	}	
	reset();
}




function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	messageDisplay.textContent="";
	resetButton.textContent="New colors"; 
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
		
	}
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click",reset);

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var pick=Math.floor(Math.random()*colors.length);
	return colors[pick];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r +", " + b + ", " + g + ")"; 
}