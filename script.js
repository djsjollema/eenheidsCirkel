window.addEventListener("load", function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');   
    var grid = new Grid(800,450,20,20,100,100);
    var mouse = utils.captureMouse(canvas);
    
    (function drawContext(){
        requestAnimationFrame(drawContext);
        context.clearRect(0,0,800,450);
        grid.draw(context);
    })();   
});