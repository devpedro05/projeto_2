const texto = document.querySelector('#original')
const contador = document.querySelector('#contador')
const modificado = document.querySelector('#modificado')
const efeito = document.querySelector('#efeito')
 contador.innerHTML = 0
 

texto.addEventListener('keyup', function verificar(){
  contador.innerHTML = 0 + texto.value.length;

   if(efeito.value == 'uppercase'){
     modificado.innerHTML= original.value.toUpperCase();
   }
   else{
   modificado.innerHTML= original.value.toLowerCase();
      }
   
})
efeito.addEventListener('change', function(){
  
  if(efeito.value == 'uppercase'){
    modificado.innerHTML= original.value.toUpperCase();
  }
  else{
  modificado.innerHTML= original.value.toLowerCase();
     }

})