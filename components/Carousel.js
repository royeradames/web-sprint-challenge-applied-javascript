/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const caraouselDataImages = ["./assets/carousel/mountains.jpeg", './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', "./assets/carousel/turntable.jpeg"]

function Carousel(caraouselImagesArr) {
  // debugger
  //init elements
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')

  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = '<'
  // leftButton.addEventListener('click')

  const imgs = []
  caraouselImagesArr.forEach((item, index) => {
    imgs[index] = document.createElement('img')
    imgs[index].src = item
  })

  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = '>'

  //append elements to parent
  carousel.appendChild(leftButton)

  imgs.forEach(item => {
    carousel.appendChild(item)
  })

  carousel.appendChild(rightButton)

  //append to html
  const carouselContainer = document.querySelector('div.carousel-container')
  carouselContainer.appendChild(carousel)
 
}

function leftButton(){

}
Carousel(caraouselDataImages)
