let acende = document.querySelector('.acende')
let apaga = document.querySelector('.apaga')
let interruptor = document.querySelector('.onOff')
let on = false
interruptor.addEventListener('click', () => {
    on = !on;
    on ? acende.style.display = 'block' : acende.style.display = 'none'
    on ? apaga.style.display = 'none' : apaga.style.display = 'block'
    
})
