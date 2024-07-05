class Game {
    static score = 0;

    constructor() {
        this.isPlaying = false;
    }
    start() {
        this.isPlaying = true;
        console.log(`The game has started`);
    }
    end() {
        this.isPlaying = false;
        console.log(`The game has end`);
        Game.updateScore();
    }
    static updateScore() {
        Game.score++;
        console.log(`Score : ${Game.score}`);
    }
}

const game = new Game();
game.start(); // The game has started
game.end(); // The game has end
game.end();