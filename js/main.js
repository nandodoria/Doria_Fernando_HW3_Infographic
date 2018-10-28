(() => {

    
    let photothumb = document.querySelector("#photo_x5F_icon");
    let photonotif = document.querySelector("#notif1");

    let pizzathumb = document.querySelector("#pizza_x5F_icon");
    let pizzanotif = document.querySelector("#notif3");

    let worldthumb = document.querySelector("#world_x5F_icon");
    let worldnotif = document.querySelector("#notif2");
    


    let bluecircle = document.querySelector("#blue_x5F_bubble");
    let orangecircle = document.querySelector("#orange_x5F_bubble");
    let greencircle = document.querySelector("#green_x5F_bubble");

    

    function circle1grow(){
        TweenMax.to(bluecircle, 0.5, {scale: 0.8, ease:Back.easeOut});
    }

    function circle1shrink(){
        TweenMax.to(bluecircle, 0.5, {scale: 1, ease:Bounce.easeOut});
    }

    function circle2grow(){
        TweenMax.to(orangecircle, 0.5, {scale: 0.8, ease:Back.easeOut});
    }

    function circle2shrink(){
        TweenMax.to(orangecircle, 0.5, {scale: 1, ease:Bounce.easeOut});
    }

    function circle3grow(){
        TweenMax.to(greencircle, 0.5, {scale: 0.8, ease:Back.easeOut});
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

    



    bluecircle.addEventListener("mouseover", circle1grow);
    bluecircle.addEventListener("mouseout", circle1shrink);

    orangecircle.addEventListener("mouseover", circle2grow);
    orangecircle.addEventListener("mouseout", circle2shrink);

    greencircle.addEventListener("mouseover", circle3grow);
    greencircle.addEventListener("mouseout", circle3shrink);

    photothumb.addEventListener("click", showText1)
    worldthumb.addEventListener("click", showText2);
    pizzathumb.addEventListener("click", showText3);
    




})();