const texto = document.querySelector('#original')
const contador = document.querySelector('#contador')
const modificado = document.querySelector('#modificado')
const efeito = document.querySelector('#efeito')
 contador.innerHTML = 0

texto.addEventListener('keyup', function(){
 contador.innerHTML = 0 + texto.value.length
  efeito.options[efeito.selectedIndex].text;
 if(efeito.value == 'uppercase'){
  modificado.innerHTML= original.value.toUpperCase();
}
else{
modificado.innerHTML= original.value.toLowerCase();
  }
}) 

