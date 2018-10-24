(() => {

    let graphimage = document.querySelector("#graph_image");

    function animateGraph() {
        TweenMax.to(graphimage, 1, {x: 300, rotation: 120, xScale: 1.1, yScale: 1.1});
    }

    function unAnimateGraph(){
        TweenMax.to(graphimage, 1, {x: 0, y:0, rotation: 0, xScale: 1, yScale: 1});
    }


    graphimage.addEventListener("mouseover", animateGraph);
    graphimage.addEventListener("mouseout", unAnimateGraph);

	
})();