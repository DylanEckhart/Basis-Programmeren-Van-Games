class SceneMain extends Phaser.Scene {

    constructor() {
        super('SceneMain');
    }

    preload() {
        this.alphaFactor = -0.01;
        this.stepLenght = 5;
        this.bananaX = game.config.width / 2;
        this.bananaY = game.config.height / 2;
        this.load.image("banana", "images/banana.png");

        this.randomText = this.add.text(game.config.width / 2, game.config.height / 2, "Best banana game ever!".toUpperCase(), {
            fontFamily: "sans-serif",
            fontSize: 50,
            color: "white"
        });
        this.randomText.setOrigin(0.5, 0.5)
    }

    create() {
        this.banana = this.add.image(this.bananaX, this.bananaY, "banana");
    }

    update() {
        // Fading behaviour
        if (this.banana.alpha === 0) {
            this.alphaFactor = 0.01;
        }
        if (this.banana.alpha === 0) {
            this.alphaFactor = -0.01;
        }
        this.banana.alpha += this.alphaFactor;

        // Moving behaviour
        if (this.banana.x >= game.config.width) {
            this.stepLenght = this.stepLenght * -1;
            this.banana.flipX = true;
        }
        if (this.banana.x <= 0) {
            this.stepLenght = this.stepLenght * -1;
            this.banana.flipX = false;
        }
        this.banana.x += this.stepLenght;
    }

}