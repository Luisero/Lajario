let left = 0




function next(){
    let peixesContainer = document.querySelector('.peixes-container')
    let items = document.querySelectorAll('.peixe-card');

    left -=200

    limite = (items.length-2) * -190

    if(left <= limite){
        left = limite+ 200
    }

    peixesContainer.style.marginLeft = `${left}px`
   
}

function prev(){
    let peixesContainer = document.querySelector('.peixes-container')

    
    left +=200
    if(left >200){
        left = 0
    }
    peixesContainer.style.marginLeft = `${left}px`
}