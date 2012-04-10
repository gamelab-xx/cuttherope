/// <reference path="../lib/easel.js" />
/// <reference path="../lib/tween.js" />
/// <reference path="../src/easeljs/display/Bitmap.js" />
/// <reference path="TweenMany.js" />

(function (window) {
    function Toad(x, y) {
        this.initialize(x, y);
    }
    Toad.prototype = new Container();

    Toad.prototype.Container_initialize = Toad.prototype.initialize;

    var toad1;
    var toad2;
    var toad3;
    var toad4;
    var toad5;
    var toad6;
    var toad7;
    var toad8;
    var toad9;
    var toad10;
    var toad11;
    var toad12;
    var toad13;
    var toad14;
    var toad15;
    var toad16;
    var toad17;
    var toad18;
	var toad19;
    var toad20;
    var toad21;
    var toad22;
    var toad23;
    var toad24;
    var toad25;
    var toad26;
    var toad27;
    var toad28;
    var toad29;
    var toad30;
    var toad31;
    var toad31;

    var bmpArray;


    var bmp;

    var l, w, h;

    var bmpobj;

    var toadContainer = new Container();

    function fuckToad(l, w, h) {
        bmp = new Bitmap("img/char_animations.png");
        bmp.sourceRect = new Rectangle(0, l, w, h);
        return bmp;
    }

    Toad.prototype.Add = function addToad() {
        toad1 = new fuckToad(955, 61, 63);
        toad1.y += 4;
        toad2 = new fuckToad(1021, 61, 63);
        toad2.y += 4;
        toad3 = new fuckToad(1088, 61, 63);
        toad3.y += 4;
        toad4 = new fuckToad(1155, 61, 63);
        toad4.y += 4;
        toad5 = new fuckToad(1222, 61, 63);
        toad5.y += 4;
        toad6 = new fuckToad(1289, 61, 64);
        toad6.y += 3;
        toad7 = new fuckToad(1357, 61, 65);
        toad7.y += 2;
        toad8 = new fuckToad(1426, 61, 66);
        toad8.y += 1;
        toad9 = new fuckToad(1496, 61, 67);
        toad10 = new fuckToad(1567, 61, 67);
        toad11 = new fuckToad(1638, 61, 67);
        toad12 = new fuckToad(1709, 61, 67);
        toad13 = new fuckToad(1781, 61, 67);
        toad14 = new fuckToad(1853, 61, 67);
        toad15 = new fuckToad(1925, 61, 67);
        toad16 = new fuckToad(1995, 61, 67);
        toad17 = new fuckToad(2063, 61, 67);
        toad18 = new fuckToad(2132, 61, 67);

        this.removeAllChildren();
        this.addChild(toadContainer);


        //                        toadContainer.addChild(toad16);
                Tween.get(toadContainer, { loop: true })
                            .call(function () {
                                bmpobj = toad1;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad2;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad3;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad4;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad5;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad6;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad7;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad8;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad9;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad10;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad11;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad12;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad13;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad14;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                                    .call(function () {
                                        toadContainer.removeAllChildren();
                                        bmpobj = toad15;
                                        toadContainer.addChild(bmpobj);
                                    })
                            .wait(100)
                                    .call(function () {
                                        toadContainer.removeAllChildren();
                                        bmpobj = toad16;
                                        toadContainer.addChild(bmpobj);
                                    })
                            .wait(100)
                                    .call(function () {
                                        toadContainer.removeAllChildren();
                                        bmpobj = toad17;
                                        toadContainer.addChild(bmpobj);
                                    })
                            .wait(100)
                                    .call(function () {
                                        toadContainer.removeAllChildren();
                                        bmpobj = toad18;
                                        toadContainer.addChild(bmpobj);
                                    })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                            });
        //}
    }
    Toad.prototype.Eat = function toadEat() {
        toad1 = new fuckToad(3659, 61, 63);
        toad1.x += 15;
        toad1.y += 4;
        toad2 = new fuckToad(3726, 61, 65);
        toad2.x += 15;
        toad2.y += 2;
        toad3 = new fuckToad(3794, 63, 59);
        toad3.x += 13;
        toad3.y += 8;
        toad4 = new fuckToad(3858, 67, 52);
        toad4.x += 9;
        toad4.y += 15;
        toad5 = new fuckToad(3914, 76, 59);
        toad5.y += 8;
        toad6 = new fuckToad(3978, 69, 61);
        toad6.x += 7;
        toad6.y += 6;
        toad7 = new fuckToad(4043, 63, 62);
        toad7.x += 13;
        toad7.y += 5;
        toad8 = new fuckToad(4109, 61, 64);
        toad8.x += 15;
        toad8.y += 3;
        toad9 = new fuckToad(4177, 61, 67);
        toad9.x += 15;
        toad10 = new fuckToad(4248, 61, 67);
        toad10.x += 15;
        toad11 = new fuckToad(4319, 63, 67);
        toad11.x += 13;
        toad12 = new fuckToad(4390, 70, 64);
        toad12.x += 6;
        toad12.y += 3;
        toad13 = new fuckToad(4458, 74, 62);
        toad13.x += 2;
        toad13.y += 5;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //                toadEatContainer.addChild(toadEat13);

        Tween.get(toadContainer, { loop: true })
                        .call(function () {
                            bmpobj = toad1;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad2;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad3;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad4;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad5;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad6;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad7;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad8;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad9;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad10;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad11;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad12;
                            toadContainer.addChild(bmpobj);
                        })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad13;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                        });
        //                        }

    }
    Toad.prototype.Mouth = function toad() {
        toad1 = new fuckToad(3066, 63, 66);
        toad2 = new fuckToad(3136, 63, 64);
        toad2.y += 2;
        toad3 = new fuckToad(3204, 63, 63);
        toad3.y += 3;
        toad4 = new fuckToad(3271, 63, 63);
        toad4.y += 3;
        toad5 = new fuckToad(3338, 63, 61);
        toad5.y += 5;
        toad6 = new fuckToad(3338, 63, 61);
        toad6.y += 5;
        toad7 = new fuckToad(3467, 63, 60);
        toad7.y += 6;
        toad8 = new fuckToad(3531, 63, 60);
        toad8.y += 6;
        toad9 = new fuckToad(3595, 63, 60);
        toad9.y += 6;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //    toadContainer.addChild(toad1);

        Tween.get(toadContainer, { loop: false })
                    .call(function () {
                        bmpobj = toad1;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad2;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad3;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad4;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad5;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad6;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad7;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad8;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad9;
                        toadContainer.addChild(bmpobj);
                    });
        //                    .wait(100)
        //                    .call(function () {
        //                            toadContainer.removeAllChildren();
        //                                    });
        //}
    }
    Toad.prototype.Greet = function toad() {
        toad1 = new fuckToad(10515, 63, 64);
        toad1.x += 4;
        toad1.y += 8;
        toad2 = new fuckToad(10583, 64, 63);
        toad2.x += 3;
        toad2.y += 9;
        toad3 = new fuckToad(10650, 60, 67);
        toad3.x += 7;
        toad3.y += 5;
        toad4 = new fuckToad(10721, 59, 70);
        toad4.x += 8;
        toad4.y += 2;
        toad5 = new fuckToad(10795, 59, 71);
        toad5.x += 8;
        toad5.y += 1;
        toad6 = new fuckToad(10870, 60, 71);
        toad6.x += 7;
        toad6.y += 1;
        toad7 = new fuckToad(10945, 62, 72);
        toad7.x += 5;
        toad8 = new fuckToad(11021, 63, 69);
        toad8.x += 4;
        toad8.y += 3;
        toad9 = new fuckToad(11093, 65, 63);
        toad9.x += 2;
        toad9.y += 9;
        toad10 = new fuckToad(11160, 64, 59);
        toad10.x += 3;
        toad10.y += 13;
        toad11 = new fuckToad(11222, 64, 55);
        toad11.x += 3;
        toad11.y += 17;
        toad12 = new fuckToad(11280, 67, 55);
        toad12.y += 17;
        toad13 = new fuckToad(11339, 67, 55);
        toad13.y += 17;
        toad14 = new fuckToad(11398, 65, 55);
        toad14.x += 2;
        toad14.y += 17;
        toad15 = new fuckToad(11455, 64, 55);
        toad15.x += 3;
        toad15.y += 17;
        toad16 = new fuckToad(11513, 67, 55);
        toad16.y += 17;
        toad17 = new fuckToad(11572, 67, 55);
        toad17.y += 17;
        toad18 = new fuckToad(11630, 64, 55);
        toad18.x += 3;
        toad18.y += 17;
        toad19 = new fuckToad(11688, 64, 54);
        toad19.x += 3;
        toad19.y += 18;
        toad20 = new fuckToad(11746, 67, 54);
        toad20.y += 18;
        toad21 = new fuckToad(11804, 67, 55);
        toad21.y += 17;
        toad22 = new fuckToad(11862, 64, 55);
        toad22.x += 3;
        toad22.y += 17;
        toad23 = new fuckToad(11920, 64, 54);
        toad23.x += 3;
        toad23.y += 18;
        toad24 = new fuckToad(11978, 65, 53);
        toad24.x += 2;
        toad24.y += 19;
        toad25 = new fuckToad(12035, 65, 53);
        toad25.x += 2;
        toad25.y += 19;
        toad26 = new fuckToad(12092, 59, 62);
        toad26.x += 8;
        toad26.y += 10;
        toad27 = new fuckToad(12158, 59, 72);
        toad27.x += 8;
        toad28 = new fuckToad(12233, 59, 71);
        toad28.x += 8;
        toad28.y += 1;
        toad29 = new fuckToad(12307, 63, 61);
        toad29.x += 4;
        toad29.y += 11;
        toad30 = new fuckToad(12372, 62, 59);
        toad30.x += 5;
        toad30.y += 13;
        toad31 = new fuckToad(12435, 60, 61);
        toad31.x += 7;
        toad31.y += 11;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //        toadContainer.addChild(toad31);

        Tween.get(toadContainer, { loop: true })
            .call(function () {
                bmpobj = toad1;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad2;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad3;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad4;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad5;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad6;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad7;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad8;
                toadContainer.addChild(bmpobj);
            })
                                                                        .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad9;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad10;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad11;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad12;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad13;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad14;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad15;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                bmpobj = toad16;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad17;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad18;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad19;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad20;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad21;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad22;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad23;
                toadContainer.addChild(bmpobj);
            })
                                                                        .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad24;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad25;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad26;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad27;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad28;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad29;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad30;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
                bmpobj = toad31;
                toadContainer.addChild(bmpobj);
            })
            .wait(100)
            .call(function () {
                toadContainer.removeAllChildren();
            });
        //}
    }
    Toad.prototype.Anxiety = function toad() {
        toad1 = new fuckToad(5973, 64, 62);
        toad1.y += 4;
        toad1.x += 4;
        toad2 = new fuckToad(6039, 66, 61);
        toad2.x += 2;
        toad2.y += 5;
        toad3 = new fuckToad(6105, 64, 61);
        toad3.x += 4;
        toad3.y += 5;
        toad4 = new fuckToad(6170, 64, 63);
        toad4.x += 4;
        toad4.y += 3;
        toad5 = new fuckToad(6237, 64, 64);
        toad5.x += 4;
        toad5.y += 2;
        toad6 = new fuckToad(6306, 66, 65);
        toad6.x += 2;
        toad6.y += 1;
        toad7 = new fuckToad(6376, 67, 66);
        toad7.x += 1;
        toad8 = new fuckToad(6446, 68, 65);
        toad8.y += 1;
        toad9 = new fuckToad(6515, 67, 64);
        toad9.x += 1;
        toad9.y += 2;
        toad10 = new fuckToad(6583, 60, 62);
        toad10.x += 8;
        toad10.y += 4;
        toad11 = new fuckToad(6649, 60, 62);
        toad11.x += 8;
        toad11.y += 4;
        toad12 = new fuckToad(6716, 60, 63);
        toad12.x += 8;
        toad12.y += 3;
        toad13 = new fuckToad(6783, 66, 64);
        toad13.x += 2;
        toad13.y += 2;
        toad14 = new fuckToad(6853, 68, 64);
        toad14.y += 2;
        toad15 = new fuckToad(6922, 67, 64);
        toad15.x += 1;
        toad15.y += 2;
        toad16 = new fuckToad(6990, 60, 66);
        toad16.x += 8;
        toad17 = new fuckToad(7060, 60, 64);
        toad17.x += 8;
        toad17.y += 2;
        toad18 = new fuckToad(7129, 60, 64);
        toad18.x += 8;
        toad18.y += 2;
        toad19 = new fuckToad(7197, 66, 65);
        toad19.x += 2;
        toad19.y += 1;
        toad20 = new fuckToad(7266, 68, 65);
        toad20.y += 1;
        toad21 = new fuckToad(7336, 68, 65);
        toad21.y += 1;
        toad22 = new fuckToad(7266, 68, 65);
        toad22.y += 1;
        toad23 = new fuckToad(7336, 68, 65);
        toad23.y += 1;
        toad24 = new fuckToad(7406, 67, 66);
        toad24.x += 1;
        toad24.y += 1;
        toad25 = new fuckToad(7476, 67, 66);
        toad25.x += 1;
        toad26 = new fuckToad(7549, 66, 64);
        toad26.x += 2;
        toad26.y += 1;
        toad27 = new fuckToad(7617, 65, 62);
        toad27.x += 3;
        toad27.y += 4;
        toad28 = new fuckToad(7683, 66, 61);
        toad28.x += 2;
        toad28.y += 5;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //    toadContainer.addChild(toad28);

        Tween.get(toadContainer, { loop: true })
                                     .call(function () {
                                         bmpobj = toad1;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad2;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad3;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad4;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                          .call(function () {
                                                              toadContainer.removeAllChildren();
                                                              bmpobj = toad5;
                                                              toadContainer.addChild(bmpobj);
                                                          })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad6;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad7;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad8;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad9;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad10;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad11;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                          .call(function () {
                                                              toadContainer.removeAllChildren();
                                                              bmpobj = toad12;
                                                              toadContainer.addChild(bmpobj);
                                                          })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad13;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad14;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad15;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad16;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad17;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad18;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                          .call(function () {
                                                              toadContainer.removeAllChildren();
                                                              bmpobj = toad19;
                                                              toadContainer.addChild(bmpobj);
                                                          })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad20;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad21;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad22;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad23;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad24;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad25;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                          .call(function () {
                                                              toadContainer.removeAllChildren();
                                                              bmpobj = toad26;
                                                              toadContainer.addChild(bmpobj);
                                                          })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                         bmpobj = toad27;
                                         toadContainer.addChild(bmpobj);
                                     })
                                     .wait(100)
                                                              .call(function () {
                                                                  toadContainer.removeAllChildren();
                                                                  bmpobj = toad28;
                                                                  toadContainer.addChild(bmpobj);
                                                              })
                                     .wait(100)
                                     .call(function () {
                                         toadContainer.removeAllChildren();
                                     });
        //    }
    }
    Toad.prototype.Despair = function toad() {
        toad1 = new fuckToad(2203, 68, 59);
        toad1.y += 7;
        toad2 = new fuckToad(2266, 68, 61);
        toad2.y += 5;
        toad3 = new fuckToad(2331, 68, 63);
        toad3.y += 3;
        toad4 = new fuckToad(2397, 68, 65);
        toad4.y += 1;
        toad5 = new fuckToad(2467, 68, 65);
        toad5.y += 1;
        toad6 = new fuckToad(2537, 68, 66);
        toad7 = new fuckToad(2607, 68, 63);
        toad7.y += 3;
        toad8 = new fuckToad(2674, 68, 61);
        toad8.y += 5;
        toad9 = new fuckToad(2739, 68, 59);
        toad9.y += 7;
        toad10 = new fuckToad(2803, 68, 60);
        toad10.y += 6;
        toad11 = new fuckToad(2867, 68, 61);
        toad11.y += 5;
        toad12 = new fuckToad(2932, 68, 62);
        toad12.y += 4;
        toad13 = new fuckToad(2998, 68, 62);
        toad13.y += 4;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //                toadContainer.addChild(toad13);

        Tween.get(toadContainer, { loop: true })
                    .call(function () {
                        bmpobj = toad1;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad2;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad3;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad4;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad5;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad6;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad7;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad8;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad9;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad10;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad11;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad12;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                        bmpobj = toad13;
                        toadContainer.addChild(bmpobj);
                    })
                    .wait(100)
                    .call(function () {
                        toadContainer.removeAllChildren();
                    });
        //        }

    }
    Toad.prototype.Move = function toad() {
        toad1 = new fuckToad(7748, 62, 57);
        toad1.x += 1;
        toad1.y += 8;
        toad2 = new fuckToad(7809, 62, 58);
        toad2.x += 1;
        toad2.y += 7;
        toad3 = new fuckToad(7872, 61, 62);
        toad3.x += 2;
        toad3.y += 3;
        toad4 = new fuckToad(7939, 61, 64);
        toad4.x += 2;
        toad4.y += 1;
        toad5 = new fuckToad(8008, 61, 65);
        toad5.x += 2;
        toad6 = new fuckToad(8077, 62, 65);
        toad6.x += 1;
        toad7 = new fuckToad(8146, 62, 64);
        toad7.x += 1;
        toad7.y += 1;
        toad8 = new fuckToad(8214, 62, 61);
        toad8.x += 1;
        toad8.y += 4;
        toad9 = new fuckToad(8281, 62, 57);
        toad9.x += 1;
        toad9.y += 8;
        toad10 = new fuckToad(8343, 60, 58);
        toad10.x += 3;
        toad10.y += 7;
        toad11 = new fuckToad(8406, 60, 61);
        toad11.x += 3;
        toad11.y += 4;
        toad12 = new fuckToad(8472, 62, 63);
        toad12.x += 1;
        toad12.y += 2;
        toad13 = new fuckToad(8539, 62, 64);
        toad13.x += 1;
        toad13.y += 1;
        toad14 = new fuckToad(8609, 63, 64);
        toad14.y += 1;
        toad15 = new fuckToad(8677, 62, 65);
        toad15.x += 1;
        toad16 = new fuckToad(8746, 62, 62);
        toad16.x += 1;
        toad16.y += 3;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //                    toadContainer.addChild(toad16);

        Tween.get(toadContainer, { loop: true })
                            .call(function () {
                                bmpobj = toad1;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad2;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad3;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad4;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                                                .call(function () {
                                                    toadContainer.removeAllChildren();
                                                    bmpobj = toad5;
                                                    toadContainer.addChild(bmpobj);
                                                })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad6;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                                                    .call(function () {
                                                        toadContainer.removeAllChildren();
                                                        bmpobj = toad7;
                                                        toadContainer.addChild(bmpobj);
                                                    })
                            .wait(100)
                                                    .call(function () {
                                                        toadContainer.removeAllChildren();
                                                        bmpobj = toad8;
                                                        toadContainer.addChild(bmpobj);
                                                    })
                                                                                        .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad9;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad10;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad11;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                                                .call(function () {
                                                    toadContainer.removeAllChildren();
                                                    bmpobj = toad12;
                                                    toadContainer.addChild(bmpobj);
                                                })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad13;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                                                    .call(function () {
                                                        toadContainer.removeAllChildren();
                                                        bmpobj = toad14;
                                                        toadContainer.addChild(bmpobj);
                                                    })
                            .wait(100)
                                                    .call(function () {
                                                        toadContainer.removeAllChildren();
                                                        bmpobj = toad15;
                                                        toadContainer.addChild(bmpobj);
                                                    })
                                                                                        .wait(100)
                                                    .call(function () {
                                                        toadContainer.removeAllChildren();
                                                        bmpobj = toad16;
                                                        toadContainer.addChild(bmpobj);
                                                    })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                            });
        //                                  }
    }
    Toad.prototype.Fool = function toad() {
        toad1 = new fuckToad(8812, 68, 61);
        toad1.y += 6;
        toad2 = new fuckToad(8877, 64, 61);
        toad2.x += 4;
        toad2.y += 6;
        toad3 = new fuckToad(8943, 59, 63);
        toad3.x += 9;
        toad3.y += 4;
        toad4 = new fuckToad(9010, 57, 64);
        toad4.x += 11;
        toad4.y += 3;
        toad5 = new fuckToad(9079, 57, 65);
        toad5.x += 11;
        toad5.y += 2;
        toad6 = new fuckToad(9149, 58, 66);
        toad6.x += 10;
        toad6.y += 1;
        toad7 = new fuckToad(9219, 60, 64);
        toad7.x += 8;
        toad7.y += 3;
        toad8 = new fuckToad(9287, 61, 63);
        toad8.x += 7;
        toad8.y += 4;
        toad9 = new fuckToad(9354, 62, 61);
        toad9.x += 6;
        toad9.y += 6;
        toad10 = new fuckToad(9420, 62, 61);
        toad10.x += 6;
        toad10.y += 6;
        toad11 = new fuckToad(9486, 64, 62);
        toad11.x += 4;
        toad11.y += 5;
        toad12 = new fuckToad(9553, 64, 63);
        toad12.x += 4;
        toad12.y += 4;
        toad13 = new fuckToad(9621, 64, 63);
        toad13.x += 4;
        toad13.y += 4;
        toad14 = new fuckToad(9689, 64, 63);
        toad14.x += 4;
        toad14.y += 4;
        toad15 = new fuckToad(9757, 64, 63);
        toad15.x += 4;
        toad15.y += 4;
        toad16 = new fuckToad(9825, 64, 63);
        toad16.x += 4;
        toad16.y += 4;
        toad17 = new fuckToad(9893, 64, 63);
        toad17.x += 4;
        toad17.y += 4;
        toad18 = new fuckToad(9961, 64, 63);
        toad18.x += 4;
        toad18.y += 4;
        toad19 = new fuckToad(10029, 64, 63);
        toad19.x += 4;
        toad19.y += 4;
        toad20 = new fuckToad(10097, 64, 63);
        toad20.x += 4;
        toad20.y += 4;
        toad21 = new fuckToad(10165, 64, 63);
        toad21.x += 4;
        toad21.y += 4;
        toad22 = new fuckToad(10233, 64, 64);
        toad22.x += 4;
        toad22.y += 3;
        toad23 = new fuckToad(10302, 64, 66);
        toad23.x += 4;
        toad23.y += 1;
        toad24 = new fuckToad(10373, 60, 67);
        toad24.x += 8;
        toad25 = new fuckToad(10445, 62, 66);
        toad25.x += 6;
        toad25.y += 1;

        this.removeAllChildren();
        this.addChild(toadContainer);

        //            toadContainer.addChild(toad25);

        Tween.get(toadContainer, { loop: true })
                        .call(function () {
                            bmpobj = toad1;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad2;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad3;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad4;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad5;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad6;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad7;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad8;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad9;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad10;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad11;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad12;
                            toadContainer.addChild(bmpobj);
                        })
                            .wait(100)
                            .call(function () {
                                toadContainer.removeAllChildren();
                                bmpobj = toad13;
                                toadContainer.addChild(bmpobj);
                            })
                            .wait(100)
                           .call(function () {
                               bmpobj = toad14;
                               toadContainer.addChild(bmpobj);
                           })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad15;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad16;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad7;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad8;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad9;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad20;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad21;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad22;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad23;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad24;
                            toadContainer.addChild(bmpobj);
                        })
                        .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                            bmpobj = toad25;
                            toadContainer.addChild(bmpobj);
                        })
                            .wait(100)
                        .call(function () {
                            toadContainer.removeAllChildren();
                        });
        //                        }
    }
    Toad.prototype.Unknow = function toad() {
        toad1 = new fuckToad(4584, 63, 60);
        toad1.y += 14;
        toad2 = new fuckToad(4649, 63, 62);
        toad2.y += 12;
        toad3 = new fuckToad(4716, 63, 69);
        toad3.y += 5;
        toad4 = new fuckToad(4789, 63, 74);
        toad5 = new fuckToad(4868, 63, 74);
        toad6 = new fuckToad(4947, 63, 72);
        toad6.y += 2;
        toad7 = new fuckToad(5023, 63, 70);
        toad7.y += 4;
        toad8 = new fuckToad(5099, 63, 68);
        toad8.y += 6;
        toad9 = new fuckToad(5172, 63, 66);
        toad9.y += 8;
        toad10 = new fuckToad(5243, 63, 66);
        toad10.y += 8;
        toad11 = new fuckToad(5314, 63, 67);
        toad11.y += 7;
        toad12 = new fuckToad(5386, 63, 68);
        toad12.y += 6;
        toad13 = new fuckToad(5459, 63, 68);
        toad13.y += 6;
        toad14 = new fuckToad(5532, 63, 68);
        toad14.y += 6;
        toad15 = new fuckToad(5605, 63, 68);
        toad15.y += 6;
        toad16 = new fuckToad(5677, 63, 70);
        toad16.y += 4;
        toad17 = new fuckToad(5753, 63, 71);
        toad17.y += 3;
        toad18 = new fuckToad(5829, 63, 69);
        toad18.y += 5;
        toad19 = new fuckToad(5903, 63, 64);
        toad19.y += 10;

        //         toadContainer.addChild(toad6);

        this.removeAllChildren();
        this.addChild(toadContainer);

        Tween.get(toadContainer, { loop: true })
                                 .call(function () {
                                     bmpobj = toad1;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad2;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad3;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad4;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                                      .call(function () {
                                                          toadContainer.removeAllChildren();
                                                          bmpobj = toad5;
                                                          toadContainer.addChild(bmpobj);
                                                      })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad6;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad7;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                                      .call(function () {
                                                          toadContainer.removeAllChildren();
                                                          bmpobj = toad8;
                                                          toadContainer.addChild(bmpobj);
                                                      })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad9;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad10;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                                      .call(function () {
                                                          toadContainer.removeAllChildren();
                                                          bmpobj = toad11;
                                                          toadContainer.addChild(bmpobj);
                                                      })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad12;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad13;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                                      .call(function () {
                                                          toadContainer.removeAllChildren();
                                                          bmpobj = toad14;
                                                          toadContainer.addChild(bmpobj);
                                                      })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad15;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad16;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                                      .call(function () {
                                                          toadContainer.removeAllChildren();
                                                          bmpobj = toad17;
                                                          toadContainer.addChild(bmpobj);
                                                      })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad18;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                     bmpobj = toad19;
                                     toadContainer.addChild(bmpobj);
                                 })
                                 .wait(100)
                                 .call(function () {
                                     toadContainer.removeAllChildren();
                                 });
        //                     }
    }

    Toad.prototype.initialize = function (x, y) {
        this.Container_initialize();

        this.x = x;
        this.y = y;

    }


    window.Toad = Toad;
} (window));