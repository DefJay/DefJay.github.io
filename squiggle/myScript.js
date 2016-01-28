
var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 1;

function init() {
    canvas = document.getElementById('drawBox');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}


function color(obj) {
    switch (obj.id) {
        case "red":
            x = "red";
            break;
        case "orange":
            x = "orange";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "pink":
            x = "#ff33cc";
            break;
        case "lime":
            x = "#00ff00";
            break;
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "cyan":
            x = "#00ffff";
            break;
        case "magenta":
            x = "#cc00ff"
            break;
        case "purple":
            x = "purple";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "#F9F9F9";
            break;
    }
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    var m = confirm("Are you sure you want to clean your picture?");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}

function changeSizeSmall() {
    var x = document.getElementById("small").value;
    console.log("size is " + x);
    y = 0.5;
    console.log("brush size is now " + y);

}
function changeSizeMedium() {
    var x = document.getElementById("medium").value;
    console.log("size is " + x);
    y = 1;
    console.log("brush size is now " + y);
}
function changeSizeLarge() {
    var x = document.getElementById("large").value;
    console.log("size is " + x);
    y = 3;
    console.log("brush size is now " + y);
}
function changeSizeXLarge() {
    var x = document.getElementById("xlarge").value;
    console.log("size is " + x);
    y = 6;
    console.log("brush size is now " + y);
}


function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}