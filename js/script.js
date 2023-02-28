const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
const slider = document.querySelector('.slider')
const items = document.querySelector('.items')
let index = 0

images.forEach((img, i) => {
    items.innerHTML += `
        <div onclick='changeSlide(${i})' class='item' style='background-image: url(./img/${img})'></div>
    `
})

function switchSlide(value){
    if(value === 'right'){
        index++
        if(index === images.length) index = 0
    }else{
        index--
        if(index < 0) index = images.length - 1
    }

    slider.style.backgroundImage = `url(./img/${images[index]})`
    setActive()
}

function changeSlide(i){
    slider.style.backgroundImage = `url(./img/${images[i]})`
    index = i
    setActive()
}

function setActive(){
    let allItems = document.querySelectorAll('.item')
    allItems.forEach(e => e.classList.remove('active'))
    allItems[index].classList.add('active')
}