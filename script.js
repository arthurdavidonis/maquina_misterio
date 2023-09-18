go.addEventListener('click', () =>{
   var msg = document.getElementById("msg");
   const user = document.getElementById("username").value;
   const funcao = document.getElementById("turma").value;

   if(user === ""){
      msg.innerHTML = `Um ou mais campos foi deixado em branco. Tente novamente!`;
      
   }
   else if(funcao === ""){
      msg.innerHTML = `Um ou mais campos foi deixado em branco. Tente novamente!`;

   }
   else{
      msg.innerHTML = `Olá ${user}! Estamos muitos felizes em te ver por aqui, seu registro de acesso já foi salvo. Seja muito bem-vindo!`
   }


})






  




