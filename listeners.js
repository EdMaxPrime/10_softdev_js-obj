var svg = document.getElementsByTagName("svg")[0];
var cbtn = document.getElementById("clear");
var WIDTH = parseInt(svg.getAttribute("width"));
var HEIGHT = parseInt(svg.getAttribute("height"));
var makeCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "green");
    circle.addEventListener("click", circleMouseEvent);
    return circle;
};

var clearSVG = function() {
    while(svg.children.length > 0) {
        svg.children[0].remove();
    }
};

var circleMouseEvent = function(evt) {
    if(this.getAttribute("fill") == "green") {
        this.setAttribute("fill", "red");
    } else {
        this.remove();
        svg.appendChild(makeCircle(Math.random() * WIDTH, Math.random() * HEIGHT));
    }
};

var svgMouseEvent = function(evt) {
    if(evt.target == this) {
        svg.appendChild(makeCircle(evt.offsetX, evt.offsetY));
    }
};

svg.addEventListener("click", svgMouseEvent);
cbtn.addEventListener("click", clearSVG);