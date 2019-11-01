/* If You've gotten this far, you're on your own! Although we will give you some hints:
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

function CreateCarousel() {
  const carousel = document.createElement('div'),
        leftButton = document.createElement('div'),
        imgOne = document.createElement('img'),
        imgTwo = document.createElement('img'),
        imgThree = document.createElement('img'),
        imgFour = document.createElement('img'),
        rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  imgOne.src = './assets/carousel/mountains.jpeg';
  imgTwo.src = './assets/carousel/computer.jpeg';
  imgThree.src = './assets/carousel/trees.jpeg';
  imgFour.src = './assets/carousel/turntable.jpeg';

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  leftButton.style.zIndex = '2';
  rightButton.style.zIndex = '2';

  carousel.append(leftButton, imgOne, imgTwo, imgThree, imgFour, rightButton);

  const carouselImages = [imgOne, imgTwo, imgThree, imgFour];
  carouselImages.forEach(element => element.style.position = 'absolute');
  let index = 0;

  leftButton.addEventListener('click', event => {
    $(carouselImages[index]).fadeOut();
    index === 0 ? index = carouselImages.length - 1 : index += -1;
    $(carouselImages[index]).fadeIn();
  })

  rightButton.addEventListener('click', event => {
    $(carouselImages[index]).fadeOut();
    index === carouselImages.length - 1 ? index = 0 : index += 1;
    $(carouselImages[index]).fadeIn();
  })

  carouselImages[index].style.display = 'inline-block';

  return carousel;
}

document.querySelector('.carousel-container').append(CreateCarousel());