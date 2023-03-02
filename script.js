/* Declare variables below to save the different sections (divs) of your story*/
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let initialbuttons = document.querySelector(".buttons");
let op = document.querySelector(".story-opening");
let title = document.querySelector(".title");
let endOne = document.querySelector(".option-one-end");
let endTwo = document.querySelector(".option-two-end");
let buttonOne2 = document.querySelector(".option-one2");
let buttonTwo2 = document.querySelector(".option-two2");
let buttons2 = document.querySelector(".buttons2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");


buttonOne.onclick=function(){
    optionOne.style.display = ".option-one-screen" ;
    initialbuttons.style.display = "none";
    op.style.display = "none";
    title.style.display = "none";
    optionTwo.style.display="none";
    endOne.style.display = "none";
    endTwo.style.display = "none";
    optionOne.style.display = "block";
    buttons2.style.display = "block";
};
buttonTwo.onclick = function(){
	optionTwo.style.display = ".option-two-screen";
    initialbuttons.style.display="none";
    op.style.display = "none";
    title.style.display = "none";
    optionOne.style.display = "none";
    endOne.style.display = "none";
    endTwo.style.display = "none";
    buttons2.style.display = "none";
    optionTwo.style.display = "block";
    button3.style.display = "block";
    optionOne.style.display = "none";
    button4.style.display = "none";
    
};
buttonOne2.onclick = function(){
	optionOne.style.display = "none";
    buttons2.style.display = "none";
    endOne.style.display = "block";
    button3.style.display = "block";
    button4.style.display = "none";
};
buttonTwo2.onclick = function(){
	optionOne.style.display = "none";
    buttons2.style.display = "none";
    endTwo.style.display = "block";
    button4.style.display = "block";
    
    
};
button3.onclick = function(){
    title.style.display = "block";
	op.style.display = "block";
    initialbuttons.style.display = "block";
    endTwo.style.display = "none";
    button3.style.display = "none";
    endOne.style.display = "none";
    optionTwo.style.display = "none";
};
button4.onclick = function(){
    title.style.display = "block";
	op.style.display = "block";
    initialbuttons.style.display = "block";
    endTwo.style.display = "none";
    button3.style.display = "none";
    endOne.style.display = "none";
    button4.style.display = "none";
};

