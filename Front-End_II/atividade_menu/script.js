const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
]

function criarHTML() {
    const body = document.querySelector('body')
    const header = document.createElement('header')
    let nav = document.createElement('nav')
    const ul = document.createElement('ul')
    body.appendChild(header)
    header.appendChild(nav)
    nav.appendChild(ul)
}

function addItem() {
    itensMenu.forEach(item => {
        const ul = document.querySelector('ul')
        let itens = document.createElement('li');
        let ancora = document.createElement('a');
        ancora.setAttribute('href', item.url);
        ancora.setAttribute('target', '_blank');
        ul.appendChild(itens);
        itens.appendChild(ancora);
        ancora.textContent = item.nome.toUpperCase();
        ancora.style.color = '#fff';
        ancora.style.textDecoration = 'none';
    })
}

function estilizarMenu() {
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    header.style.backgroundColor = '#071D41'; 
    header.style.fontFamily = 'Arial'; 
    ul.style.display = 'flex';
    ul.style.flexDirection = 'row';
    ul.style.justifyContent = 'center'; 
    ul.style.alignItems = 'center'; 
    ul.style.height = '40px'; 
    ul.style.gap = '20px'; 
    ul.style.listStyleType = 'none';
}

addItem(criarHTML());
estilizarMenu()
