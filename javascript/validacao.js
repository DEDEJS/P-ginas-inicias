

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");


nome.addEventListener("click", InputNome);
sobrenome.addEventListener("click", InputSobrenome);
email.addEventListener("click", InputEmail);
senha.addEventListener("click", InputSenha);

function ValidaNomeInput() {
  var nome = document.getElementById('nome');
  
  if(nome.value.length <= 0){
    
    nome.style.borderColor = 'red';
   } if(nome.value.length >=1){
     nome.style.borderColor = '#d2d6da';
   }
  
}
function ValidaSobrenomeInput(){
  var sobrenome = document.getElementById('sobrenome');
  if(sobrenome.value.length <= 0){
    sobrenome.style.borderColor = 'red';
    
  }
  
  if(sobrenome.value.length >=1){
    sobrenome.style.borderColor = '#d2d6da';
  }
}
function ValidaEmailInput(){

    var email = document.getElementById('email');
    if(email.value.length <= 0){
      email.style.borderColor = 'red';
    } if(email.value.length >=1){
      email.style.borderColor = '#d2d6da';
    }
}
function ValidaSenhaInput(){
  var senha = document.getElementById("senha");
  if(senha.value.length <= 0){
    senha.style.borderColor = 'red';
  }
  if(senha.value.length >=1){
    senha.style.borderColor = '#d2d6da';
  }
}
function InputNome(){
  addEventListener("click", function() {
    setInterval(ValidaNomeInput, 100);
  });
}
function InputSobrenome(){
  addEventListener("click", function() {
    setInterval(ValidaSobrenomeInput, 100);
  });
}
function InputEmail(){
  addEventListener("click", function(){
    setInterval(ValidaEmailInput, 100);
  });
}
function InputSenha(){
  addEventListener("click", function(){
    setInterval(ValidaSenhaInput, 100);
  });
}
/*


function senha(){
  if(senha.value.length <= 0){
    senha.style.borderColor = 'red';
  }else{
    senha.style.borderColor = '#d2d6da';
  }
}
/*
function inputs(){
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var DiaNascimento = document.getElementById('dia-nascimento');
    var MesNascimento = document.getElementById('mes-nascimento');
    var AnoNascimento = document.getElementById('ano-nascimento');
    var GeneroPronome = document.getElementById('GeneroPronome');

  

    
    if(AnoNascimento.value > 2016){
      DiaNascimento.style.borderColor = 'red';
      MesNascimento.style.borderColor = 'red';
      AnoNascimento.style.borderColor = 'red';
    }else{
      DiaNascimento.style.borderColor = '#d2d6da';
      MesNascimento.style.borderColor = '#d2d6da';
      AnoNascimento.style.borderColor = '#d2d6da';
    }
    if(GeneroPronome.value == "0"){
      GeneroPronome.style.borderColor = 'red';
     
    }else{
      GeneroPronome.style.borderColor = '#d2d6da';
    }
  }
  function ShowPronome(){
    var pronome = document.getElementById('pronome').style.display = "block";
    

  }
  function HidePronome(){
    var pronome = document.getElementById('pronome').style.display = "none";
  }*/