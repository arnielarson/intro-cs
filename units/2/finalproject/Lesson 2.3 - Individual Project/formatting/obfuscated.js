var slingshot={left:150,bottom:50,width:8,radius:30,height:70,color:"#cc9a5b"};
var rubberBand={color:"#552813",width:4};
var background={horizon:150,skyColor:"#b7dcf7",groundColor:"#55ad3c",rayColor:"#9bcff4",rayWidth:30,rayLength:1000,sunRadius:100,sunColor:"lightyellow",attributionText:"Images from http://www.freevector.com/angry-birds-characters/, intended for educational purposes only",attributionFont:"8pt Arial",attributionColor:"lightgreen"};
function getCanvas()
{
    var _0x76d1x4=document["getElementById"]("mainCanvas");
    return _0x76d1x4;
}
;
function drawEverything()
{
    var _0x76d1x4=getCanvas();
    var _0x76d1x6=_0x76d1x4["getContext"]("2d");
    drawBackground(_0x76d1x6);
    drawSlingshot(_0x76d1x6);
    if(birdToLaunch!=undefined)
    {
        drawRubberBand(_0x76d1x6,birdToLaunch);
    }
    drawAllPigs(_0x76d1x6);
    drawAllBirds(_0x76d1x6);
}
;
function drawBackground(_0x76d1x6)
{
    var _0x76d1x4=_0x76d1x6["canvas"];
    _0x76d1x6["fillStyle"]=background["skyColor"];
    _0x76d1x6["fillRect"](0,0,_0x76d1x4["width"],_0x76d1x4["height"]-background["horizon"]);
    _0x76d1x6["strokeStyle"]=background["rayColor"];
    _0x76d1x6["lineWidth"]=background["rayWidth"];
    for(var _0x76d1x8=0;_0x76d1x8<10;_0x76d1x8=_0x76d1x8+1)
    {
        var _0x76d1x9=Math["PI"]/18*_0x76d1x8;
        var _0x76d1xa=background["rayLength"]*Math["cos"](_0x76d1x9);
        var _0x76d1xb=background["rayLength"]*Math["sin"](_0x76d1x9);
        _0x76d1x6["beginPath"]();
        _0x76d1x6["moveTo"](0,0);
        _0x76d1x6["lineTo"](0+_0x76d1xa,0+_0x76d1xb);
        _0x76d1x6["stroke"]();
    }
    _0x76d1x6["fillStyle"]=background["sunColor"];
    _0x76d1x6["beginPath"]();
    _0x76d1x6["arc"](0,0,background["sunRadius"],0,Math["PI"]*2);
    _0x76d1x6["closePath"]();
    _0x76d1x6["fill"]();
    _0x76d1x6["fillStyle"]=background["groundColor"];
    _0x76d1x6["fillRect"](0,_0x76d1x4["height"]-background["horizon"],_0x76d1x4["width"],background["horizon"]);
    _0x76d1x6["font"]=background["attributionFont"];
    _0x76d1x6["fillStyle"]=background["attributionColor"];
    _0x76d1x6["fillText"](background["attributionText"],2,_0x76d1x4["height"]-2);
}
;
function drawRubberBand(_0x76d1x6,_0x76d1xd)
{
    var _0x76d1x4=_0x76d1x6["canvas"];
    var _0x76d1xe=_0x76d1x4["height"]-slingshot["height"]-slingshot["bottom"];
    _0x76d1x6["strokeStyle"]=rubberBand["color"];
    _0x76d1x6["lineWidth"]=rubberBand["width"];
    _0x76d1x6["beginPath"]();
    _0x76d1x6["moveTo"](slingshot["left"]-slingshot["radius"],_0x76d1xe-slingshot["radius"]);
    _0x76d1x6["lineTo"](_0x76d1xd["x"],_0x76d1xd["y"]);
    _0x76d1x6["stroke"]();
    drawOneBird(_0x76d1x6,_0x76d1xd);
    _0x76d1x6["strokeStyle"]=rubberBand["color"];
    _0x76d1x6["lineWidth"]=rubberBand["width"];
    _0x76d1x6["beginPath"]();
    _0x76d1x6["moveTo"](slingshot["left"]+slingshot["radius"],_0x76d1xe-slingshot["radius"]);
    _0x76d1x6["lineTo"](_0x76d1xd["x"],_0x76d1xd["y"]);
    _0x76d1x6["stroke"]();
}
;
function drawSlingshot(_0x76d1x6)
{
    var _0x76d1x4=_0x76d1x6["canvas"];
    _0x76d1x6["strokeStyle"]=slingshot["color"];
    _0x76d1x6["fillStyle"]=slingshot["color"];
    _0x76d1x6["lineWidth"]=slingshot["width"];
    var _0x76d1xe=_0x76d1x4["height"]-slingshot["height"]-slingshot["bottom"];
    _0x76d1x6["fillRect"](slingshot["left"]-slingshot["width"]/2,_0x76d1xe,slingshot["width"],slingshot["height"]);
    _0x76d1x6["beginPath"]();
    _0x76d1x6["arc"](slingshot["left"],_0x76d1xe-slingshot["radius"],slingshot["radius"],0,Math.PI);
    _0x76d1x6["stroke"]();
    _0x76d1x6["beginPath"]();
    _0x76d1x6["arc"](slingshot["left"]-slingshot["radius"],_0x76d1xe-slingshot["radius"],slingshot["width"],0,Math["PI"]*2);
    _0x76d1x6["fill"]();
    _0x76d1x6["beginPath"]();
    _0x76d1x6["arc"](slingshot["left"]+slingshot["radius"],_0x76d1xe-slingshot["radius"],slingshot["width"],0,Math["PI"]*2);
    _0x76d1x6["fill"]();
}
;
function drawAllPigs(_0x76d1x6)
{
    for(var _0x76d1x11=0;_0x76d1x11<pigs["length"];_0x76d1x11=_0x76d1x11+1)
    {
        var _0x76d1x12=pigs[_0x76d1x11];
        drawOnePig(_0x76d1x6,_0x76d1x12);
    }
}
;
function drawAllBirds(_0x76d1x6)
{
    for(var _0x76d1x11=0;_0x76d1x11<birds["length"];_0x76d1x11=_0x76d1x11+1)
    {
        var _0x76d1xd=birds[_0x76d1x11];
        drawOneBird(_0x76d1x6,_0x76d1xd);
    }
}
;
function drawOneBird(_0x76d1x6,_0x76d1xd)
{
    drawImageCentered(_0x76d1x6,_0x76d1xd["x"],_0x76d1xd["y"],_0x76d1xd["width"],_0x76d1xd["height"],_0x76d1xd["name"]);
}
;
function drawOnePig(_0x76d1x6,_0x76d1x12)
{
    drawImageCentered(_0x76d1x6,_0x76d1x12["x"],_0x76d1x12["y"],_0x76d1x12["width"],_0x76d1x12["height"],_0x76d1x12["name"]);
}
;
function drawImageCentered(_0x76d1x6,_0x76d1xa,_0x76d1xb,_0x76d1x17,_0x76d1x18,_0x76d1x19)
{
    var _0x76d1x1a=document["getElementById"](_0x76d1x19);
    var _0x76d1x1b=_0x76d1xa-_0x76d1x17/2;
    var _0x76d1x1c=_0x76d1xb-_0x76d1x18/2;
    _0x76d1x6["drawImage"](_0x76d1x1a,_0x76d1x1b,_0x76d1x1c,_0x76d1x17,_0x76d1x18);
}
;
