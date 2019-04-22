//c1
const c1 = document.getElementById('c1');
const context1 = c1.getContext('2d');
//c2
const c2 = document.getElementById('c2');
const context2 = c2.getContext('2d');
//c3
const c3 = document.getElementById('c3');
const context3 = c3.getContext('2d');
//
	let width;
	let height;
	let scene = document.getElementById('scene');
//
	function setup(){
			//fixed canvas size
			//using one of the canvas because they are the saaaaammmeeee
		width = c1.width;
		height =  c1.height;
			//set CSS display size (css pixels are not the same as regular pixels)
			//for each canvas
			//c1
		c1.style.width = width + 'px';
		c1.style.height = height +'px';
			//c2
		c2.style.width = width + 'px';
		c2.style.height = height +'px';
			//c3
		c3.style.width = width + 'px';
		c3.style.height = height +'px'; 
			//set the number of actual canvas pixels, scaled for screen resolution
		let scale = window.devicePixelRatio;
			//c1
		c1.width = width*scale;
		c1.height = height*scale;
			//c2
		c2.width = width*scale;
		c2.height = height*scale;
			//c3
		c3.width = width*scale;
		c3.height = height*scale;
			//normalize the coordinate system
			//c1
		context1.scale(scale,scale);
			//c2
		context2.scale(scale,scale);
			//c3
		context3.scale(scale,scale);
	}

	  function shimmer() {
///////////     C1 IMAGE PIXELS    /////////////////////////////////////////////////////////////////////////////
        context1.drawImage(scene,0,0,600,450);
        let pixels1 = context1.getImageData(0, 0, c1.width, c1.height);
        let pixelData1 = pixels1.data;
        for (let i = 0; i < pixelData1.length; i += 521) {
          pixelData1[i] = Math.floor(Math.random() * 0); // red
          pixelData1[i + 1] = Math.floor(Math.random() * 255); // green
          pixelData1[i + 2] = Math.floor(Math.random() * 0); // blue
          pixelData1[i + 3] = 255; // 

		}
///////////     C2 IMAGE PIXELS    /////////////////////////////////////////////////////////////////////////////
        context2.drawImage(scene,0,0,600,400);
        let pixels2 = context2.getImageData(0,0, c2.width, c2.height);
        let pixelData2 = pixels2.data;
        for (let i = 0; i < pixelData2.length; i += 190) {
          pixelData2[i] = Math.floor(Math.random() * 0); // red
          pixelData2[i + 1] = Math.floor(Math.random() * 255); // green
          pixelData2[i + 2] = Math.floor(Math.random() * 0); // blue
          pixelData2[i + 3] = 255; // 
      	}
///////////     C3 IMAGE PIXELS    /////////////////////////////////////////////////////////////////////////////
		context3.drawImage(scene,0,0,600,400);
		let pixels3 = context3.getImageData(0, 0, c3.width, c3.height);
        let pixelData3 = pixels3.data;
        for (let i = 0; i < pixelData3.length; i += 34) {
          pixelData3[i] = Math.floor(Math.random() * 0); // red
          pixelData3[i + 1] = Math.floor(Math.random() * 255); // green
          pixelData3[i + 2] = Math.floor(Math.random() * 0); // blue
          pixelData3[i + 3] = 255; // 
      	}
		//x,y,radius X, radius Y, rotation, angle, end angle,counterclockwise (angles in radians)
		//half a circle value for angle would be Pi*r
		//360deg = 2*Math.PI
////////// PIXELS FUNCTION CALL//////////////////////////////////////////////////////////////////////////////
        context1.putImageData(pixels1,0, 0); 
        context2.putImageData(pixels2,0,0);
        context3.putImageData(pixels3,0,0);

        requestAnimationFrame(shimmer);
        }
        //////////////////////////////////////////////////////////////

        function absolute(){
        	//////C2C2C2C2C2C2C2CC2C2C2

        	//context2.fillStyle = 'none';
			context2.beginPath();
			//x,y,radius X, radius Y, rotation, angle, end angle,counterclockwise
			context2.ellipse(c2.width/4, c2.height/8, 22,22,0,0,2*Math.PI,false);
			context2.fill();


			////c3c3c3c3c3cc3c3c
			
        	//context3.fillStyle = 'none';
			context3.beginPath();
			//x,y,radius X, radius Y, rotation, angle, end angle,counterclockwise
			let u = context3.ellipse(c3.width/4, c3.height/8, 44,44,0,0,2*Math.PI,false);
			context3.fill();
			
        }

        let shape = 0;

        function skew(){
        
       	u.save();        
        // rectangle rotates from center point
        u.translate(width/2, height/2);
        u.skew(20);
        u.restore();
        shape += 3;

        requestAnimationFrame(skew);
        }

	setup();
	shimmer();
    document.addEventListener('mousemove',shimmer);
    absolute();
    skew();