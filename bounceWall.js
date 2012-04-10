var bounceWall = (function() {

    returnfunction(canvasId,backgroundColor) {
    this.init(canvasId, backgroundColor);

    }
})();

bounceWall.prototype = (function() {

     var CanvasSupport = Modernizr.canvas; //检查浏览器是否支持canvas
var newBall =function(radius, color, speed, direction, currentX, currentY, elasticity) {

        this.radius = parseFloat(radius);                            //半径
this.color = color;                                          //颜色
this.speed = parseFloat(speed);                              //速度
this.elasticity = parseFloat(elasticity);                    //弹性 
this.direction = parseFloat(direction);                      //入射角
this.currentX = parseFloat(currentX);                        //初始X坐标
this.currentY = parseFloat(currentY);                        //初始Y坐标
this.dx = speed * Math.cos(this.direction * Math.PI /180);  //计算其X轴方向的初始速度
this.dy = speed * Math.sin(this.direction * Math.PI /180);  //计算其Y轴方向的初始速度
this.nextX =this.currentX +this.dx;                        //根据速度和初速度得出其下次移动到的X坐标
this.nextY =this.currentY +this.dy;                        //根据速度和初速度得出其下次移动到的Y坐标


    };

    /* 绘制canvas的背景 */
    var drawBackground =function(contextObj, backgroundColor, canvasWidth, canvasHeight) {

        contextObj.fillStyle = backgroundColor;
        contextObj.fillRect(0, 0, parseInt(canvasWidth), parseInt(canvasHeight));

    };

    
    /* 更新小球状态 */

    var updateBallState =function(ballObj, canvasWidth, canvasHeight, gravityValue, friction) {

        ballObj.currentX = ballObj.nextX;
        ballObj.currentY = ballObj.nextY;
        ballObj.nextX = ballObj.currentX + ballObj.dx;
        ballObj.nextY = ballObj.currentY + ballObj.dy;

        /* 测试对墙壁产生是否X轴碰撞 */

        if (ballObj.nextX < ballObj.radius) {
            ballObj.nextX = ballObj.radius;
            ballObj.dx = Math.max(0, (ballObj.dx + ((1- ballObj.elasticity) * Math.abs(ballObj.dx))) *-1-1);
        }
        elseif ((ballObj.nextX + ballObj.radius) > parseInt(canvasWidth)) {
            ballObj.nextX = parseInt(canvasWidth) - ballObj.radius;
            ballObj.dx = Math.min(0, (ballObj.dx - ((1- ballObj.elasticity) * Math.abs(ballObj.dx))) *-1+1);
        }

        /* 水平运动时受摩擦力影响 */
        elseif (ballObj.currentY >= (parseInt(canvasHeight) - ballObj.radius)) {

            if (ballObj.dx >0) {
                ballObj.dx = Math.max(0, ballObj.dx - (ballObj.dx * friction) -0.01);
            }
            elseif (ballObj.dx <0) {
                ballObj.dx = Math.min(0, ballObj.dx - (ballObj.dx * friction) +0.01);
            }

        }

        /* 测试对墙壁产生是否Y轴碰撞 */
        if (ballObj.nextY < ballObj.radius) {
            ballObj.nextY = ballObj.radius;
            ballObj.dy = Math.max(0, (ballObj.dy + ((1- ballObj.elasticity) * Math.abs(ballObj.dy))) *-1-1);
        }
        elseif ((ballObj.nextY + ballObj.radius) > parseInt(canvasHeight)) {
            ballObj.nextY = parseInt(canvasHeight) - ballObj.radius;
            ballObj.dy = Math.min(0, (ballObj.dy - ((1- ballObj.elasticity) * Math.abs(ballObj.dy))) *-1+1);

        }
        else {
            ballObj.dy = ballObj.dy + gravityValue;
        }

    };

   

    /* 把小球绘制在canvas中 */
    var drawBallsToCanvas =function(ballArray, contextObj, backgroundColor, canvasWidth, canvasHeight, gravityValue, friction) {

    returnfunction() {
        
            drawBackground(contextObj, backgroundColor, canvasWidth, canvasHeight);

            for (var i =0, len = ballArray.length; i < len; i++) {
                contextObj.beginPath(); debugger;
                contextObj.fillStyle = ballArray[i].color;
                contextObj.arc(ballArray[i].currentX, ballArray[i].currentY, ballArray[i].radius, 0, 2* Math.PI, false);

                contextObj.fill();
                contextObj.closePath();

                updateBallState(ballArray[i], canvasWidth, canvasHeight, gravityValue, friction);
               

            }
        }
    };



    return {
    /* 初始化函数 */
        init: function(canvasId, backgroundColor, friction, gravityValue) {
            if (!CanvasSupport)
                return;

            this.backgroundColor = backgroundColor ||"#000";                //背景色，默认为黑色
this.friction = friction ||0.1;                                 //墙壁摩擦系数，默认为0.1
this.gravityValue = gravityValue ||0.2;                         //重力系数，默认为0.2
this.canvasObj = util.$(canvasId);                               //canvas对象
this.canvasWidth = util.getComputedStyle(this.canvasObj).width;  //canvas高度
this.canvasHeight = util.getComputedStyle(this.canvasObj).height;//canvas宽度
this.contextObj =this.canvasObj.getContext('2d');               //2d的context对象
this.ballArray = [];                                             //保存所有小球的数组


            drawBackground(this.contextObj, this.backgroundColor, this.canvasWidth, this.canvasHeight);
            setInterval(drawBallsToCanvas(this.ballArray, this.contextObj, this.backgroundColor, this.canvasWidth, this.canvasHeight, this.gravityValue, this.friction =0.1), 33);

        },
        /* 添加小球 */
        createBall: function(radius, color, speed, direction, currentX, currentY, elasticity) {// 小球半径 颜色 速度 方向

            var ball =new newBall(radius, color, speed, direction, currentX, currentY, elasticity);

            this.ballArray.push(ball);

        }

    }

})();