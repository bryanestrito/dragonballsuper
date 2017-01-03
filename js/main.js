var GameState = {
    // load the game assets before the game starts
    preload: function () {
        this.load.image('background', 'img/dragonballsuper_background.jpg');
        this.load.image('son_goku', 'img/characters/son_goku.png');
    },
    // executed after everything is loaded
    create: function () {
        this.background = this.game.add.sprite(0, 0, 'background');

        gameCenterX = this.game.world.centerX;
        gameCenterY = this.game.world.centerY;

        this.son_goku = this.game.add.sprite(gameCenterX, gameCenterY, 'son_goku');
        this.son_goku.anchor.setTo(0.5);
        this.son_goku.scale.setTo(0.5);

        this.son_goku2 = this.game.add.sprite(100, 100, 'son_goku');
        this.son_goku2.anchor.setTo(0.5);
        this.son_goku2.scale.setTo(-1, 1);
        this.son_goku2.angle = -45;
    },
    // this is executed multiple times per second
    update: function () {
        this.son_goku2.angle += 0.5;
    }
};

// initiate the Phase framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.add('GameState', GameState);
game.state.start('GameState');
