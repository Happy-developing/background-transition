window.addEventListener("scroll",changeBg);

function changeBg(){
    if(this.scrollY>this.innerHeight/2){
        document.body.classList.add("transiton");
    }else{
        document.body.classList.remove("transiton")
    }
}