console.log("Js Connected");

var getDimension = (event) => {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);

  console.log(image.width, image.height); // original dimensions
  console.log(image);

  image.style.height = "500px";
  image.style.width = "500px";
};

/* 
    (x , y) :   coordinate where to place the image on the canvas   
    (width , height ) :  width of the image to use  
    (sx , sy)  :  coordinate where to start clipping   
    (clipWidth , clipHeight )  :   dimentions of the clipped image

context.drawImage(img, x, y, width, height); 
context.drawImage(img, sx, sy, clipWidth, clipHeight, x, y, width, height);

*/

var ctx = document.getElementById("myCanvas").getContext("2d");
ctx.drawImage(document.getElementById("pic"), 0, 0, 100, 100);

var image = new Image(); // img tag creation
image.onload = SplitImage;
image.src = "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
image.crossOrigin = "anonymous";

function SplitImage() {
  var widthOfOnePiece = 100,
    heightOfOnePiece = 100,
    numColsToCut = 3,
    numRowsToCut = 3;

  var imagePieces = [];

  for (var x = 0; x < numColsToCut; x++) {
    for (var y = 0; y < numRowsToCut; y++) {
      var canvas = document.createElement("canvas");
      canvas.width = widthOfOnePiece;
      canvas.height = heightOfOnePiece;
      var context = canvas.getContext("2d");
      context.drawImage(
        image,
        x * widthOfOnePiece,
        y * heightOfOnePiece,
        widthOfOnePiece,
        heightOfOnePiece,
        0,
        0,
        canvas.width,
        canvas.height
      );

      imagePieces.push(canvas.toDataURL());
    }
  }

  console.log(imagePieces);

  var mainDiv = document.querySelector(".puzzle");

  for (var i = 0; i < imagePieces.length; i++) {
    var newImgTag = new Image();
    newImgTag.src = imagePieces[i];
    // console.log(newImgTag);

    newImgTag.setAttribute("class", "imgPieceStyle");

    mainDiv.appendChild(newImgTag);
  }
}
