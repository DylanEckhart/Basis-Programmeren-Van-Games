class SceneMain extends Phaser.Scene {

    constructor() {
        super('SceneMain');
    }

    preload() {
        // This is where we load things into memory
        this.load.image("mario", "images/mario.png");
        this.load.image("hero", "images/hero.png", {
            frameWidth: 32,
            frameHeight: 32
        });
    }

    create() {
        // This is where we create an manipulate objects
        this.mario = this.add.image(50, 50, "mario");
        this.hero = this.add.sprite(240, 320, "hero");
        this.anims.create({
            key: "hero_walk",
            frames: [
                { key: "hero", frame: 1 },
                { key: "hero", frame: 2 },
                { key: "hero", frame: 3 },
                { key: "hero", frame: 4 }
            ],
            frameRate: 4,
            repeat: -1
        });
    }

    update() {
        // This is the method that gets looped continuously
    }

}