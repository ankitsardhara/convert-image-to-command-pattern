var getPixels = require("get-pixels");
const rgbHex = require('rgb-hex');

var clear = require('clear');

   clear();

 build_image('a.png');



function build_image(imagename){



  getPixels(imagename, function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }else{



toArrayBuffer(pixels.data,pixels.shape.slice()[0],pixels.shape.slice()[2]);
//console.log(stringData);
// console.log("got pixels", pixels.shape.slice())

  }

  
})


}



function toArrayBuffer(buf,width,channel) {

var string=buf.toString('hex').split(",");
var perlinepixel=width*channel;
   var linepixel=[];
   for (var i = 0; i < string.length; i=i+perlinepixel) {
    linepixel[i]="";
    for (var j = 0; j < perlinepixel; j=j+channel) {
      if(j==0){
           linepixel[i]=linepixel[i]+""+trasferpixel(parseInt(string[i+j]), parseInt(string[i+j+1]), parseInt(string[i+j+2]), parseInt("0."+string[i+j+3]));
          // linepixel[i]=linepixel[i]+""+trasferpixel(rgbHex(parseInt(string[i+j]), parseInt(string[i+j+1]), parseInt(string[i+j+2]), parseInt("0."+string[i+j+3])));
         }else{
           linepixel[i]=linepixel[i]+""+trasferpixel(parseInt(string[i+j]), parseInt(string[i+j+1]), parseInt(string[i+j+2]), parseInt("0."+string[i+j+3]));
            // linepixel[i]=linepixel[i]+""+trasferpixel(rgbHex(parseInt(string[i+j]), parseInt(string[i+j+1]), parseInt(string[i+j+2]), parseInt("0."+string[i+j+3])));
         }
    }


  // console.log(linepixel[i]);
   console_log(linepixel[i],i);
    
   }
    
}


function console_log(string,t){
setTimeout(function(){ console.log(string); }, t/100);
}

function trasferpixel(red,green,blue,a){


  if ((parseInt(red)*0.299 + parseInt(green)*0.587 + parseInt(blue)*0.114) > 186){

return 1;

}else{

return 0;
}


  return rgbHex(r,g,b,a);
  
}
