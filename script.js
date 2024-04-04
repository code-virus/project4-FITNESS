var tl=gsap.timeline()



tl.from(".page-1 img",{
    x:-300,
    opacity:0,
    duration:.5,
    delay:.5
})
tl.from(".page-1 nav",{
    y:-100,
    duration:.5,
    delay:1,
opacity:0,
stagger:.3,

})

tl.from(".title h1",{
    opacity:0,
    duration:.5,

})
tl.from(".title span",{
    x:-200,
    duration:.5,
    stagger:.5,
    opacity:0,
    rotate:360
})
tl.from(".page-1 nav a",{
    y:-100,
    duration:.5,
opacity:0,
stagger:.3

})
tl.to(".title span",{
   y:-3,
    duration:.5,
    stagger:.5,
    rotate:9,
    repeat:-1,
    yoyo:true,
})
tl.to("#span",{
    y:3,
   
    repeat:-1,
    yoyo:true,
     duration:.5,
     stagger:.5,
     rotate:9
 }, "span")
tl.to(".title h1",{
    repeat:-1,
    yoyo:true,
    duration:.5,
    stagger:.5,
    rotate:5
},"span")
tl.from(".hero h1",{
    x:-200,
    opacity:0,
    // duration:.3,
    stagger:.3
    // color:rgb(56, 228, 56),
    // rotate:30
},"span")

tl.to(".hero h1:nth-child(2)",{
   
    y:-40,
    color:"rgb(56, 228, 56)",
    rotate:10,
    duration:.3,
    repeat:-1,
    yoyo:true,


})

tl.to(".hero a:nth-child(5)",{
   
    opacity:1
})
tl.from(".imgs",{
    x:200,
    opacity:0
    ,duration:.5,
    scale:0,
  
})
// tl.from(".img-group .frt-img img",{
//     x:-200,
//     opacity:0,
//     rotate:360,
//     duration:.5,
//     stagger:0.4
    
// })
tl.from(".about h1,.about h3",{
    y:100,
    opacity:0,
    duration:.5,
    stagger:.5,
    scrollTrigger:{
        trigger:".about h1,.about h3",
        scroller:"body",
        // end:"top 50%",
        // start:"top 100%",
        scrub:2

    }

})
tl.from(".about .line1,.about .line2",{
    x:400,
    y:-200,
    duration:.2,
    stagger:.2,
    opacity:0,
    scrollTrigger:{
        trigger:".about h1,.about h3",
        scroller:"body",
        // end:"top 50%",
        // start:"top 100%",
        scrub:2

    }
})
tl.from(".about h5",{
   
    duration:.5,
    stagger:.2,
    opacity:0,
    scrollTrigger:{
        trigger:".about h1,.about h3",
        scroller:"body",
        // end:" 50%",
        // start:" 100%",
        scrub:2

    }

})
tl.from(".about a",{
   y:500,
    duration:1,
    stagger:.2,
    opacity:0,
    scrollTrigger:{
        trigger:".about h1,.about h3",
        scroller:"body",
        // end:"top 0%",
        // start:"top 100%",
        scrub:2

    }

})
tl.from(".frt-img img",{
    x:-100,
    rotate:360,
    opacity:0,
    duration:.4,
    stagger:.3,
    scrollTrigger:{
        trigger:".frt-img img",
        scroller:"body",
        // markers:true,
        // end:"top 0%",
        // start:"top 100%",
        scrub:2
    }
})
tl.from(".page-3 .fixeded",{
    // y:-400,
    opacity:0,
    duration:.1,
    stagger:.3,
    
    scrollTrigger:{
        trigger:".page-3 .fixeded",
        scroller:"body",
        // end:"top 70%",
        // markers:true,
        // start:"top 90%",
        scrub:0
    }
})

tl.from(".left-text h2 ",{
    x:-300,
    opacity:0,
    duration:.5,
    stagger:.3,
    
    scrollTrigger:{
        trigger:".left-text h2",
        scroller:"body",
       
        scrub:2
    }
})

tl.from(".right-text h6 ",{
    x:300,
    opacity:0,
    duration:.5,
    stagger:.3,
    
    scrollTrigger:{
        trigger:".right-text h6",
        scroller:"body",
     
        scrub:2
    }
})

tl.from(".all-box ",{
    x:100,
    opacity:0,
    duration:.1,
    stagger:.3,
    rotate:180,
    
    scrollTrigger:{
        trigger:".right-text h6",
        scroller:"body",
               scrub:2
    }
})


tl.from(".page-4 img",{
    // x:200,
    // rotate:360,
    opacity:0,
    duration:.4,
    stagger:.3,
    scrollTrigger:{
        trigger:".contact h1",
        scroller:"body",
        // markers:true,
        // end:"top 0%",
        // start:"top 100%",
        scrub:2
    }
})

tl.from(".contact h1",{
    x:-200,
    // rotate:360,
    opacity:0,
    duration:.4,
    stagger:.3,
    scrollTrigger:{
        trigger:".contact h1",
        scroller:"body",
        // markers:true,
        // end:"top 0%",
        // start:"top 100%",
        scrub:2
    }
})
tl.from(".contact h5",{
    x:200,
    // rotate:360,
    opacity:0,
    duration:.4,
    stagger:.3,
    scrollTrigger:{
        trigger:".contact h1",
        scroller:"body",
        // markers:true,
        // end:"top 0%",
        // start:"top 100%",
        scrub:2
    }
})
tl.from(".location",{
    x:200,
    // rotate:360,
    opacity:0,
    duration:.4,
    stagger:.3,
    scrollTrigger:{
        trigger:".contact h1",
        scroller:"body",
        // markers:true,
        // end:"top 0%",
        // start:"top 100%",
        scrub:2
    }
})