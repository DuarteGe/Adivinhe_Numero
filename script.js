var num = Math.floor(Math.random()*(10-1+1)+1)

var resp = document.getElementById("res")
var cora1 = document.getElementById("cor1")
var cora2 = document.getElementById("cor2")
var cora3 = document.getElementById("cor3")
var chances = 3

function clicou(x){
  if(x==num){
  resp.innerHTML= "Acertou!"
  chances++
  }else{
    resp.innerHTML = "Errou!"
  }
  contar()
}

function contar(){
  chances--
  switch(chances){
    
    case 0:
      cora1.style.backgroundImage="none"
      cora2.style.backgroundImage="none"
      cora3.style.backgroundImage="none"
      break;
    case 1:
      cora2.style.backgroundImage="none"
      cora3.style.backgroundImage="none"
    break;

    case 2:
      cora3.style.backgroundImage="none"
    break;
  }
}
