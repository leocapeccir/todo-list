var adicionarBotao = document.querySelector(".botao");
var inputCampo = document.querySelector(".input");
var container = document.querySelector(".container");


adicionarBotao.addEventListener("click", function(){
    var texto = document.createElement("p");
     texto.innerText = inputCampo.value;
     inputCampo.value = "";
    container.appendChild(texto);
     texto.classList.add("texto-estilo"); 
    

 texto.addEventListener("click", function(){
        texto.style.textDecoration = "line-through red";
        
    })

    
texto.addEventListener("dblclick", function(){
        container.removeChild(texto);
    })
    
    
})
