var COLOR = "black";
var GRIDCOLOR = "#d3d3d3";
var GRIDLINEWIDTH = 1;
var BACKGROUND = "#FFFFFF";
var POINTCOLOR = "RED";

var MARKLENGTH = 5;
var MARKWIDTH = 2;
var MAXX = 10;
var MAXY = 10;

var ARROWLENGHT = 15;
var ARROWWIDTH = 1;

var GRIDSIZE = {
    x: 500,
    y: 500
};

var PointToFind = {
    x: 0,
    y: 0
}

    function NewRandomPoint() {
        PointToFind.x = Math.floor(Math.random() * Tables.XPoz.length - 1) * (Math.random() < 0.5 ? -1 : 1);
        PointToFind.y = Math.floor(Math.random() * Tables.YPoz.length - 1) * (Math.random() < 0.5 ? -1 : 1);
        document.getElementById('LablePointToFind').innerHTML = "Izber kvadrant kjer se nahaja točka (" + PointToFind.x + "," + PointToFind.y + ")";

    }

    function NewRandomPoint2() {
        PointToFind.x = Math.floor(Math.random() * Tables.XPoz.length - 1) * (Math.random() < 0.5 ? -1 : 1);
        PointToFind.y = Math.floor(Math.random() * Tables.YPoz.length - 1) * (Math.random() < 0.5 ? -1 : 1);
        document.getElementById('LablePointToFind').innerHTML = "Označi točko(" + PointToFind.x + "," + PointToFind.y + ")";

    }


    function main() {
        // alert("I am an alert box!");
        var C = document.getElementById("myCanvas");
        var ctx1 = C.getContext("2d");
        ctx1.fillStyle = BACKGROUND;
        ctx1.fillRect(0, 0, GRIDSIZE.x, GRIDSIZE.y);
        ctx1.translate(0.5, 0.5);
        GRIDSIZE.x = GRIDSIZE.x + 2;
        GRIDSIZE.y = GRIDSIZE.y + 2;
        Setup(ctx1, GRIDSIZE.x, GRIDSIZE.y, 1, MAXX, MAXY, MARKWIDTH, MARKLENGTH, ARROWLENGHT, ARROWWIDTH);

        // Nal1();
        // Nal2();

    }

    function Nal2() {
        var C2 = document.getElementById("layer2");
        var ctx2 = C2.getContext("2d");
        C2.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePos(C2, evt);
            ShowPoint(ctx2, mousePos);
        }, false);
        C2.addEventListener("mousedown", doMouseDown, false);
        NewRandomPoint2();
    }

    function Nal1() {
        var C2 = document.getElementById("layer2");
        var ctx2 = C2.getContext("2d");
        C2.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePos(C2, evt);
            ShowQuadrant(ctx2, mousePos);
        }, false);
        C2.addEventListener("mousedown", SelectQuadrant, false);
        NewRandomPoint();
    }

var selectedQuadrant = -1;

function ShowQuadrant(canvas, mousePos) {
    canvas.clearRect(0, 0, GRIDSIZE.x, GRIDSIZE.y);
    canvas.globalAlpha = 0.5;
    canvas.font = "bold 36px TimesNewRoman";
    canvas.beginPath();
    canvas.fillStyle = "green";
    if (mousePos.x > Tables.XPoz[0] && mousePos.y < Tables.YPoz[0]) {
        selectedQuadrant = 1;
        canvas.fillRect(Tables.XPoz[0], 0, GRIDSIZE.x, Tables.YPoz[0]);
        canvas.beginPath();
        canvas.fillStyle = "black";
        canvas.globalAlpha = 1;
        canvas.fillText("I.", 3 * (GRIDSIZE.x / 4), Tables.YPoz[0] / 2);

    }
    if (mousePos.x < Tables.XPoz[0] && mousePos.y > Tables.YPoz[0]) {
        selectedQuadrant = 3;
        canvas.fillRect(0, Tables.YPoz[0], Tables.XPoz[0], GRIDSIZE.y);
        canvas.beginPath();
        canvas.fillStyle = "black";
        canvas.globalAlpha = 1;
        canvas.fillText("III.", Tables.XPoz[0] / 2, 3 * (GRIDSIZE.y / 4));

    }
    if (mousePos.x < Tables.XPoz[0] && mousePos.y < Tables.YPoz[0]) {
        selectedQuadrant = 2;
        canvas.fillRect(0, 0, Tables.XPoz[0], Tables.YPoz[0]);
        canvas.beginPath();
        canvas.fillStyle = "black";
        canvas.globalAlpha = 1;
        canvas.fillText("II.", Tables.XPoz[0] / 2, Tables.YPoz[0] / 2);

    }
    if (mousePos.x > Tables.XPoz[0] && mousePos.y > Tables.YPoz[0]) {
        selectedQuadrant = 4;
        canvas.fillRect(Tables.XPoz[0], Tables.YPoz[0], GRIDSIZE.x, GRIDSIZE.y);
        canvas.beginPath();
        canvas.fillStyle = "black";
        canvas.globalAlpha = 1;
        canvas.fillText("IV.", 3 * (GRIDSIZE.x / 4), 3 * (GRIDSIZE.y / 4));

    }


}




