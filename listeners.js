var svg = document.getElementsByTagName("svg")[0];
var cbtn = document.getElementById("clear");
var WIDTH = parseInt(svg.getAttribute("width"));
var HEIGHT = parseInt(svg.getAttribute("height"));

//A template for circle objects
var makeCircle = function(x, y) {
    var obj;
    var circleMouseEvent = function(evt) {
        if(obj.fill == "green") {
            obj.fill = "red";
            obj.update(svg);
        } else {
            obj.remove();
            makeCircle(Math.random() * WIDTH, Math.random() * HEIGHT).display(svg);
        }
    };
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.addEventListener("click", circleMouseEvent);
    obj = {
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
            svgElement.appendChild(this.elem);
        },
        remove: function(){
            this.elem.remove();
        },
        update: function(svgElement) {
            this.remove(svgElement);
            this.display(svgElement);
        }
    };
    return obj;
};

//Removes everything from the svg container
var clearSVG = function() {
    while(svg.children.length > 0) {
        svg.children[0].remove();
    }
};

//This creates the initial circles
var svgMouseEvent = function(evt) {
    if(evt.target == this) {
        makeCircle(evt.offsetX, evt.offsetY).display(svg);
    }
};

svg.addEventListener("click", svgMouseEvent);
cbtn.addEventListener("click", clearSVG);
