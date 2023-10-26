const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// Global variable
var timeout;

function mouseskew(){
    var scaleX = 1;
    var scaleY = 1;

    var prevX = 0;
    var prevY = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);
        var diffX = dets.clientX - prevX;
        var diffY = dets.clientY - prevY;

        prevX = dets.clientX;
        prevY = dets.clientY;

        scaleX = gsap.utils.clamp(0.8, 1.2, diffX);
        scaleY = gsap.utils.clamp(0.8, 1.2, diffY);

        circleMouseFollower(scaleX, scaleY);

        timeout = setTimeout(function(){
           document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
        

    });
}



function circleMouseFollower(scaleX, scaleY){
    window.addEventListener("mousemove", function(dets){
      document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${scaleX}, ${scaleY})`;
        
    });
}


function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".bounding-elem",{
            y: 0,
            duration: 2,
            ease: Expo.easeInOut,
            delay: -1,
            stagger: .2
        })
        .from("#head-footer", {
            y: 100,
            opacity: 0,
            duration: 1.5, 
            delay: 0.1,
            ease: Expo.easeInOut
        })
}

circleMouseFollower();

mouseskew();

firstPageAnim();


 document.querySelectorAll(".elem").forEach(function (elem){
     var rotate = 0;
     var diff = 0;
    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;

        elem.addEventListener("mouseleave", function(dets){
    
            gsap.to(elem.querySelector("img"),{
                opacity: 0,
                ease: Power3,
            })
        });

        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRot * 0.5),
        })
    });
})





