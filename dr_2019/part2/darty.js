//part2 - new animation using java script
//one requestAnimationFrame() one dom query 

let palmOne = document.querySelector('#palm1');
let palmTwo = document.querySelector('#palm2');
let palmThree = document.querySelector('#palm3');
let palmFour = document.querySelector('#palm4');
      
let pos = 0;
let animation = requestAnimationFrame(wind);

      function wind() {
        animation = requestAnimationFrame(wind);

        if (pos < 10) {
        	pos+=1;
          	palmOne.style.transform = "rotateX(" + pos*10 + "deg)";
          	palmTwo.style.transform = "rotateX(" + pos*9 + "deg)";
          	palmThree.style.transform = "rotateX(" + pos*8 + "deg)"; 
          	palmFour.style.transform = "rotateX(" + pos*7 + "deg)"; 

        } else {
          pos = 0; //keeps it going
        }
      }

      document.addEventListener('load',wind)
