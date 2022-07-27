console.log("Js Connected");

var mainDiv = document.querySelector(".puzzle");
var localImg = document.getElementById("display");

let uploadedImgURL;

var getDimension = (e) => {
  //   console.log(e.target.files);

  localImg.src = uploadedImgURL = URL.createObjectURL(e.target.files[0]);
  console.log(localImg.width, localImg.height); // original dimensions

  localImg.style.height = "300px";
  localImg.style.width = "540px";
  localImg.setAttribute("class", "originalImgCss");

  console.log(uploadedImgURL);
};

/* 
    (x , y) :   coordinate where to place the image on the canvas   
    (width , height ) :  width of the image to use  
    (sx , sy)  :  coordinate where to start clipping   
    (clipWidth , clipHeight )  :   dimentions of the clipped image

context.drawImage(img, x, y, width, height); 
context.drawImage(img, sx, sy, clipWidth, clipHeight, x, y, width, height);

*/

var defaultImgEle = document.getElementById("pic");
var ctx = document.getElementById("myCanvas").getContext("2d");
ctx.drawImage(defaultImgEle, 0, 0, 100, 100);
defaultImgEle.setAttribute("class", "originalImgCss");

var image = new Image();

//  Function for generating N pieces
var generatePuzzleHandler = () => {
  console.log("Image Processing...");

  image.crossOrigin = "anonymous";
  image.setAttribute("class", "originalImg");
  // image.src = "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";  // HardCoded Image
  image.src = uploadedImgURL;
  image.onload = splitImage;
};

function splitImage() {
  var widthOfOnePiece = 200,
    heightOfOnePiece = 200,
    numColsToCut = 2,
    numRowsToCut = 2;

  var imagePiecesArr = [];

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

      imagePiecesArr.push(canvas.toDataURL());
    }
  }

  console.log(imagePiecesArr);

  for (var i = 0; i < imagePiecesArr.length; i++) {
    var newImgTag = new Image();
    newImgTag.src = imagePiecesArr[i];
    // console.log(newImgTag);

    newImgTag.setAttribute("class", "imgPieceStyle");
    mainDiv.appendChild(newImgTag);
  }
}
