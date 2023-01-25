
const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
"8", "9","~","`","!","@","#","$","%","^","&","*","(",")"
,"_","-","+","=","{","[","}","]",",","|",":",";","<",">",
".","?",
"/"];
//console.log(characters[61]);

password1El = document.getElementById('password-1');
password2El = document.getElementById('password-2');

generateBtn = document.getElementById('generate-btn');
toggleBtn = document.getElementById('toggle-btn');




function randomPswrd(){
    let generatedPswrd =""
    for(let i =0; i < 9; i++){
        let randomIndex = Math.floor(Math.random()*characters.length);
       let randomP = characters[randomIndex];
       //let  randomXters = randomPswrd.trim()
        generatedPswrd += randomP;
    }
    return generatedPswrd;
};
// Filters out symbols for password
function noSymbols(){
    let generatedPswrd =""
    for(let i =0; i < 9; i++){
        let randomIndex = Math.floor(Math.random()*61);
       let randomP = characters[randomIndex];
        generatedPswrd += randomP;
    }
    return generatedPswrd;
}

generateBtn.addEventListener("click", function(){
    let password1 = randomPswrd();
    let password2 = randomPswrd();

    console.log(password1);
    console.log(password2);
    password1El.textContent = password1;
    password2El.textContent =password2;
});

toggleBtn.addEventListener("click", function(){
    let password1 = noSymbols();
    let password2 = noSymbols();

    console.log(password1);
    console.log(password2);
    password1El.textContent = password1;
    password2El.textContent = password2;
});

//click to copy password 1
const toCopy1 = document.getElementById('password-1');
toCopy1.onclick = function(){
    document.execCommand("copy");
}

toCopy1.addEventListener("copy", function(event){
    event.preventDefault();
    if(event.clipboardData){
        event.clipboardData.setData("text/plain", toCopy1.textContent);
        console.log(event.clipboardData.getData("text"));
    }alert("text copied!");
});

//Click to copy password 2
const toCopy2 = document.getElementById('password-2');
toCopy2.onclick = function(){
    document.execCommand("copy");
}

toCopy2.addEventListener("copy", function(event){
    event.preventDefault();
    if(event.clipboardData){
        event.clipboardData.setData("text/plain", toCopy2.textContent);
        console.log(event.clipboardData.getData("text"));
    }alert("text copied!");
});