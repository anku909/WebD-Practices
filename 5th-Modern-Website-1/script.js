const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(data){
        this.document.querySelector("#mini-circle").style.transform = `translate(${data.clientX}px, ${data.clientY}px)`;

    })
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
            y: -10,
            opacity: 0,
            duration: 1.5, 
            delay: 0.1,
            ease: Expo.easeInOut
        })
}

circleMouseFollower();

firstPageAnim();