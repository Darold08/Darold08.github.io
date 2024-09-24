/*const titulo = document.querySelector('h1');
console.log('innerHTML:', titulo.innerHTML)
console.log('innerText:', titulo.innerText)
console.log('textContent:', titulo.textContent)

titulo.textContent = 'Meu novo parágrafo'*/

/*const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.setAttribute('href','https://www.ifro.edu.br');
ancora.setAttribute('target','_blank');
ancora.textContent = 'IFRO';
ancora.style.color = '#f00';
ancora.style.textDecoration = 'none';
ancora.style.fontSize = '20px'
const titulo = document.querySelector('h1');
titulo.remove();
body.appendChild(ancora);*/

const body = document.querySelector('body');
const li = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
item1.textContent = 'item-1';
item2.textContent = 'item-2';
item3.textContent = 'item-3';
li.append(item1);
li.append(item2);
li.append(item3);
body.append(li);



