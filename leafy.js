let leafy = document.querySelector('.leafy');
let pos = 0;
let animation = requestAnimationFrame(move);

      function move() {
        animation = requestAnimationFrame(move);

        if (pos < 10) {
        	pos+=1;
          	leafy.style.transform = "rotateY(" + pos*10 + "deg)";

        } else {
          pos = 0; //keeps it going
        }
      }

      document.addEventListener('load',move)
