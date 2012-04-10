/// <reference path="../../src/easeljs/display/Bitmap.js" />
/// <reference path="../../lib/easel.js" />
/// <reference path="../lib/tween.js" />
(function (window) {
    function Star(x, y, v) {
        this.initialize(x, y, v);
    }
    Star.prototype = new Container();
    Star.prototype.Container_initialize = Star.prototype.initialize;
    var bmp;
    var bmp1;
    var bmp2;
    var bmp3;
    var bmp4;
    var bmp5;
    var bmp6;
    var bmp7;
    var bmp8;
    var bmp9;
    var bmp10;
    var bmp11;
    var bmp12;
    var bmp13;
    var bmp14;
    var bmp15;
    var bmp16;
    var bmp17;
    var bmpobj;
    var starContainer = new Container();


    Star.prototype.initialize = function (x, y, v) {
        this.Container_initialize();
        this.v = v;

        bmp = new Bitmap("img/obj_star_idle.png");

        bmp.sourceRect = new Rectangle(0, 70, 25, 25);
        bmp1 = bmp.clone();
        bmp1.sourceRect = new Rectangle(0, 99, 25, 25);
        bmp1.x += 1;
        bmp2 = bmp1.clone();
        bmp2.sourceRect = new Rectangle(0, 126, 25, 25);
        bmp2.x += 1;
        bmp3 = bmp2.clone();
        bmp3.sourceRect = new Rectangle(0, 153, 25, 25);
        bmp3.x += 1;
        bmp4 = bmp3.clone();
        bmp4.sourceRect = new Rectangle(0, 180, 25, 25);
        bmp4.x += 1;
        bmp5 = bmp4.clone();
        bmp5.sourceRect = new Rectangle(0, 207, 25, 25);
        bmp5.x += 1;
        bmp6 = bmp5.clone();
        bmp6.sourceRect = new Rectangle(0, 234, 25, 25);
        bmp7 = bmp6.clone();
        bmp7.sourceRect = new Rectangle(0, 261, 25, 25);
        bmp8 = bmp7.clone();
        bmp8.sourceRect = new Rectangle(0, 288, 25, 25);
        bmp8.x += 1;
        bmp9 = bmp8.clone();
        bmp9.sourceRect = new Rectangle(0, 315, 25, 25);
        bmp10 = bmp9.clone();
        bmp10.sourceRect = new Rectangle(0, 342, 25, 27);
        bmp10.x -= 1;
        bmp11 = bmp10.clone();
        bmp11.sourceRect = new Rectangle(0, 372, 25, 27);
        bmp11.x -= 1;
        bmp12 = bmp11.clone();
        bmp12.sourceRect = new Rectangle(0, 400, 25, 29);
        bmp12.x -= 1;
        bmp13 = bmp12.clone();
        bmp13.sourceRect = new Rectangle(0, 428, 25, 30);
        bmp14 = bmp13.clone();
        bmp14.sourceRect = new Rectangle(0, 456, 25, 25);
        bmp14.x -= 1;
        bmp15 = bmp14.clone();
        bmp15.sourceRect = new Rectangle(0, 484, 25, 25);
        bmp15.x -= 1;
        bmp16 = bmp15.clone();
        bmp16.sourceRect = new Rectangle(0, 512, 25, 25);
        bmp16.x -= 1;
        bmp17 = bmp16.clone();
        bmp17.sourceRect = new Rectangle(0, 540, 25, 25);
        bmp17.x -= 1;
        this.addChild(starContainer);
        this.x = x;
        this.y = y;


    }


    function addStars() {
        
        Tween.get(starContainer, { loop: true })
        .call(function () {
            bmpobj = bmp;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp2;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp3;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp4;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp5;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp6;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp7;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp8;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp9;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp10;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp11;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp12;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp13;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp14;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp15;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp16;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
            bmpobj = bmp17;
            starContainer.addChild(bmpobj);
        })
        .wait(100)
        .call(function () {
            starContainer.removeAllChildren();
        });
        //}
    }



    Star.prototype.tick = function (v) {
        addStars();
    }



    window.Star = Star;
} (window));