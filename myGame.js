// const {
//     pixelRatio,
//     windowWidth,
//     windowHeight
// } = wx.getSystemInfoSync()
// var Phaser = require('./src/phaser.js')

// var Phaser = require('./src/phaser-custom.js')

var mainCanvas = document.getElementById("myCanvas");
////////////////////////////////////////////////////////
function preload ()
{
    this.load.image('ball', 'images/shinyball.png');
    this.load.image('sky', 'images/sunset.png');
}

function create ()
{
    this.add.image(0, 0, 'sky').setOrigin(0);

    group = this.add.group({ key: 'ball', frameQuantity: 128 });

    this.input.on('pointermove', function (pointer) {

        x = pointer.x;
        y = pointer.y;

    });
}

function update (time, delta)
{
    move += delta;

    if (move > 6)
    {
        Phaser.Actions.ShiftPosition(group.getChildren(), x, y);
        move = 0;
    }
}


var config = {
    type: Phaser.WEBGL,
    width: /* window.width */ 1600,
    height: /* window.height */ 800,
    canvas: mainCanvas,
    parent: 'phaser',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var x;
var y;
var move = 0;
var group;

var game = new Phaser.Game(config);
