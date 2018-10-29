(() => {

    
    let photothumb = document.querySelector("#photo_x5F_icon");
    let photonotif = document.querySelector("#notif1");

    let pizzathumb = document.querySelector("#pizza_x5F_icon");
    let pizzanotif = document.querySelector("#notif3");

    let worldthumb = document.querySelector("#world_x5F_icon");
    let worldnotif = document.querySelector("#notif2");

    let pulse0 = document.querySelector("#pulse0");
    let pulse1 = document.querySelector("#pulse1");
    let pulse2 = document.querySelector("#pulse2");
    let pulse3 = document.querySelector("#pulse3");
    let pulse4 = document.querySelector("#pulse4");
    let pulse5 = document.querySelector("#pulse5");

    let text90 = document.querySelector("#ninetext");
    let text300 = document.querySelector("#threetext");
    let text400 = document.querySelector("#fourtext");
    let text600 = document.querySelector("#sixtext");
    let text800 = document.querySelector("#eighttext");
    let textbillion = document.querySelector("#billiontext");

    

    let bluecircle = document.querySelector("#blue_x5F_bubble");
    let orangecircle = document.querySelector("#orange_x5F_bubble");
    let greencircle = document.querySelector("#green_x5F_bubble");

    

    function circle1grow(){
        TweenMax.to(bluecircle, 0.5, {scale: 1.2, transformOrigin:"20% 50%", ease:Back.easeOut});
    }

    function circle1shrink(){
        TweenMax.to(bluecircle, 0.5, {scale: 1, ease:Bounce.easeOut});
    }

    function circle2grow(){
        TweenMax.to(orangecircle, 0.5, {scale: 1.2, transformOrigin:"50% 50%", ease:Back.easeOut});
    }

    function circle2shrink(){
        TweenMax.to(orangecircle, 0.5, {scale: 1, ease:Bounce.easeOut});
    }

    function circle3grow(){
        TweenMax.to(greencircle, 0.5, {scale: 1.2, transformOrigin:"80% 50%", ease:Back.easeOut});
    }

    function circle3shrink(){
        TweenMax.to(greencircle, 0.5, {scale: 1, ease:Bounce.easeOut});
    }

    function showText1(){
        TweenMax.to(photonotif, 2, {opacity: 1, ease:Back.easeOut})
    
    }

    function showText2(){
        TweenMax.to(worldnotif, 2, {opacity: 1, ease:Back.easeOut})
    
    }

    function showText3(){
        TweenMax.to(pizzanotif, 2, {opacity: 1, ease:Back.easeOut})
    
    }



    function pulse0Grow(){
        TweenMax.to(pulse0, 0.4, {scale:1.5, transformOrigin:"50% 50%", ease:Back.easeOut});
        TweenMax.to(text90, 0.5, {scale:1.1, transformOrigin: "50% 100%", ease:Back.easeOut});
    }

    function pulse0Shrink(){
        TweenMax.to(pulse0, 0.4, {scale:1, transformOrigin:"50% 50%", ease:Bounce.easeOut});
        TweenMax.to(text90, 0.5, {scale:1, transformOrigin: "50% 100%", ease:Bounce.easeOut});
    }

    function pulse1Grow(){
        TweenMax.to(pulse1, 0.4, {scale:1.5, transformOrigin:"50% 50%", ease:Back.easeOut});
        text300.style.display = 'block';
        TweenMax.to(text300, 0.5, {scale:1.2, transformOrigin: "100% 100%", ease:Back.easeOut});
    }

    function pulse1Shrink(){
        TweenMax.to(pulse1, 0.4, {scale:1, transformOrigin:"50% 50%", ease:Bounce.easeOut});
        text300.style.display = 'none';
    }

    function pulse2Grow(){
        TweenMax.to(pulse2, 0.4, {scale:1.5, transformOrigin:"50% 50%", ease:Back.easeOut});
        text400.style.display = 'block';
        TweenMax.to(text400, 0.5, {scale:1.2, transformOrigin: "100% 100%", ease:Back.easeOut});
    }

    function pulse2Shrink(){
        TweenMax.to(pulse2, 0.4, {scale:1, transformOrigin:"50% 50%", ease:Bounce.easeOut});
        text400.style.display = 'none';
    }

    function pulse3Grow(){
        TweenMax.to(pulse3, 0.4, {scale:1.5, transformOrigin:"50% 50%", ease:Back.easeOut});
        text600.style.display = 'block';
        TweenMax.to(text600, 0.5, {scale:1.2, transformOrigin: "100% 100%", ease:Back.easeOut});
    }

    function pulse3Shrink(){
        TweenMax.to(pulse3, 0.4, {scale:1, transformOrigin:"50% 50%", ease:Bounce.easeOut});
        text600.style.display = 'none';
    }
 
    function pulse4Grow(){
        TweenMax.to(pulse4, 0.4, {scale:1.5, transformOrigin:"50% 50%", ease:Back.easeOut});
        text800.style.display = 'block';
        TweenMax.to(text800, 0.5, {scale:1.2, transformOrigin: "100% 100%", ease:Back.easeOut});
    }

    function pulse4Shrink(){
        TweenMax.to(pulse4, 0.4, {scale:1, transformOrigin:"50% 50%", ease:Bounce.easeOut});
        text800.style.display = 'none';
    }

    function pulse5Grow(){
        TweenMax.to(pulse5, 0.4, {scale:1.5, transformOrigin:"50% 50%", ease:Back.easeOut});
        TweenMax.to(textbillion, 0.5, {scale:1.2, transformOrigin: "50% 100%", ease:Back.easeOut});
    }

    function pulse5Shrink(){
        TweenMax.to(pulse5, 0.4, {scale:1, transformOrigin:"50% 50%", ease:Bounce.easeOut});
        TweenMax.to(textbillion, 0.5, {scale:1, transformOrigin: "50% 100%", ease:Bounce.easeOut});
    }





    bluecircle.addEventListener("mouseover", circle1grow);
    bluecircle.addEventListener("mouseout", circle1shrink);

    orangecircle.addEventListener("mouseover", circle2grow);
    orangecircle.addEventListener("mouseout", circle2shrink);

    greencircle.addEventListener("mouseover", circle3grow);
    greencircle.addEventListener("mouseout", circle3shrink);

    photothumb.addEventListener("click", showText1)
    worldthumb.addEventListener("click", showText2);
    pizzathumb.addEventListener("click", showText3);



    pulse0.addEventListener("mouseover", pulse0Grow);
    pulse0.addEventListener("mouseout", pulse0Shrink);
    pulse1.addEventListener("mouseover", pulse1Grow);
    pulse1.addEventListener("mouseout", pulse1Shrink);
    pulse2.addEventListener("mouseover", pulse2Grow);
    pulse2.addEventListener("mouseout", pulse2Shrink);
    pulse3.addEventListener("mouseover", pulse3Grow);
    pulse3.addEventListener("mouseout", pulse3Shrink);
    pulse4.addEventListener("mouseover", pulse4Grow);
    pulse4.addEventListener("mouseout", pulse4Shrink);
    pulse5.addEventListener("mouseover", pulse5Grow);
    pulse5.addEventListener("mouseout", pulse5Shrink);


    




})();