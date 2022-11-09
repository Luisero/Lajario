

window.onscroll = ()=>{
    console.log(window.scrollY)
    if(window.scrollY> 100){
        let peixeAnimado = document.querySelector('.peixe-animado');
        peixeAnimado.classList.add('nadar')
        
    }

    if(window.scrollY>50){
        let navbarFixa = document.querySelector('.fixed-navbar');
        navbarFixa.classList.add('ativa')
    }
    else{
        let navbarFixa = document.querySelector('.fixed-navbar');
        navbarFixa.classList.remove('ativa')
    }
   
}