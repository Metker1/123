var card = document.querySelector('#card')
var card2 = document.querySelector('#card2')
var card3 = document.querySelector('#card3')
var card4 = document.querySelector('#card4')
var card5 = document.querySelector('#card5')
var halfW = window.innerWidth/2
var halfH = window.innerHeight/2

// window.addEventListener('click',function(){
//   document.querySelector('body').style.pointerEvents = "none"
// })

// mouse controls
document.querySelector('body').addEventListener('mousemove', function(e){
  var d = 1; //depth variable  
  var x = e.clientX;
  var y = e.clientY
  var rx = x < halfW ? -(1-(x/halfW)) : (1-(halfW/x))*2;
  var ry = y < halfH ? (1-(y/halfH)) : -(1-(halfH/y))*2;
  var base = "rotateY("+rx*5+"deg) rotateX("+ry*5+"deg)"
    
  card.style.transform = base + "translate("+ -(rx*(d*1))+"%,"+ry*(d*1)+"%)"
  card2.style.transform = base + "translate("+ -(rx*(d*10))+"%,"+ry*(d*10)+"%)"
  card3.style.transform = base + "translate("+ -(rx*(d*20))+"%,"+ry*(d*20)+"%)"
 card4.style.transform = base + "translate("+ -(rx*(d*30))+"%,"+ry*(d*30)+"%)"
  card5.style.transform = base + "translate("+ -(rx*(d*40))+"%,"+ry*(d*40)+"%)"
  
})

// keyboard controls
// var track = document.querySelector('#track')
// window.addEventListener('keydown', function(e) {
//   var t = track.getBoundingClientRect()
//   var d = 1 ; //depth variable 
//   var s = 20; //speed
//   var x = t.left;
//   var y = t.top;
  
//   if(e.keyCode == 37 && x > 0) {
//     track.style.left = x - s + "px"
//   }
//   if(e.keyCode == 38 && y > 0) {
//     track.style.top = y - s + "px"
//   }
//   if(e.keyCode == 39 && x < window.innerWidth) {
//     track.style.left = x + s + "px"
//   }
//   if(e.keyCode == 40 && y < window.innerHeight) {
//     track.style.top = y + s + "px"
//   }
  
//   var rx = x < halfW ? -(1-(x/halfW)) : (1-(halfW/x))*2;
//   var ry = y < halfH ? (1-(y/halfH)) : -(1-(halfH/y))*2;
//   var base = "rotateY("+rx*5+"deg) rotateX("+ry*5+"deg)"
    
//   card.style.transform = base + "translate("+ -(rx*(d*1))+"%,"+ry*(d*1)+"%)"
//   card2.style.transform = base + "translate("+ -(rx*(d*10))+"%,"+ry*(d*10)+"%)"
//   card3.style.transform = base + "translate("+ -(rx*(d*20))+"%,"+ry*(d*20)+"%)"
//  card4.style.transform = base + "translate("+ -(rx*(d*30))+"%,"+ry*(d*30)+"%)"
//   card5.style.transform = base + "translate("+ -(rx*(d*40))+"%,"+ry*(d*40)+"%)"
// })


// set back to center
window.addEventListener('dblclick', function(){
  track.style.left = halfW  + 1 + "px"
  track.style.top = halfH + "px"
  window.dispatchEvent(new KeyboardEvent('keydown',{'key':'37'}));
})