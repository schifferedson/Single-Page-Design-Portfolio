const carrossel = document.querySelector('.carrossel');
const firstImage = carrossel.querySelectorAll('img')[0]
const arrowLeft = document.querySelector('.left')
const arrowRight = document.querySelector('.right')

let isDragStart = false;
let prevPageX;
let prevScrollLeft;
let firstWidthImage = firstImage.clientWidth + 60; // getting first image width 

arrowLeft.addEventListener('click', () => {
    carrossel.scrollLeft += -firstWidthImage;
})

arrowRight.addEventListener('click', () => {
    carrossel.scrollLeft += firstWidthImage;
})

function dragStop() {
    isDragStart = false;
}

function dragStart(event) {
    // Atualizando as variáveis globais no mousedown evento
    // Updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = event.pageX;
    prevScrollLeft = carrossel.scrollLeft
}

function dragging(event) {
    // Scrollando a imagem para esquerda de acordo com o ponteiro do mouse
    // Scrolling images/carrossel to left according to mouse pointer 
    if(!isDragStart) return;
    event.preventDefault();
    let positionDiff = event.pageX - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
}

carrossel.addEventListener('mousedown', dragStart)
carrossel.addEventListener('mousemove', dragging)
carrossel.addEventListener('mouseup', dragStop)