const miniaturas = document.querySelectorAll(".miniatura");
const imgAmpliada = document.querySelector("#imgAmpliada");

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click',()=>{
        miniaturas.forEach(miniatura => {
            miniatura.style.opacity = '0.4';
        })
        imgAmpliada.src = miniatura.src;
        imgAmpliada.style.display = 'block';
        miniatura.style.opacity = '1';

    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     const imgAmpliada = document.getElementById("imgAmpliada"); // Seleciona a imagem ampliada
//     const miniaturas = document.querySelectorAll(".miniatura"); // Seleciona todas as miniaturas

//     function handleImageClick(event) { // Função para manipular o clique em uma miniatura
//         const clickedImage = event.target;  // Obtém o elemento da miniatura clicada

//         imgAmpliada.src = clickedImage.src; // Define a URL da imagem ampliada como a da miniatura clicada
//         imgAmpliada.style.display = "block"; // Torna a imagem ampliada visível

//         miniaturas.forEach(image => { // Ajusta a opacidade de todas as miniaturas
//             image.style.opacity = "0.4";
//         });

//         clickedImage.style.opacity = "1"; // Ajusta a opacidade da miniatura clicada para 1
//     }

//     miniaturas.forEach(image => {  // Adiciona o evento de clique a cada miniatura
//         image.addEventListener("click", handleImageClick);
//     });
// });

