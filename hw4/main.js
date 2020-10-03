import {GameOfLife} from './gameOfLife.js';


var nextStepButton = document.getElementById('nextStepButton');
nextStepButton.onclick = function(){nextStep()};
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
const board = null; //null for random
const cols = canvas.width / 40;
const rows = canvas.height / 40;

let gameOfLife = new GameOfLife(rows, cols, board);
nextStep();


function nextStep()
{
    gameOfLife.step();
    var grid = gameOfLife.board;

    requestAnimationFrame(function(){
        
        for (let col = 0; col < grid.length; col++) {
            for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];

            this.ctx.beginPath();
            this.ctx.rect(col * this.size, row * this.size, this.size, this.size);
            this.ctx.fillStyle = cell ? 'red' : 'white';
            this.ctx.fill();
            this.ctx.stroke();
            }
        }    
    });
}