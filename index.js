let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let string = "";

for(let i=0 ; i<buttons.length ; i++){
    buttons[i].addEventListener("click",(e)=>{
       if(e.target.innerHTML == "="){
            string = eval(string);
            screen.innerHTML = string;
       }
       else if(e.target.innerHTML == "C"){
            string = "";
            screen.innerHTML = string;
       }
       else if(e.target.innerHTML =="&lt;--"){
            string= string.replace(/.$/,'');
            screen.innerHTML = string;
       }
       else{
            string += e.target.innerHTML;
            screen.innerHTML = string;
       }

    })
}



document.addEventListener("keydown",(e)=>{
    if( e.key == "1" || e.key == "2" || e.key == "3"|| e.key == "4"|| e.key == "5"|| e.key == "6"|| e.key == "7"|| e.key == "8"|| e.key == "9"|| e.key == "0"|| e.key == "+" || e.key == "-"|| e.key == "*"|| e.key == "/"|| e.key == "%" || e.key == "."  ){
        string += e.key;
        screen.innerHTML = string;  
    }
    else if(e.key == "=" || e.key == "Enter"){
        string = eval(string);
        screen.innerHTML = string;
    }
    else if(e.key == "Backspace"){
        string= string.replace(/.$/,'');
        screen.innerHTML = string;
    }
    else if(e.key == "c"){
        string = "";
        screen.innerHTML = string;
    }
   

})



document.addEventListener("keydown", function(e){
    if(e.key == "Backspace"){
        string= string.replace(/.$/,'');
        screen.innerHTML = string;
    }
})
