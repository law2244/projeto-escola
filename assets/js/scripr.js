const el = document.querySelector('.sobAreceita p')
const text = 
' nossa receita e um receita de pate light de cenoura , uma opção bem mais barata e saudavel que os pates convecionis , abaixo esta a lista de ingredientes que foram usados para a receita e seu modo de preparo'
const interval = 100


function typewriter(el , text , interval){


    const char = text.split('').reverse('')

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer)
        }
        const next = char.pop()

        el.innerHTML += next
    }, interval )
}

typewriter(el ,text , interval)