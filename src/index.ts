import 'phaser';
import {BootScene} from './scenes/BootScene'
import {MenuScene} from './scenes/MenuScene'

const config : GameConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene : [BootScene,MenuScene]
};

class Game extends Phaser.Game{
    constructor(){
        super(config);
    }

    preload(): void {
        this.boot();
    }
}

window.addEventListener("load", () => {
    window['game'] = new Game();
});
