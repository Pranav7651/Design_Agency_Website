function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
        };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("main").style.transform
        ? "transform"
        : "fixed"*/
    });
}

function loadingAnimation(){
    var tl = gsap.timeline();

    tl.from(".line h1",{
        y:150,
        stagger: 0.25,
        duration: 0.5
    });

    tl.from("#line1-part1",{
        opacity:0,
        onStart : function () {
            var h5Timer = document.querySelector("#line1-part1 h5");
            var grow=0;
            setInterval(function(){
                if(grow < 100) h5Timer.innerHTML = grow++;
                else h5Timer.innerHTML = grow;
            },10);
        }
    })

    tl.to(".line h2",{
        animationName: "anime",
        opacity: 1,
    });

    tl.to("#loader",{
        opacity:0,
        duration: 0.4,
        delay: 2,
    })

    tl.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        duration:0.6,
        ease: "sine.Out",
    });

    tl.to("#loader",{
        display: "none",
    });

    tl.from("#nav",{
        opacity:0,
    });

    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
        opacity:0,
        stagger: 0.25,
        y:140,
        stagger: 0.2
    })
    
    tl.from("#hero1,#page2",{
        opacity:0,
        // stagger: 0.25,
        // y:140,
        // stagger: 0.2
    },"-=1.2")

}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        });
    });
    
    Shery.makeMagnet("#nav-part2 h4");
}


loadingAnimation();
// cursorAnimation();
locomotiveAnimation();