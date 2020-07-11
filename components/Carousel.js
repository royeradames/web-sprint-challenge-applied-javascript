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
  //init elements
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')

  
  
  const imgs = []
  caraouselImagesArr.forEach((item, index) => {
    imgs[index] = document.createElement('img')
    imgs[index].src = item

    //display the 1 image has default
    if(index === 0){
      imgs[index].style.display = 'block';
    }
  })
  
  //buttons
  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = '<'
    //don't display the left button at start
  leftButton.style.display = 'none';
    //don't allow highling on left button
  leftButton.style.userSelect = 'none';

  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = '>'
    //don't allow highling on right button
  rightButton.style.userSelect = 'none';
  
  //append elements to parent
  carousel.appendChild(leftButton)

  imgs.forEach(item => {
    carousel.appendChild(item)
  })

  carousel.appendChild(rightButton)

  //append to html
  const carouselContainer = document.querySelector('div.carousel-container')
  carouselContainer.appendChild(carousel)
 

  //adding functionality to the buttons
  leftButton.addEventListener('click', leftButtonAction(imgs))
  rightButton.addEventListener('click', rightButtonAction(imgs, leftButton, rightButton))

}

function leftButtonAction(imgsArr){

}
function rightButtonAction(imgsArr, leftButton, rightButton){

  //moving to the 2 image and making left button appear 
  const [isDisplaying, isNotDisplaying, leftButtonDisplayStatus] = ['block', 'none', leftButton.style.display]

    //select current displaying image
  const currentDisplayImg = document.querySelector('img[style*="display: block;"]')

  //when the when on the 2 or more images show the left button
  if(leftButtonDisplayStatus === isNotDisplaying){
    // leftButton.style.display = isDisplaying;
    
  }

  let currentImgIndex;
  imgsArr.forEach((img, index) => {
    //make the current display image not display
    if(currentDisplayImg === img){
      img.style.display = isNotDisplaying;
      
      //store the current display image index
      currentImgIndex = index
    }

    //act if this is an image that is after the current image
    if (currentImgIndex <= (index)){
      //if at the last image, don't display right button
      if((imgsArr.length - 1) < index){
        rightButton.style.display = isNotDisplaying
      }

      //display the image that is next
      img.style.display = isDisplaying
    }
    
  })
}
Carousel(caraouselDataImages)