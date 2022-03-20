let form = document.querySelector('form')

let button = document.querySelector('#button')
let p = document.querySelector('.app')

const namesList = []



button.addEventListener('click', ()=>{
    namesList.push(form.names.value);
    console.log(namesList)
    p.innerHTML = ""
    namesList.forEach(function(item){
        let t = p.innerText;
        p.innerHTML = `${t}<br>${item}`
    })
    
})





