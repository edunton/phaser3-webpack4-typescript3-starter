import 'phaser';

export class MenuScene extends Phaser.Scene {

    private musicalTheme : Phaser.Sound.BaseSound;
    constructor(){
        super('Menu');
    }

    preload () {
        
    }

    create () {
        this.musicalTheme = this.sound.add('theme');
        this.musicalTheme.play();

        this.add.text(100, 100, 'Hello Phaser 3 / Webpack 4 / Typescript 3!', { fill: '#0f0' });

        const logo = this.add.image(400, 150, 'logo');
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }

    update(){

    }
}