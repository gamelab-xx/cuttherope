/// <reference path="../../src/easeljs/display/Bitmap.js" />
/// <reference path="../../lib/easel.js" />
/// <reference path="../lib/tween.js" />
(function (window) {
    function TweenMany(array, v, b, c) {
        this.initialize(x, v, b);
    }

    var bmp;
    var loop = new Boolean(b);
    String ss;
    String sss;

    TweenMany.prototype=new Bitmap();
    TweenMany.prototype.initialize = function (array, v, b, c) {
        this.initialize();

//        createLoop(array, v, b, c);

    }

    TweenMany.prototype.createLoop=function add(array, v, b, c) 
    {
//        for (var i = 0; i < array.length; i++) {
//            bmp = new Bitmap(array[i]);
//            sss= " .call(function () { bmpobj = " + bmp + "; " + c + ".addChild(bmpobj); }) .wait(" + v + ") ";
//            ss+=sss;
//        }

       // eval("Tween.get("+c+", { loop: "+b+" })"+sss+".call(function () { "+c+".removeAllChildren();});");

    }

    window.TweenMany = TweenMany;
} (window));