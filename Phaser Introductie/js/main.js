var game;

window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        backgroundColor: Phaser.Display.Color.HexStringToColor("#f7e167"),
        scene: [SceneMain]
    }
    game = new Phaser.Game(config);
}