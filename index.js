const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(characters.length)
let generatePwd=document.getElementById("generate")
let lengthField=document.getElementById("length-field")
let textFieldUn=document.getElementById("text-field-un")
let textFieldDos=document.getElementById("text-field-dos")
let count=1
let isAliveInc=true,isAliveDec=true
lengthField.textContent="Size - "+count
let randIndex=0
generatePwd.addEventListener("click", function(){
    textFieldUn.textContent=""
    textFieldDos.textContent=""
    for(let i=0;i<count;i++){
        randIndex=Math.floor(Math.random()*characters.length)
        textFieldUn.textContent+=characters[randIndex]
        randIndex=Math.floor(Math.random()*characters.length)
        textFieldDos.textContent+=characters[randIndex]
    }
})
function aliveCheck(){
    if(count>=10){
        isAliveInc=false
        isAliveDec=true
    }else if(count<=1){
        isAliveDec=false
    }else{
        isAliveInc=true
        isAliveDec=true
    }
}
function increment(){
    aliveCheck()
    if(isAliveInc===true){
        count++
        lengthField.textContent="Size - "+count
    }else{
        console.log()
    }
}
function decrement(){
    aliveCheck()
    if(isAliveDec===true){
        count--
        lengthField.textContent="Size - "+count
    }else{
        console.log()
    }
}