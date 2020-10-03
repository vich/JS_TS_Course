import {GameOfLife} from './gameOfLife.js';


var nextStepButton = document.getElementById('nextStepButton');
nextStepButton.onclick = function(){nextStep()};
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
const board = null; //null for random
const size = 20;
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

                ctx.beginPath();
                ctx.rect(col * size, row * size, size, size);
                ctx.fillStyle = cell ? 'red' : 'white';
                ctx.fill();
                ctx.stroke();
            }
        }    
    });
}