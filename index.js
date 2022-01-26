const images = document.querySelectorAll('.img');
const contenedorImage = document.querySelector('.contenedor-img');
const imageContenedor = document.querySelector('.img-show');
const cerrar = document.querySelector('.bx.bxs-x-circle');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'));
    })
})
const addImage = (srcImage)=>{
    contenedorImage.classList.toggle('move');
    imageContenedor.src = srcImage;
}

cerrar.addEventListener('click', ()=>{
    contenedorImage.classList.toggle('move');
})