function SelectQuadrant() {
    if (PointToFind.x >= 0 && PointToFind.y >= 0 && selectedQuadrant == 1) {
        alert("Pravilno!");
        return;
    }
    if (PointToFind.x < 0 && PointToFind.y >= 0 && selectedQuadrant == 2) {
        alert("Pravilno!");
        return;
    }
    if (PointToFind.x < 0 && PointToFind.y < 0 && selectedQuadrant == 3) {
        alert("Pravilno!");
        return;
    }
    if (PointToFind.x >= 0 && PointToFind.y < 0 && selectedQuadrant == 4) {
        alert("Pravilno!");
        return;
    }
    alert("Napačno!");

}


function doMouseDown() {
    if (PointToFind.x == Tocka.x && PointToFind.y == Tocka.y)
        alert("Pravilno!");
    else
        alert("Napačno");
}

var Tables = {
    XPoz: new Array(),
    XNeg: new Array(),
    YPoz: new Array(),
    YNeg: new Array()
}


    function getAngle(ctx, x, y, angle, h) {
        var radians = angle * (Math.PI / 180);
        return {
            x: x + h * Math.cos(radians),
            y: y + h * Math.sin(radians)
        };
    }

    function DrawArrowHeads(ctx, height, width, arrowLength, arrowWidth) {
        ctx.beginPath();

        //X arrowHead
        var pos = {
            x: width,
            y: height / 2
        };
        ctx.moveTo(pos.x, pos.y);
        pos = getAngle(ctx, pos.x, pos.y, 155, arrowLength);
        ctx.lineTo(pos.x, pos.y);

        var pos = {
            x: width,
            y: height / 2
        };
        ctx.moveTo(pos.x, pos.y);
        pos = getAngle(ctx, pos.x, pos.y, 205, arrowLength);
        ctx.lineTo(pos.x, pos.y);

        //Y arrowHead
        var pos = {
            x: width / 2,
            y: 0
        };
        ctx.moveTo(pos.x, pos.y);
        pos = getAngle(ctx, pos.x, pos.y, 115, arrowLength);
        ctx.lineTo(pos.x, pos.y);

        var pos = {
            x: width / 2,
            y: 0
        };
        ctx.moveTo(pos.x, pos.y);
        pos = getAngle(ctx, pos.x, pos.y, 65, arrowLength);
        ctx.lineTo(pos.x, pos.y);

        myStroke(ctx, COLOR, 2)

    }

    function myStroke(ctx, color, width) {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();

    }

    function isInTable(tab, intS) {

        for (var i = 0; i < tab.length; i++) {
            if (tab[i] > 0)
                return -1;
            if (tab[i] == intS)
                return 1;

        };

    }

    function Setup(ctx, height, width, lineWidth, maxX, maxY, markWidth, markLenght, arrowLength, arrowWidth) {
        height = height - arrowLength;
        width = width - arrowLength;
        FillGridTable(height, width, lineWidth, maxX, maxY);

        DrawCross(ctx, height, width);


        DrawArrowHeads(ctx, height, width, arrowLength, arrowWidth);
        DrawGrid(ctx, height, width, lineWidth, maxX, maxY);
        DrawMarks(ctx, height, width, maxX, maxY, markWidth, markLenght)




    }

    function DrawCross(ctx, height, width) {


        //Draw center cross
        ctx.beginPath();
        ctx.moveTo(Tables.XPoz[0], 0);
        ctx.lineTo(Tables.XPoz[0], height);
        ctx.moveTo(0, Tables.YPoz[0]);
        ctx.lineTo(width, Tables.YPoz[0]);
        myStroke(ctx, COLOR, 2);

    }

    function FillGridTable(height, width, lineWidth, maxX, maxY) {
        Tables.XPoz[0] = width / 2;
        Tables.XNeg[0] = width / 2;

        Tables.YPoz[0] = height / 2;
        Tables.YNeg[0] = height / 2;

        usableSpaceX = (width - 1) - (maxX * lineWidth); //Remove space taken by lines max of lines and one central line
        usableSpaceY = (height - 1) - (maxY * lineWidth); //Remove space taken by lines max of lines and one central line

        xLinesSpace = (usableSpaceX / maxX >> 0);
        yLinesSpace = (usableSpaceY / maxY >> 0);
        var i = 1;
        x = (width / 2) + xLinesSpace;
        while (x < width) {
            Tables.XPoz[i] = x;
            Tables.XNeg[i] = Math.abs(width - x);
            x = x + xLinesSpace;
            i++;
        }
        i = 1;
        y = (height / 2) + yLinesSpace;
        while (y < height) {

            Tables.YNeg[i] = y;
            Tables.YPoz[i] = Math.abs(height - y);
            y = y + yLinesSpace;
            i++;
        }
    }

    function DrawGrid(ctx, height, width, lineWidth, maxX, maxY) {
        ctx.beginPath();

        for (var i = 1; i < Tables.XPoz.length; i++) {

            ctx.moveTo(Tables.XPoz[i], 0);
            ctx.lineTo(Tables.XPoz[i], height);
            ctx.moveTo(Tables.XNeg[i], 0);
            ctx.lineTo(Tables.XNeg[i], height);
        };

        for (var i = 1; i < Tables.YPoz.length; i++) {

            ctx.moveTo(0, Tables.YPoz[i]);
            ctx.lineTo(width, Tables.YPoz[i]);
            ctx.moveTo(0, Tables.YNeg[i]);
            ctx.lineTo(width, Tables.YNeg[i]);
        };


        myStroke(ctx, GRIDCOLOR, GRIDLINEWIDTH);
    }

    function DrawMarks(ctx, height, width, maxX, maxY, markWidth, markLenght) {
        ctx.beginPath();


        for (var i = 0; i < (Tables.XPoz.length - 1); i++) {

            ctx.moveTo(Tables.XPoz[i], (height / 2) - markLenght);
            ctx.lineTo(Tables.XPoz[i], (height / 2) + markLenght);
            ctx.moveTo(Tables.XNeg[i], (height / 2) - markLenght);
            ctx.lineTo(Tables.XNeg[i], (height / 2) + markLenght);
        };

        for (var i = 0; i < (Tables.YPoz.length - 1); i++) {

            ctx.moveTo((width / 2) - markLenght, Tables.YPoz[i]);
            ctx.lineTo((width / 2) + markLenght, Tables.YPoz[i]);
            ctx.moveTo((width / 2) - markLenght, Tables.YNeg[i]);
            ctx.lineTo((width / 2) + markLenght, Tables.YNeg[i]);
        };


        myStroke(ctx, COLOR, markWidth)
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

var then = 0;
var CHECKSPEED = 100;
var RADIUS = 10;

function ShowPoint(ctx2, mousePos) {
    var now = Date.now();
    var delta = now - then;
    if (delta < CHECKSPEED)
        return;
    then = now;
    var rez = IsInCircle(mousePos.x, mousePos.y);
    if (rez.x != -1) {
        if (LastPaintedPoint.x != -1) {
            ctx2.clearRect(0, 0, GRIDSIZE.x, GRIDSIZE.y);
        }
        //  alert("debug " + mousePos.x + " " + mousePos.y);
        ctx2.beginPath();
        ctx2.arc(rez.x, rez.y, RADIUS, 0, 2 * Math.PI, false);
        ctx2.fillStyle = POINTCOLOR;
        ctx2.fill();
        LastPaintedPoint.x = rez.x;
        LastPaintedPoint.y = rez.y;
    } else {
        if (LastPaintedPoint.x != -1) {
            ctx2.clearRect(0, 0, GRIDSIZE.x, GRIDSIZE.y);
        }
    }
}

var LastPaintedPoint = {
    x: -1,
    y: -1
};

var Tocka = {
    set: false,
    x: 0,
    y: 0
}

    function IsInCircle(x, y) {

        for (var i = 0; i < Tables.XPoz.length; i++) {
            for (var j = 0; j < Tables.YPoz.length; j++) {

                var distance = Math.sqrt(Math.pow(Tables.XPoz[i] - x, 2) + Math.pow(Tables.YPoz[j] - y, 2));
                if (distance <= RADIUS) {
                    Tocka.set = true;
                    Tocka.x = i;
                    Tocka.y = j;
                    return {
                        x: Tables.XPoz[i],
                        y: Tables.YPoz[j],
                    };
                };
                distance = Math.sqrt(Math.pow(Tables.XPoz[i] - x, 2) + Math.pow(Tables.YNeg[j] - y, 2));
                if (distance <= RADIUS) {
                    Tocka.set = true;
                    Tocka.x = i;
                    Tocka.y = -j;
                    return {
                        x: Tables.XPoz[i],
                        y: Tables.YNeg[j],
                    };
                };
                distance = Math.sqrt(Math.pow(Tables.XNeg[i] - x, 2) + Math.pow(Tables.YPoz[j] - y, 2));
                if (distance <= RADIUS) {
                    Tocka.set = true;
                    Tocka.x = -i;
                    Tocka.y = j;
                    return {
                        x: Tables.XNeg[i],
                        y: Tables.YPoz[j],
                    };
                };
                distance = Math.sqrt(Math.pow(Tables.XNeg[i] - x, 2) + Math.pow(Tables.YNeg[j] - y, 2));
                if (distance <= RADIUS) {
                    Tocka.set = true;
                    Tocka.x = -i;
                    Tocka.y = -j;
                    return {
                        x: Tables.XNeg[i],
                        y: Tables.YNeg[j],
                    };
                };
            };
        };



        return {
            x: -1,
            y: -1,
        };

    }