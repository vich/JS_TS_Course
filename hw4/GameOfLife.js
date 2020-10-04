export class GameOfLife{

    #rows;
    #columons;
    #currentBaord;
    #previosBaord;

    constructor(rows, columons, board){
        this.#rows = rows;
        this.#columons = columons;
        
        if(!board){
            board = this.#buildRandomBoard();
        }
        
        this.initBaord(board);
    }

    #buildRandomBoard(){
        return new Array(this.#columons).fill(null)
          .map(() => new Array(this.#rows).fill(null)
            .map(() => Math.floor(Math.random() * 2)));
    }

    initBaord(board){
        this.#currentBaord = board;
    }

    step(){
        this.#previosBaord = this.#currentBaord;
        
        //foreach cell 
        for (let y = 0; y < this.#rows-1; y++) {
            for (let x = 0; x < this.#columons-1; x++) {
                let state = this.#previosBaord[y][x];

                //check nighabores
                let alive_count = this.numberOfNighabore(y, x);

                //take action and update current board
                let new_state = this.calculateNewState(state, alive_count);
                this.#currentBaord[y][x] = new_state;
            }        
        }
    }   

    numberOfNighabore(y, x) {
        let alive_count = 0;

        if(y>=0 && y<=this.#rows-1 && x>=0 && x<=this.#columons-1){ //validation
        
              let state = this.#previosBaord[y][x];
              // Calculate above/below/left/right row/column values
              let row_above = (y-1 >= 0) ? y-1 : null;
              let row_below = (y+1 <= this.#rows-1) ? y+1 : null;
              let column_left = (x-1 >= 0) ? x-1 : null;
              let column_right = (x+1 <= this.#columons-1) ? x+1 : null;
  
              let neighbours = {
                top_left: this.#previosBaord[row_above]?.[column_left],
                top_center: this.#previosBaord[row_above]?.[x],
                top_right: this.#previosBaord[row_above]?.[column_right],
                left: this.#previosBaord[y]?.[column_left],
                right: this.#previosBaord[y]?.[column_right],
                bottom_left: this.#previosBaord[row_below]?.[column_left],
                bottom_center: this.#previosBaord[row_below]?.[x],
                bottom_right: this.#previosBaord[row_below]?.[column_right]
              };
  
              for (var neighbour in neighbours) {
                if (neighbours[neighbour]) {
                    alive_count++;
                } 
              }
        }

        return alive_count;
    }

    calculateNewState(state, alive_count) {
        var new_state = state;
        if (state) {
            if (alive_count < 2 || alive_count > 3) {
                // new state: dead, overpopulation/ underpopulation
                new_state = false;
            } else if (alive_count === 2 || alive_count === 3) {
                // lives on to next generation
                new_state = true;
            }
        } else {
            if (alive_count === 3) {
                // new state: live, reproduction
                new_state = true;
            }
        }
        return new_state;
    }

    board() {
        return this.#currentBaord;
    }
}