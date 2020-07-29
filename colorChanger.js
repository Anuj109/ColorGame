var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var win=5;
var resetButton=document.querySelector("#reset");
var numInput=document.querySelector("input");
var scoreDisplay=document.querySelector("#scoreDisplay");

p1Button.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score===win){
			gameOver=true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent=p1Score;	
	}
	
	
});
p2Button.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score===win){
			gameOver=true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent=p2Score;	
	}
	
	
});

resetButton.addEventListener("click",reset);

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}

numInput.addEventListener("change",function(){
	scoreDisplay.textContent=this.value;
	win=Number(this.value);
	reset();
});