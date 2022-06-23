/*
Obs: linguagem Case Sensitive
Acesso ao DOM:
Por Tag: getElementByTagName()
Por Id: getElementById()
Por Nome: getElementsByName()
Por Classe: getElementsByClassName()
Por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = '#bc0060'
    }
    else{
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = '#fe6a7c'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 ||  email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = '#bc0060'
    }
    else{
        txtEmail.innerHTML = 'Email Válido!' 
        txtEmail.style.color = '#fe6a7c'  
        emailOk = true             
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres!'
        txtAssunto.style.color = '#bc0060'
        txtAssunto.style.display = 'block'

    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente!')
    }
}

function mapaZoom(){
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '300px'
}