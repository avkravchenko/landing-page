const arr = [];

arr.push('img/bedroom-interior-min.jpg');
arr.push('img/interior-design-house-modern-white-kitchen.jpg');
arr.push('img/interior-modern-kitchen-with-wooden-details.jpg');

console.log(arr)

const city = document.querySelectorAll('.city');

const dots = document.querySelectorAll('.dot');

const descSlide = document.querySelectorAll('.description-slide')

descSlide.forEach((text, index) => {
    text.setAttribute('data-index', index);
    text.classList.add(`dn${index}`);
})

const descriptionArrowLeft = document.querySelector('.description-arrow-left');
const descriptionArrowRight = document.querySelector('.description-arrow-right');

function moveDesc(num){
    document.querySelector('.active-description').classList.remove('active-description');
    document.querySelector(`.dn${num}`).classList.add('active-description');
}

dots[0].classList.add('activeDot')

function slider(){
    const sliderImg = document.querySelector('#slider');

    function initSlider(){
        arr.forEach((image, index) => {
           let imageDiv = `<div class="image num${index} ${index === 0 ? "active" : ""}" style="background-image: url('${arr[index]}')" data-index="${index}"></div>`;
           sliderImg.innerHTML += imageDiv;
        })
    }

    initSlider();

    const rightArrow = document.querySelector('.right-arrow');

    console.log(rightArrow)

    function right(){
        let curSlide = +sliderImg.querySelector('.active').dataset.index;
        let nextSlide;
        if (curSlide === 0) {
            nextSlide = curSlide + 1;
        }
        else if (curSlide === arr.length - 1){
            nextSlide = 0;
        }
        else {
            nextSlide = curSlide + 1;
        }
        moveSlider(nextSlide);
    }

    rightArrow.addEventListener('click', right);

    descriptionArrowRight.addEventListener('click', right);

    function left(){
        let curSlide = +sliderImg.querySelector('.active').dataset.index;
        let nextSlide;
        if (curSlide === 0){
            nextSlide = arr.length - 1;
        }
        else if (curSlide === arr.length - 1) {
            nextSlide = curSlide - 1;
        }
        else {
            nextSlide = curSlide - 1;
        }

        moveSlider(nextSlide);
    }
    
    const leftArrow = document.querySelector('.left-arrow');

    console.log(leftArrow)

    leftArrow.addEventListener('click', left); 

    descriptionArrowLeft.addEventListener('click', left)

    city.forEach((cityName, index) => {
        cityName.addEventListener('click', () => {
          moveSlider(index);
          moveDesc(index);
        });
      });  

    

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveSlider(index);
            moveDesc(index);  
        })
    })

    function moveSlider(num) {
        let activeSlide = sliderImg.querySelector(".active");
            if (activeSlide) {
            activeSlide.classList.remove("active");
            }
        sliderImg.querySelector(".num" + num).classList.add("active");
      
        dots.forEach((dot, index) => {
            if (index === num) {
                dot.classList.add("activeDot");
            } else {
                dot.classList.remove("activeDot");
            } 

        descSlide.forEach((text, index)=>{
            if (index === num){
                text.classList.add('active-description')
            } else {
                text.classList.remove('active-description');
            } 
        })
    })

    city.forEach((city, index) => {
        if (index === num) {
            city.classList.add("active-city");
        } else {
            city.classList.remove("active-city");
        } 
    })
    }
    
}   

slider()