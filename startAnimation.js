function startAnim(){
    image=document.getElementById("hideCon")
    imagewidth=250/3;
    a=setInterval(() => {
        image.style.width=((10000-imagewidth*20)/imagewidth)+"%";
        imagewidth+=1;
        if((10000-imagewidth*20)/imagewidth<=0){
            clearInterval(a)
            image.style.width=0+"%";
        }
    }, 1);
}
document.addEventListener("load",startAnim())