let queue = [];
function numIslands(grid) {
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let index = 0; index < grid[i].length; index++) {
            const element = grid[i][index];
            if (element === "1") {
                grid[i][index] = 0;
                queue.push([i,index]);
                bfs(grid);
                islands++;
                queue = [];
            }
        }
    }
    return islands;
}

const bfs = (grid) => {
    let m = grid.length;
    let n = grid[0].length
    while(queue.length){
        let [i, j] = queue.shift();
        // check left
        if(j - 1 >=0 && grid[i][j - 1] === '1') {
            grid[i][j-1] = 0;
            queue.push([i, j - 1]);
        }
        // check right
        if(j+1 < n && grid[i][j+1] === '1') {
            grid[i][j+1] = 0;
            queue.push([i, j+1]);
        }
        // check up
        if(i - 1 >=0  && grid[i-1][j] === '1') {
            grid[i-1][j] = 0;
            queue.push([i -1, j]);
        }
        // check down
        if(i + 1 < m && grid[i+1][j] === '1') {
            grid[i+1][j] = 0;
            queue.push([i+1, j]);
        }
    }
}



module.exports = numIslands;