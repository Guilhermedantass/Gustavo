let cadastro = false
function Cadastro(){
    
    if(!cadastro){
        document.getElementById("cc").style.display = "block";
        document.getElementById("tela").style.display = "block";
        document.body.style.overflow = "hidden";
        cadastro = true;
    }else{
        document.getElementById("cc").style.display = "none";
        document.getElementById("tela").style.display = "none";
        document.body.style.overflow = "visible";
        cadastro = false;
    }
}