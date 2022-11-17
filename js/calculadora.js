

let inputs = document.querySelectorAll('.float-input');

for (let i = 0; i < inputs.length; i++) {
    let element = inputs[i];
 
    element.addEventListener('input',()=>{
        if(element.value != ""){
            element.classList.add('input-ativo')
        }
        else{
            element.classList.remove('input-ativo')
        }
    })
    
}




function getInputsValue()
{
    let largura = document.querySelector('#input-largura').value
    let altura = document.querySelector('#input-altura').value;
    let comprimento = document.querySelector('#input-comprimento').value;

   
    let litragem = getAquariumVolume(largura, altura, comprimento);

    let potenciaAquecedor = getWarmerWatts(litragem);

    let potenciaBomba = getPumpPower(litragem);
    

    let caixaResultado = document.querySelector('.caixa-resultado');
    caixaResultado.classList.add('ativa')
    document.querySelector('#litragem-res').innerText = `${litragem} litros`
    document.querySelector('#aquecedor-res').innerText = `${potenciaAquecedor}  W`
    document.querySelector('#bomba-res').innerText = `${potenciaBomba} litros \n por hora`
    
    caixaResultado.addEventListener('animationend',()=>{
        window.scrollTo(0,200)

        
    })

   
}

function getWarmerWatts(litros){
    const nivelDePotencia = 50;
    let potencia = Math.ceil(litros / nivelDePotencia);

    let potenciaAquecedor = nivelDePotencia * potencia 

    return potenciaAquecedor
}

function getAquariumVolume(largura, altura, comprimento)
{
    const mililitrosEmUmLitro = 1000;

    return largura * altura * comprimento / mililitrosEmUmLitro;

}

function getPumpPower(litros)
{
    const nivelDePotencia = 50;
    let potencia = Math.ceil(litros * 6 / nivelDePotencia);
  
    let potenciaBomba = nivelDePotencia * potencia 
    
    return potenciaBomba

}