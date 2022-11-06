

window.onscroll = ()=>{
    console.log(window.scrollY)
    if(window.scrollY> 100){
        let peixeAnimado = document.querySelector('.peixe-animado');
        peixeAnimado.classList.add('nadar')
        
    }
   
}