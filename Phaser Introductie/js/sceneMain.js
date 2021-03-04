class SceneMain extends Phaser.Scene {

    constructor() {
        super('SceneMain');
    }

    preload() {
        this.alphaFactor = -0.01;
        this.stepLenght = 25;
        this.score = 0;
        this.bananaX = game.config.width / 2;
        this.bananaY = game.config.height / 2;
        this.load.image("banana", "images/banana.png");

        this.randomText = this.add.text(game.config.width / 2, game.config.height / 2, "Best banana game ever!".toUpperCase(), {
            fontFamily: "sans-serif",
            fontSize: 50,
            color: "white"
        });
        this.randomText.setOrigin(0.5, 0.5);
        this.renderScore();
    }

    renderScore() {
        this.scoreText = this.add.text(50, 50, "Score: " + this.score, {
            fontFamily: "sans-serif",
            fontSize: 50,
            color: "white"
        });
    }

    spawnBanana() {
        this.banana = this.add.image(this.bananaX, this.bananaY, "banana");

        this.banana.setInteractive();
        this.banana.on("pointerdown", () => {
            this.score++;
            this.banana.destroy();
            this.scoreText.destroy();
            this.renderScore();
            this.spawnBanana();
        });
    }

    create() {
        this.spawnBanana();
    }

    update() {
        // Fading behaviour
        if (this.banana.alpha === 0) {
            this.alphaFactor = 0.01;
        }
        if (this.banana.alpha === 1) {
            this.alphaFactor = -0.01;
        }
        this.banana.alpha += this.alphaFactor;

        // Horizontal behaviour
        if (this.banana.x >= game.config.width) {
            this.stepLenght = this.stepLenght * -1;
            this.banana.flipX = true;
        }
        if (this.banana.x <= 0) {
            this.stepLenght = this.stepLenght * -1;
            this.banana.flipX = false;
        }
        this.banana.x += this.stepLenght;

        // Vertical behaviour
        if (this.banana.y >= game.config.height) {
            this.stepLenght = this.stepLenght * -1;
        }
        if (this.banana.y <= 0) {
            this.stepLenght = this.stepLenght * -1;
        }
        this.banana.y += this.stepLenght;
    }

}