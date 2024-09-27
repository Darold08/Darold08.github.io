const body = document.querySelector('body');
const head = document.createElement('head');

const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function estruturaHTML(){
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    body.appendChild(header)
    header.appendChild(nav)
    nav.appendChild(ul)
    ul.style.backgroundColor = 'black'

    return(ul)
}


function adicionaritem(ul){

    itensMenu.forEach(item => {
        let ancora = document.createElement('a')
        let li = document.createElement('li')
        ancora.setAttribute('href', item.url)
        ancora.textContent = item.nome.toLocaleUpperCase()
        ancora.style.color = 'white'
        ancora.style.textDecoration = 'none'
        ul.appendChild(li)
        li.appendChild(ancora)
        li.style.marginLeft
    })


}

adicionaritem(estruturaHTML())
