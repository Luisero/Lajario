

let inputs = document.querySelectorAll('.float-input');

for (let i = 0; i < inputs.length; i++) {
    let element = inputs[i];
    console.log(element)
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

    const mililitrosEmUmLitro = 1000;

    let litragem = largura * altura * comprimento / 1000;

    alert(litragem)
}

function getAquariumVolume()
{

}