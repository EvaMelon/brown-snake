const UP = 38; 
const DOWN = 40;
const RIGHT = 39;
const LEFT = 37;

let boardWidth = 10;
let boardHeight = 10;
let snake = [ {x: 4, y: 1} ];
let food = getRandomPosition();
let score = 0;
let direction = DOWN;

let scoresElement = document.querySelector(".score");
let boardElement = document.querySelector(".board");

document.addEventListener("keydown", (event) => {
    if (event.which == UP) {
        direction = UP;
    }
    else if (event.which == DOWN) {
        direction = DOWN;
    }
    else if (event.which == LEFT) {
        direction = LEFT;
    }
    else if (event.which == RIGHT) {
        direction = RIGHT;
    }
});



function start() {
    setInterval( () => {
        update();
        render();
    }, 500);
}

function render() {
    const snakeHead = {x:snake[0].x,y:snake[0].y};
    let output = `<table>`;
    for (let yi = 0; yi < boardHeight; yi++) {
        output += `<tr> `;
        for (let xi = 0; xi < boardWidth ; xi++) {
            let snakeIndex = indexInSnake (xi, yi);
            if (snakeIndex > -1) {
                output += `<td class="snake snake${snakeIndex}"></td>`;
                console.log (`<td class="snake snake${snakeIndex}"></td>`)
            }
            else if (yi == food.y && xi == food.x) {
                output += `<td class="food"></td>`;
            }
            else {
                output += `<td></td>`;
            }
        }
        output += `</tr>`;
    }
    output += `</table>`;
    boardElement.innerHTML = output;
    scoresElement.innerHTML = "Score: " + score;
}

function getRandomPosition() {
    return { x: getRandomCoordinate(), y: getRandomCoordinate() };
}

function getRandomCoordinate() {  
    let randomArgument = Math.random() * boardWidth;
    return Math.floor(randomArgument);
}

function update() {
    const snakeHead = {x:snake[0].x,y:snake[0].y};
    if (direction == DOWN) {
        snakeHead.y += 1;
    }
    if (direction == UP) {
        snakeHead.y -= 1;
    }
    if (direction == RIGHT) {
        snakeHead.x += 1;
    }
    if (direction == LEFT) {
        snakeHead.x -= 1; 
    }
    if ( (snakeHead.x == food.x) && (snakeHead.y == food.y) ) {
        score += 1;
        food = getRandomPosition();  
    }
    else {
        snake.pop();
    }
    if ( (snakeHead.y == boardHeight) || (snakeHead.x == boardWidth)
    || (snakeHead.y == -1) || (snakeHead.x == -1) || isInSnake(snakeHead.x, snakeHead.y)) {
        score = 0;
        alert("Game Over\n\n(Reload the page to start again)");
        snake = [];
    }
    snake.unshift(snakeHead); 
} 

function indexInSnake(x, y) {
    for (let i = 0; i < snake.length; i++) {
        var output = "";
        output += snake[i].x;
        output += ", ";
        output += snake[i].y;
        if (output == `${x}, ${y}`) {
            return i;
            
        }
    } 
    return -1;
}

function isInSnake(x, y) {
    for (let i = 0; i < snake.length; i++) {
        var output = "";
        output += snake[i].x;
        output += ", ";
        output += snake[i].y;
        if (output == `${x}, ${y}`) {
            return true;
        }
    } 
    return false;
}
