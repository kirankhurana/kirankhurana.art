//palm trees in the wind
//2 dom queries one defined function one event listener in response to user action
//put css in external doc too 

//define object = palms
let palms = document.querySelectorAll('.palms');
let xBrowserRatio;
let yBrowserRatio;

//update position of cursor

function wind (xPos, yPos) {

  let xRotation = 90 - Math.ceil(yPos / yBrowserRatio); // half the scaled rotation value
  console.log('X rotation: ' + xRotation); 

  let yRotation = -90 + Math.ceil(xPos / xBrowserRatio);
  console.log('Y rotation: ' + yRotation);

  for (let i = 0; i < palms.length; i++) {
    palms[i].style.transform = 'rotateX('+xRotation+'deg)'+''+'rotateY('+yRotation+'deg)';
  } 
}

//get current cursor position
function mouse(event) {
  let xPos = event.clientX; 
  let yPos = event.clientY; 

  wind(xPos, yPos);
}

//wind function combined with function gathering current location of cursor
window.addEventListener('mousemove', mouse);


// ask about this
function scaleRatio() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  xBrowserRatio = browserWidth / 180; 
  yBrowserRatio = browserHeight / 180; //you choose the maximum degree it will turn to
}

window.addEventListener('load', scaleRatio);


