(() => {


    
    let photothumb = document.querySelector("#photo_x5F_icon");
    let bluecircle = document.querySelector("#blue_x5F_bubble")
    let orangecircle = document.querySelector("#orange_x5F_bubble")
    let greencircle = document.querySelector("#green_x5F_bubble")
    

    function changecolour(){
        photothumb.style.opacity = "0.5";
    }

    function changecolourback(){
        photothumb.style.opacity = "1";
    }

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


    photothumb.addEventListener("mouseover", changecolour);
    photothumb.addEventListener("mouseout", changecolourback);

    bluecircle.addEventListener("mouseover", circle1grow);
    bluecircle.addEventListener("mouseout", circle1shrink);

    orangecircle.addEventListener("mouseover", circle2grow);
    orangecircle.addEventListener("mouseout", circle2shrink);

    greencircle.addEventListener("mouseover", circle3grow);
    greencircle.addEventListener("mouseout", circle3shrink);
    




})();