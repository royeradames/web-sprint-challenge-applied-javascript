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

  const imgsArr = []
  caraouselImagesArr.forEach((item, index) => {
    imgsArr[index] = document.createElement('img')
    imgsArr[index].src = item

    //display the 1 image has default
    if(index === 0){
      imgsArr[index].style.display = 'block';
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

  imgsArr.forEach(item => {
    carousel.appendChild(item)
  })

  carousel.appendChild(rightButton)
  
  //adding functionality to the buttons
  leftButton.addEventListener('click', () =>{
    //moving to the 2 image and making left button appear 
    const [isDisplaying, isNotDisplaying, rightButtonDisplayStatus ] = ['block', 'none', rightButton.style.display]
    
    
    //when on the 2 or more images show the left button
    let leftButtonNotDisplaying = (rightButtonDisplayStatus === isNotDisplaying)
    if(leftButtonNotDisplaying){
      leftButton.style.display = isDisplaying;
    }
  
    //hide the displaying image, and make the next image visable
    //current display image is found by img tag having a display block style
    //next image to be display can be found by selecting the first sibiling on that displaying image, and then editing it after editing the current display image
    let currentDisplayImg = carousel.querySelector('img[style*="display: block;"]')
    let nextImg = carousel.querySelector('img[style*="display: block;"] ~ img')
    let [AreMoreImgs, noMoreImgs] = [(nextImg != null), (!AreMoreImgs)]
    console.log(nextImg)
    if(AreMoreImgs){
      currentDisplayImg.style.display = isNotDisplaying
      nextImg.style.display = isDisplaying
    } else if(noMoreImgs){
      leftButton.style.display = isNotDisplaying
    }

  })

  rightButton.addEventListener('click', () => {
    //moving to the 2 image and making left button appear 
    const [isDisplaying, isNotDisplaying, leftButtonDisplayStatus ] = ['block', 'none', leftButton.style.display]
    
    
    //when on the 2 or more images show the left button
    let leftButtonNotDisplaying = (leftButtonDisplayStatus === isNotDisplaying)
    if(leftButtonNotDisplaying){
      leftButton.style.display = isDisplaying;
    }
  
    //hide the displaying image, and make the next image visable
    //current display image is found by img tag having a display block style
    //next image to be display can be found by selecting the first sibiling on that displaying image, and then editing it after editing the current display image
    let currentDisplayImg = carousel.querySelector('img[style*="display: block;"]')
      //find the index of the current image
      let  currectImgIndex,previousImgIndex
        //go though all of the images on the collection
      imgsArr.forEach((img, index) => {
        //match the current image with the image collection
        if(currentDisplayImg == img){
          currectImgIndex = index
        }
      })
      //calc the previous image index
      previousImgIndex = currectImgIndex - 1
      // select the previous image and save it to previous img
    let previousImg = imgsArr[previousImgIndex]
    
    let [AreMoreImgs, noMoreImgs] = [(previousImg != null), (!AreMoreImgs)]
    
    if(AreMoreImgs){
      currentDisplayImg.style.display = isNotDisplaying
      previousImg.style.display = isDisplaying
    } else if(noMoreImgs){
      rightButton.style.display = isNotDisplaying
    }
    
    
  })
  
  //return parent element
  return carousel
}


//add a carousel in container carausel
const carouselContainer = document.querySelector('div.carousel-container')
carouselContainer.appendChild(Carousel(caraouselDataImages))