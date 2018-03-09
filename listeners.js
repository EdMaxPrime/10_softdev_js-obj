var svg = document.getElementsByTagName("svg")[0];
var cbtn = document.getElementById("clear");
var WIDTH = parseInt(svg.getAttribute("width"));
var HEIGHT = parseInt(svg.getAttribute("height"));
var makeCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.addEventListener("click", circleMouseEvent);
    return {
        x: x,
        y: y,
        r: 10,
        fill: "green",
        elem: circle,
        display: function(svgElement) {
            this.elem.setAttribute("cy", this.y);
            this.elem.setAttribute("cx", this.x);
            this.elem.setAttribute("r", this.r);
            this.elem.setAttribute("fill", this.fill);
            svgElement.appendChild(this);
        },
        remove: function() {
            //WRITE THIS
        },
        update: function(svgElement) {
            this.remove();
            this.display(svgElement);
        }
    };
};

var clearSVG = function() {
    while(svg.children.length > 0) {
        svg.children[0].remove();
    }
};

//MOVE THIS INTO makeCircle() so its the first line
var circleMouseEvent = function(evt) {
    if(this.fill == "green") {
        this.fill = "red";
        this.update(svgElement);
    } else {
        this.remove();
        makeCircle(Math.random() * WIDTH, Math.random() * HEIGHT).display(svg);
    }
};

var svgMouseEvent = function(evt) {
    if(evt.target == this) {
        makeCircle(evt.offsetX, evt.offsetY).display(svg);
    }
};

svg.addEventListener("click", svgMouseEvent);
cbtn.addEventListener("click", clearSVG);