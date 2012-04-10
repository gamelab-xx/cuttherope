/// <reference path="../src/easeljs/display/Bitmap.js" />

(function (window) {
    function Bubble(v) {
        this.initialize(v);
    }
    Bubble.prototype = new Container();

    Bubble.prototype.Container_initialize = Bubble.prototype.initialize; //unique to avoid overiding base class
    var bmp;
    Bubble.prototype.initialize = function (v) {
        this.Container_initialize();
        this.v = v;
        bmp = new Bitmap("img/loader-bubble.png");
        bmp.regX = 114;
        bmp.regY = 114;
        this.addChild(bmp);
        this.x = 200;
        this.y = 200;
        this.W = W;
        this.H = H;

        this.txt = new Text("0", "36px Arial", "#000000");
        this.txt.x = -35;
        this.txt.y = 20;
        this.addChild(this.txt);

    }
    var count = 0;
    Bubble.prototype.tick = function () {
        if (this.x + 100> W || this.x - 100< -10)
            this.v.x = -this.v.x;
        if (bubble.y + 100> H || bubble.y -100 < 0)
            this.v.y = -this.v.y;


        this.x += this.v.x;
        this.y += this.v.y;
        if (count < 100) {
            count++;
            if (count < 10) {
                this.txt.text = "0" + count + "%";

            }
            else {
                this.txt.text = count + "%";
            }
        }
    }


    window.Bubble = Bubble;
} (window));