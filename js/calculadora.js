

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