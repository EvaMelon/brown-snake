// describe("My test suite", () => {
//     it("works!", () => {
//         expect(2 + 3).toEqual(4);
//     });
// });

describe("snake", ()  => {
    describe("indexInSnake(x, y)", () => {
        it("returns the index of snake's segment at given coordiates", () => {
            snake = [ {x: 4, y: 3}, {x: 4, y: 2} , {x: 4, y: 1} ];

            expect (indexInSnake(4, 3)).toEqual(0);
            expect (indexInSnake(4, 2)).toEqual(1);
            // indexInSnake(4, 1); // 0
            // indexInSnake(4, 0); // 1
            // indexInSnake(4, 5); // -1
            // indexInSnake(0, 1); // -1
            
            //expect().toEqual();
        });

        it("returns -1 if the snake is not in the given coordinate", () => {
            // [ {x: 4, y: 1} , {x: 4, y: 0} ]
            snake = [ {x: 4, y: 1} , {x: 4, y: 0} ];
            
            expect( indexInSnake(0, 1) ).toEqual(-1);
            expect (indexInSnake(4, 5) ).toEqual(-1);
        });
    });
});
