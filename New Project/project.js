gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110 px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        start :"top -10%",
        end: "top -11%",
        scrub:1.5,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:0.1,
    }
})

// const cursor = document.getElementById("#cursor");
var cursorBallBig = document.querySelector("#cursor-blur");
var cursorBallSmall = document.querySelector("#cursor");

var posS = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var posB = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: posS.x, y: posS.y };
var speed = 0.1;
var fpms = 40 / 1000;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

var xSetBallSmall = gsap.quickSetter(cursorBallSmall, "x", "px");
var ySetBallSmall = gsap.quickSetter(cursorBallSmall, "y", "px");
var xSetBallBig = gsap.quickSetter(cursorBallBig, "x", "px");
var ySetBallBig = gsap.quickSetter(cursorBallBig, "y", "px");

gsap.ticker.add((time, deltaTime) => {
  var delta = deltaTime * fpms;
  var dt = 1.0 - Math.pow(1.0 - speed, delta);

  posS.x += mouse.x - posS.x;
  posS.y += mouse.y - posS.y;
  posB.x += (mouse.x - posB.x) * dt;
  posB.y += (mouse.y - posB.y) * dt;
  xSetBallSmall(posS.x);
  ySetBallSmall(posS.y);
  xSetBallBig(posB.x);
  ySetBallBig(posB.y  );
});

// var h4all = document.querySelectorAll("#head h4")
// h4all.forEach(function(ele) {
//     ele.addEventListener("mouseenter" , function(){
//       cursorBallSmall.style.scale=3
//       cursorBallSmall.style.border="1px solid #fff"
//       cursorBallSmall.style.backgroundColor="transparent"
//   })
// });

//   h4all.forEach(function(ele) {
//     ele.addEventListener("mouseout" , function(){
//       cursorBallSmall.style.scale=1
//       cursorBallSmall.style.border="0"
//       cursorBallSmall.style.backgroundColor="#95C11E"
//   })
  
// });


gsap.from("#img1", {
  x:-50,
  y:-50,
    scrollTrigger :{
    trigger:"#page4 img",
    scroller:"body",
    start: "top 55%",
    end:"top 45%",
    scrub:3
  }
})

gsap.from("#img2", {
  x:50,
  y:50,
    scrollTrigger :{
    trigger:"#page4 img",
    scroller:"body",
    start: "top 55%",
    end:"top 45%",
    scrub:3
  }
})

gsap.from("#page5 h1" , {

  y:40,
  scrollTrigger :{
    trigger:"#page5 h1",
    scroller:"body",
    start: "top 75%",
    end:"top 70%",
    scrub:3
  }



})

