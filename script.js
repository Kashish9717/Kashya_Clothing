
document.addEventListener("DOMContentLoaded", () => {

  loadHTML("footer", "Footer.html");
  loadHTML("page2", "page2.html");
  loadHTML("page3","page3.html");
  loadHTML("page4", "page4.html" )
});

    function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

// -----------------------------------------------------------------------------------
     function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

navAnimation(); // ← THIS LINE MAKES IT RUN

// ---------------------------------------------------------------------------------------
 
function Page2js(){

      // 👇 page2 load hone ke baad hi run hoga
//  Yeh array ki trah nodelist bnti hia, to array method use hua forEach tki har element


        let rightElemes = document.querySelectorAll(".right-list");

        rightElemes.forEach(function(elem) {

   // 👉 image ko safely select kr rhe h — childNodes index issue avoid krne k lie
  // direct image pakadna better h wrna text nodes se index hil jata h  
      
//   let img = elem.querySelector("img");
  
   //  NodeList(5) [text, p, text, img, text]  : [3] => image  k lie

  elem.addEventListener("mouseenter", function(){
        // elem.childNodes[3].style.opacity = 1;     //iski jgh using gsap
   
    // mouse enter pe image visible + zoom effect
                                   
        
  gsap.to(elem.childNodes[3], {
        opacity:1, scale:1
        })
     console.log("mouseenter hello");
 })
              elem.addEventListener("mouseleave", function(){
     gsap.to(elem.childNodes[3], {
        opacity:0, scale:0
        })
 })
 //dets : mouse events  : elem ek div hai
    elem.addEventListener("mousemove", function(dets) {
            // console.log(elem.getBoundingClientRect().x)    //getBounding yeh rectangle ki dimensions btata hai, left top h/w sb..

        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-200,       
            y:dets.y - elem.getBoundingClientRect().y-10
      }  )
    })
        });

    }


Page2js()

// ---------------------------------------------------------------------------------------
// Page 3 video
function Page3video() {

 var page3Center = document.querySelector(".page3-center")
 var video = document.querySelector("#page3 video")

  page3Center.addEventListener("click", function() {
  
    page3Center.style.opacity = "0";

  // click button video running
    video.play()

    gsap.to(video, {
       scaleX: 1,   // 👈 fix
        scaleY: 1,   // 👈 fix
        opacity: 1,
        borderRadius: 0   
        
    })
  })

   video.addEventListener("click",function(){

    page3Center.style.opacity = "1";

    video.pause()

     gsap.to(video, {
        // transform: "scaleX(0.7) scaleY(0)",
          scaleX: 0.7,  // 👈 fix
        scaleY: 0,    // 👈 fix
        opacity: 0,
        borderRadius: 30 
        
    })
   })
}

Page3video();

// ---------------------------------------------------------------------------------------

//Page 4 Circular Image Booth

function Page4Booth() {

const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".item");
const total = items.length;

let angle = 0;
const theta = 360 / total;
const radius = 420;


// place items in circle
items.forEach((item,i)=>{
    const rot = theta * i;
    item.style.transform =
        `rotateY(${rot}deg) translateZ(${radius}px)`;
});

// rotation logic
function rotate(dir){
    angle += dir * theta;
    carousel.style.transform =
        `translateZ(-${radius}px) rotateY(${angle}deg)`;
}

document.getElementById("next").onclick = ()=>rotate(-1);
document.getElementById("prev").onclick = ()=>rotate(1);

}

Page4Booth();

// ---------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------



// ---------------------------------------------------------------------------------------




// ---------------------------------------------------------------------------------------





// ---------------------------------------------------------------------------------------

       }
 );
}

 