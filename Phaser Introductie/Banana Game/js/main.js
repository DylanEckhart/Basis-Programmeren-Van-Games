var game;

window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'phaser-game',
        backgroundColor: Phaser.Display.Color.HexStringToColor("#f7e167"),
        scene: [SceneMain]
    }
    game = new Phaser.Game(config);
}