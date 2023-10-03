password=document.getElementById("password")
passwordCheck=false;
password.oninput=function(){
    passwordValue=password.value
    passwordLength=document.getElementById("length")
    upper=document.getElementById("upper")
    lower=document.getElementById("lower")
    number=document.getElementById("number")
    special=document.getElementById("special")
    hasUpper=false;
    hasLower=false;
    hasNumber=false;
    hasSpecial=false;
    for(i=0;i<passwordValue.length;i++){
        if((passwordValue.charCodeAt(i)>=97)&&(passwordValue.charCodeAt(i)<=122)){
            hasLower=true;
        }else if((passwordValue.charCodeAt(i)>=65)&&(passwordValue.charCodeAt(i)<=90)){
            hasUpper=true;
        }else if((passwordValue.charCodeAt(i)>=48)&&(passwordValue.charCodeAt(i)<=57)){
            hasNumber=true;
        }else{
            hasSpecial=true;
        }
    }
    if(passwordValue.length>8){
        passwordLength.style.color="rgb(153, 255, 153)"
    }else{
        passwordLength.style.removeProperty("color")   
    }
    if(hasLower){
        lower.style.color="rgb(153, 255, 153)"
    }else{
        lower.style.removeProperty("color")
    }
    if(hasUpper){
        upper.style.color="rgb(153, 255, 153)"
    }else{
        upper.style.removeProperty("color")
    }
    if(hasNumber){
        number.style.color="rgb(153, 255, 153)"
    }else{
        number.style.removeProperty("color")
    }
    if(hasSpecial){
        special.style.color="rgb(153, 255, 153)"
    }else{
        special.style.removeProperty("color")
    }
    if((hasNumber)&&(hasLower)&&(hasSpecial)&&(hasUpper)&&(passwordValue.length>8)){
        passwordCheck=true;
    }else{
        passwordCheck=false;
    }
}
document.getElementById('button').addEventListener('focus',function(){
    inputs=document.querySelectorAll("input")
    for(i=0;i<inputs.length;i++){
        if(inputs[i].value==''){
            inputs[i].style.outline="red solid"
            inputs[i].addEventListener('focus',function(){
                this.style.removeProperty("outline")
                removeEventListener("focus",this)
            })
        }
    }
    if(password.value!=document.getElementById("conPassword").value){
        document.getElementById("conPassword").style.outline="red solid"
        document.getElementById("conPassword").addEventListener('focus',function(){
            this.style.removeProperty("outline")
            removeEventListener("focus",this) 
        })
    }
    if(!passwordCheck){
        password.style.outline="red solid"
        password.addEventListener('focus',function(){
            this.style.removeProperty("outline")
            removeEventListener("focus",this)
        })
    }else{
        password.style.removeProperty("outline")
    }
    errorCount=0
    for(i=0;i<inputs.length;i++){
        if(inputs[i].style.outline){
            errorCount++;
        }
    }
    if(errorCount==0){
        location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
})