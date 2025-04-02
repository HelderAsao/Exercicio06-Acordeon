const setas = document.querySelectorAll('.img-seta')
const respostas = document.querySelectorAll('.resposta')
let setasAbertas = document.querySelectorAll('.img-seta-aberta')

console.log(setas, respostas, setasAbertas)

setas.forEach((seta, indice) =>{
    
    seta.addEventListener('click', function(){
        
    setasAbertas.forEach(valor =>{
        valor.style.display='none'
         setasAbertas[indice].style.display = 'block'     
        
    })

    // if(setasAbertas[indice].style.display = 'block'){
    //     setasAbertas[indice].style.display='none'
    //     item.style.display='none'
    // }
      console.log(setasAbertas)
        
        respostas.forEach((item) =>{
            
            item.style.display = 'none'    
            respostas[indice].style.display='block' 
            
        })
        
    })
})


